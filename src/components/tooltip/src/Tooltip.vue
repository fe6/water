<!-- @format -->

<template>
  <div
    ref="tooltip"
    v-doc-click="bodyClick"
    class="w-tooltip-core"
    :class="className"
    @mouseenter="triggerHandle($event)"
    @mouseleave="mouseleave($event)"
    @click="triggerHandle($event)"
  >
    <slot></slot>
    <transition name="fade">
      <div
        v-show="status"
        v-if="contentValue"
        ref="popElem"
        v-transfer-dom="getContainer && getContainer()"
        class="w-tooltip"
        :class="tooltipClass"
        :data-transfer="transfer"
      >
        <div class="w-tooltip-content" :style="contentStyle">
          {{ content }}
        </div>
        <i class="w-tooltip-arrow" :class="arrowClass" :style="arrowStyle"></i>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Vue, Watch } from 'vue-property-decorator';
  import { mixins } from 'vue-class-component';
  import addDOMEventListener from 'add-dom-event-listener';
  import TransferDom from '@/directives/transfer-dom';
  import docClick from '@/directives/doclick';
  import { setPostion, getEventType } from '@/helper/poper';
  import poperMixin from '@/helper/popermixin';
  import { noop } from '@/helper/noop';

  Vue.directive('transfer-dom', TransferDom as any);

  Vue.directive('doc-click', docClick as any);

  interface ColorEntity {
    ['border-top-color']?: string;
    ['border-bottom-color']?: string;
    ['border-left-color']?: string;
    ['border-right-color']?: string;
  }

  @Component
  export default class Tooltip extends mixins(poperMixin) {
    name: string = 'WTooltip';

    status = false;

    resizeEvent: any = null;

    timer: any = null;

    @Model('model', { type: Boolean }) readonly value!: boolean;

    @Prop({
      type: Boolean,
      default: true,
    })
    private transfer!: boolean;

    @Prop({
      type: Number,
      default: 0,
    })
    private enterDelay!: number;

    @Prop({
      type: Number,
      default: 100,
    })
    private leaveDelay!: number;

    @Prop({
      type: Number,
      default: 4,
    })
    private interval!: number;

    @Prop({
      type: String,
      default: 'top',
    })
    private placement!: string;

    @Prop({
      type: String,
      default: 'hover',
    })
    private trigger!: string;

    @Prop(String) private content!: string;

    @Prop(String) private arrowColor!: string;

    @Prop(Object) private contentStyle!: object;

    @Prop(Function) private getContainer!: Function;

    @Prop({
      type: Function,
      default: noop,
    })
    private change!: Function;

    @Prop([String, Object, Array]) private className!: string | object | any[];

    get contentValue() {
      return this.content;
    }

    get arrowStyle(): ColorEntity {
      const color: ColorEntity = {};
      if (this.isHorTop && this.arrowColor) {
        color['border-top-color'] = this.arrowColor;
      }
      if (this.isHorBottom && this.arrowColor) {
        color['border-bottom-color'] = this.arrowColor;
      }
      if (this.isVerLeft && this.arrowColor) {
        color['border-left-color'] = this.arrowColor;
      }
      if (this.isVerRight && this.arrowColor) {
        color['border-right-color'] = this.arrowColor;
      }
      return color;
    }

    get tooltipClass(): any[] {
      return [
        {
          'w-tooltip-horbottom': this.isHorBottom,
          'w-tooltip-hortop': this.isHorTop,
          'w-tooltip-horleft': this.isVerLeft,
          'w-tooltip-horright': this.isVerRight,
        },
      ];
    }

    get arrowClass(): any[] {
      return [
        {
          'w-tooltip-arrow-hortop': this.isHorTop,
          'w-tooltip-arrow-horbottom': this.isHorBottom,
          'w-tooltip-arrow-verendright': this.isVerEndRight,
          'w-tooltip-arrow-verendleft': this.isVerEndLeft,
          'w-tooltip-arrow-vercenter': this.isVerCenter,

          'w-tooltip-arrow-horleft': this.isVerLeft,
          'w-tooltip-arrow-horright': this.isVerRight,
          'w-tooltip-arrow-horendbottom': this.isHorEndBottom,
          'w-tooltip-arrow-horendtop': this.isVerEndTop,
          'w-tooltip-arrow-horcenter': this.isHorCenter,
        },
      ];
    }

    mounted() {
      this.resizeEvent = addDOMEventListener(
        window,
        'resize',
        this.resizeChange,
      );
    }

    beforeDestroy() {
      this.resizeEvent.remove();
    }

    resizeChange() {
      setPostion(this, 'tooltip');
    }

    isTrigger(ev: MouseEvent): boolean {
      return getEventType(ev.type) === this.trigger;
    }

    triggerHandle(ev: MouseEvent) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.setStatus(!this.status, this.isTrigger(ev), true);
      }, this.enterDelay);
    }

    bodyClick(ev: MouseEvent) {
      if (this.status) {
        this.triggerHandle(ev);
      }
    }

    mouseleave(ev: MouseEvent) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.setStatus(!this.status, this.isTrigger(ev), true);
      }, this.leaveDelay);
    }

    setStatus(val: boolean, change: boolean, emit?: boolean) {
      if (change) {
        this.status = val;
        this.resizeChange();
      }
      if (change && emit) {
        this.change(this.status);
        this.$emit('change', this.status);
        this.$emit('model', this.status);
      }
    }

    @Watch('value')
    watchValue(val: boolean) {
      this.setStatus(val, true);
    }
  }
</script>

<style lang="scss">
  @import 'tooltip.scss';
</style>
