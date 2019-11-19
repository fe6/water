<template>
  <div
    ref="popover"
    v-doc-click="bodyClick"
    class="w-popover-core"
    :class="className"
    @mouseenter="triggerHandle($event)"
    @mouseleave="coreLeave($event)"
    @click="triggerHandle($event)"
  >
    <slot></slot>
    <transition name="fade">
      <div
        v-show="status"
        v-if="hasSlots"
        ref="popElem"
        v-transfer-dom="getContainer && getContainer()"
        class="w-popover"
        :class="popoverClass"
        :data-transfer="transfer"
        @click="popoverClick($event)"
        @mouseenter="popoverEnter($event)"
        @mouseleave="popoverLeave($event)"
      >
        <div class="w-popover-main">
          <div
            v-if="$slots.title"
            class="w-popover-title"
            :class="titleClass"
            :style="titleStyle"
          >
            <slot name="title"></slot>
          </div>
          <div
            v-if="$slots.content"
            class="w-popover-content"
            :style="contentStyle"
          >
            <slot name="content"></slot>
          </div>
        </div>
        <i class="w-popover-arrow" :class="arrowClass" :style="arrowStyle"></i>
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
  export default class Popover extends mixins(poperMixin) {
    name: string = 'WPopover';

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

    @Prop(Object) private titleStyle!: object;

    @Prop(Object) private contentStyle!: object;

    @Prop(Function) private getContainer!: Function;

    @Prop({
      type: Function,
      default: noop,
    })
    private change!: Function;

    @Prop([String, Object, Array]) private className!: string | object | any[];

    get titleClass() {
      return [
        {
          'w-popover-title-border': this.$slots.content,
        },
      ];
    }

    get hasSlots() {
      return this.$slots.title || this.$slots.content;
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

    get popoverClass(): any[] {
      return [
        {
          'w-popover-horbottom': this.isHorBottom,
          'w-popover-hortop': this.isHorTop,
          'w-popover-horleft': this.isVerLeft,
          'w-popover-horright': this.isVerRight,
        },
      ];
    }

    get arrowClass(): any[] {
      return [
        {
          'w-popover-arrow-hortop': this.isHorTop,
          'w-popover-arrow-horbottom': this.isHorBottom,
          'w-popover-arrow-verendright': this.isVerEndRight,
          'w-popover-arrow-verendleft': this.isVerEndLeft,
          'w-popover-arrow-vercenter': this.isVerCenter,

          'w-popover-arrow-horleft': this.isVerLeft,
          'w-popover-arrow-horright': this.isVerRight,
          'w-popover-arrow-horendbottom': this.isHorEndBottom,
          'w-popover-arrow-horendtop': this.isVerEndTop,
          'w-popover-arrow-horcenter': this.isHorCenter,
        },
      ];
    }

    mounted() {
      this.resizeEvent = addDOMEventListener(
        window,
        'resize',
        this.resizeChange
      );
    }

    beforeDestroy() {
      this.resizeEvent.remove();
    }

    resizeChange() {
      setPostion(this, 'popover');
    }

    isTrigger(ev: MouseEvent): boolean {
      return getEventType(ev.type) === this.trigger;
    }

    triggerHandle(ev: MouseEvent) {
      clearTimeout(this.timer);
      this.coreShow(ev);
    }

    bodyClick(ev: MouseEvent) {
      if (this.status) {
        this.coreLeave(ev);
      }
    }

    coreShow(ev: MouseEvent) {
      this.timer = setTimeout(() => {
        this.setStatus(true, this.isTrigger(ev), true);
      }, this.enterDelay);
    }

    coreLeave(ev: MouseEvent) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.setStatus(false, this.isTrigger(ev), true);
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

    popoverEnter() {
      clearTimeout(this.timer);
    }

    popoverLeave(ev: MouseEvent) {
      clearTimeout(this.timer);
      this.coreLeave(ev);
    }

    popoverClick(ev: MouseEvent) {
      ev.stopPropagation();
    }

    @Watch('value')
    watchValue(val: boolean) {
      this.setStatus(val, true);
    }
  }
</script>

<style lang="scss">
  @import 'popover.scss';
</style>
