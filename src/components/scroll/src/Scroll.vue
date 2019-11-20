<template>
  <div
    class="w-scroll"
    :class="{
      ['w-scroll-active']: isCursorDown,
    }"
  >
    <WSpin class="w-scroll-spin" v-model="loading">
      <div
        class="w-scroll-wrap"
        :class="wrapClassName"
        ref="wrap"
        @mousewheel="handleScroll"
      >
        <div class="w-scroll-body" :class="bodyClassName" ref="resize">
          <slot></slot>
        </div>
      </div>
    </WSpin>
    <WBar
      :isVertical="isVertical"
      :move="move"
      :size="size"
      @move="barMove"
      @clickTrack="barClickTrack"
      @startDrag="dragChange"
      @endDrag="dragChange"
    ></WBar>
  </div>
</template>

<script lang="ts">
  import addDOMEventListener from 'add-dom-event-listener';
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import WSpin from '@/components/spin/src/Spin.vue';
  import { noop } from '@/helper/noop';
  import { isFunction } from '@/helper/type';
  import { preventDefaultExceptionFn } from '@/helper/node';
  import WBar, {
    HandleScrollEntity,
    ThumbPositionPercentageEntity,
  } from './Bar.vue';
  import { VERTICAL_ENUM, HORIZONTAL_ENUM, DIR_ENUM } from './ast';

  @Component({
    components: {
      WBar,
      WSpin,
    },
  })
  export default class Scroll extends Vue {
    size: string = '0';

    move: number = 0;

    resizeEvent: any = null;

    isCursorDown: boolean = false;

    isPulling: boolean = false;

    lastScroll: number = -1; // 备份比较上下

    scrollDir: string = '';

    @Prop({
      type: Boolean,
      default: true,
    })
    private noResize!: boolean; // 如果 container 尺寸不会发生变化，最好设置它可以优化性能

    @Prop(Boolean) private disabled!: boolean;

    @Prop(Boolean) private loading!: boolean;

    @Prop(Boolean) private openPull!: boolean; // 是否开启加载更多

    @Prop({
      type: Boolean,
      default: true,
    })
    private stopPropagation!: boolean;

    @Prop({
      type: Boolean,
      default: true,
    })
    private preventDefault!: boolean;

    @Prop({
      type: Boolean,
      default: true,
    })
    private edgeIsPreventDefault!: boolean; // 灵界点不阻止

    @Prop({
      type: Number,
      default: 100,
    })
    private scrollStep!: number;

    @Prop({
      type: Number,
      default: 0,
    })
    private threshold!: number;

    @Prop({
      type: String,
      default: 'vertical',
    })
    private type!: string;

    @Prop({
      type: Object,
      default() {
        return {
          tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/,
        };
      },
    })
    private preventDefaultException!: object;

    @Prop({
      type: Function,
      default: noop,
    })
    private scroll!: Function;

    @Prop({
      type: Function,
      default() {
        (this as any).finishPull();
      },
    })
    private pulling!: Function;

    @Prop([String, Object, Array]) private wrapClassName!:
      | string
      | object
      | any[];

    @Prop([String, Object, Array]) private bodyClassName!:
      | string
      | object
      | any[];

    get wrap() {
      return this.$refs.wrap as any;
    }

    get resize() {
      return this.$refs.resize as any;
    }

    get isVertical(): boolean {
      return this.type === 'vertical';
    }

    get bar() {
      return this.isVertical ? VERTICAL_ENUM : HORIZONTAL_ENUM;
    }

    mounted() {
      this.$nextTick(this.update);

      if (!this.noResize) {
        this.resizeEvent = addDOMEventListener(
          window,
          'resize',
          this.updateResize
        );
      }
    }

    beforeDestroy() {
      if (!this.noResize) {
        this.resizeEvent.remove();
      }
    }

    update() {
      const { clientSize, scrollSize } = this.bar;
      const percentage = (this.wrap[clientSize] * 100) / this.wrap[scrollSize];

      this.getSize(percentage);
    }

    updateResize() {
      this.update();
      this.scrollMove({
        ev: null,
        scrollScale: 0,
        scrollChange: 0,
        eventType: 'resize',
      });
    }

    getSize(percentage: number) {
      this.size = percentage < 100 ? `${percentage}%` : '';
    }

    handleScroll(ev: any): void {
      const { scroll, clientSize } = this.bar;
      let scrollChange = 0;
      let scrollScale = 0;
      const scrollSpace = this.wrap[scroll] + this.wrap[clientSize];
      const scrollMax = this.resize[clientSize];

      if (scrollSpace < scrollMax || this.wrap[scroll] > 0) {
        scrollScale = ev.wheelDelta
          ? -ev.wheelDelta / 120
          : (ev.detail || 0) / 3;

        scrollChange = this.wrap[scroll] + scrollScale * this.scrollStep;
        this.scrollMove({
          ev,
          scrollChange,
          scrollScale,
          eventType: 'scroll',
        });
      }
    }

    scrollMove(params: HandleScrollEntity) {
      if (!this.disabled) {
        const { scrollChange, ev } = params;
        const { scroll, clientSize } = this.bar;
        const scrollSpace = this.wrap[scroll] + this.wrap[clientSize];
        const scrollMax = this.resize[clientSize];
        const evt = ev as any;

        this.wrap[scroll] = scrollChange;
        this.move = (this.wrap[scroll] * 100) / this.wrap[clientSize];

        // 方向判断
        if (this.lastScroll !== this.wrap[scroll]) {
          this.scrollDir =
            this.lastScroll < this.wrap[scroll] ? DIR_ENUM.NEXT : DIR_ENUM.PREV;
          this.lastScroll = this.wrap[scroll];

          // 多个滚动嵌套的时候，可以设置 stopPropagation 进行独立滚动
          if (this.stopPropagation && evt && isFunction(evt.stopPropagation)) {
            evt.stopPropagation();
          }

          if (
            this.preventDefault &&
            evt &&
            isFunction(evt.preventDefault) &&
            !preventDefaultExceptionFn(evt.target, this.preventDefaultException)
          ) {
            evt.preventDefault();
          }
        } else {
          this.scrollDir = this.openPull ? this.scrollDir : '';

          if (
            this.preventDefault &&
            !this.edgeIsPreventDefault &&
            evt &&
            isFunction(evt.preventDefault) &&
            !preventDefaultExceptionFn(evt.target, this.preventDefaultException)
          ) {
            evt.preventDefault();
          }
        }

        const pullParams = {
          ...params,
          dir: this.scrollDir,
        };

        // 上拉加载更多
        if (
          this.openPull &&
          !this.isPulling &&
          this.scrollDir === DIR_ENUM.NEXT &&
          scrollMax - scrollSpace <= this.threshold
        ) {
          this.isPulling = true;
          pullParams.eventType = 'pulling';
          this.pulling(pullParams);
          this.$emit('pulling', pullParams);
        }

        // 下拉加载更多
        if (
          this.openPull &&
          !this.isPulling &&
          this.scrollDir === DIR_ENUM.PREV &&
          scrollChange <= this.threshold
        ) {
          this.isPulling = true;
          pullParams.eventType = 'pulling';
          this.pulling(pullParams);
          this.$emit('pulling', pullParams);
        }

        if (this.scrollDir) {
          this.scroll(pullParams);
          this.$emit('scroll', pullParams);
        }
      }
    }

    barMove(params: ThumbPositionPercentageEntity) {
      const { scrollScale, ev, eventType, thumbPositionPercentage } = params;
      this.scrollMove({
        ev,
        scrollChange:
          (thumbPositionPercentage * this.wrap[this.bar.scrollSize]) / 100,
        scrollScale,
        eventType,
      });
    }

    barClickTrack(params: ThumbPositionPercentageEntity) {
      const { scrollScale, ev, eventType, thumbPositionPercentage } = params;
      this.scrollMove({
        ev,
        scrollChange:
          (thumbPositionPercentage * this.wrap[this.bar.scrollSize]) / 100,
        scrollScale,
        eventType,
      });
    }

    dragChange(isCursorDown: boolean) {
      this.isCursorDown = isCursorDown;
    }

    // 刷新，重新计算
    refresh() {
      this.$nextTick(() => {
        this.update();
      });
    }

    // 加载完毕
    finishPull() {
      this.isPulling = false;
      this.lastScroll = -1;
      this.scrollDir = '';
    }
  }
</script>

<style lang="scss">
  @import './scroll.scss';
</style>
