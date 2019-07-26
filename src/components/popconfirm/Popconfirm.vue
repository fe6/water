<template>
  <div
    class="w-popconfirm-alert"
    :class="className"
    @click="triggerHandle($event)"
    v-doc-click="bodyClick"
    ref="popconfirm"
  >
    <slot></slot>
    <transition name="fade">
      <div
        class="w-popconfirm"
        :class="popconfirmClass"
        ref="popElem"
        v-show="status"
        v-transfer-dom="getContainer && getContainer()"
        :data-transfer="transfer"
        @click="popoverClick($event)"
      >
        <i class="w-popconfirm-arrow" :class="arrowClass"></i>
        <div class="w-popconfirm-main">
          <div class="w-popconfirm-core" v-if="$slots.content">
            <Icon className="w-popconfirm-icon">
              <svg
                class="icon"
                width="16px"
                height="16px"
                viewBox="0 0 16 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path :d="warningPath" fill="#ffa430" />
              </svg>
            </Icon>
            <div class="w-popconfirm-content">
              <slot name="content"></slot>
            </div>
          </div>
          <div class="w-popconfirm-buttons">
            <w-button
              class="w-popconfirm-button"
              size="small"
              :stop="true"
              type="border"
              @click="cancelFn($event)"
            >{{cancelText}}</w-button>
            <w-button
              class="w-popconfirm-button"
              size="small"
              :stop="true"
              :loading="loading"
              type="primary"
              @click="okFn($event)"
            >{{okText}}</w-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Model,
  Prop,
  Vue,
  Watch,
} from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import addDOMEventListener from 'add-dom-event-listener';
import TransferDom from '@/directives/transfer-dom';
import docClick from '@/directives/doclick';
import warningPath from './warning';
import WButton from '../button/Button.vue';
import Icon from '../icon/Icon.vue';
import {
  setPostion,
  getEventType,
} from '@/helper/poper';
import poperMixin from '@/helper/popermixin';
import { noop } from '@/helper/noop';

Vue.directive('transfer-dom', (TransferDom as any));

Vue.directive('doc-click', (docClick as any));

interface ColorEntity {
  ['border-top-color']?: string;
  ['border-bottom-color']?: string;
  ['border-left-color']?: string;
  ['border-right-color']?: string;
}

@Component({
  components: {
    WButton,
    Icon,
  },
})
export default class Popconfirm extends mixins(poperMixin) {
  warningPath: string = warningPath;

  status: boolean = false;

  resizeEvent: any = null;

  clickEvent: any = null;

  @Model('model', { type: Boolean }) readonly value!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  }) private transfer!: boolean;

  @Prop(Boolean) private loading!: boolean;

  @Prop({
    type: Number,
    default: 4,
  }) private interval!: number;

  @Prop({
    type: String,
    default: 'top',
  }) private placement!: string;

  @Prop({ // 预设，目前不支持
    type: String,
    default: 'click',
  }) private trigger!: string;

  @Prop({
    type: String,
    default: '取消',
  }) private cancelText!: string;

  @Prop({
    type: String,
    default: '确定',
  }) private okText!: string;

  @Prop(Function) private getContainer!: Function;

  @Prop({
    type: Function,
    default() {
      return new Promise((resolve) => {
        resolve();
      });
    },
  }) private before!: Function;

  @Prop({
    type: Function,
    default: noop,
  }) private change!: Function;

  @Prop({
    type: Function,
    default: noop,
  }) private cancel!: Function;

  @Prop({
    type: Function,
    default: noop,
  }) private ok!: Function;

  @Prop([String, Object, Array]) private className!: string | object | any[];

  get popconfirmClass(): any[] {
    return [
      {
        'w-popconfirm-horbottom': this.isHorBottom,
        'w-popconfirm-hortop': this.isHorTop,
        'w-popconfirm-horleft': this.isVerLeft,
        'w-popconfirm-horright': this.isVerRight,
      },
    ];
  }

  get arrowClass(): any[] {
    return [
      {
        'w-popconfirm-arrow-hortop': this.isHorTop,
        'w-popconfirm-arrow-horbottom': this.isHorBottom,
        'w-popconfirm-arrow-verendright': this.isVerEndRight,
        'w-popconfirm-arrow-verendleft': this.isVerEndLeft,
        'w-popconfirm-arrow-vercenter': this.isVerCenter,

        'w-popconfirm-arrow-horleft': this.isVerLeft,
        'w-popconfirm-arrow-horright': this.isVerRight,
        'w-popconfirm-arrow-horendbottom': this.isHorEndBottom,
        'w-popconfirm-arrow-horendtop': this.isVerEndTop,
        'w-popconfirm-arrow-horcenter': this.isHorCenter,
      },
    ];
  }

  mounted() {
    this.setStatus(this.value, true);
    this.resizeEvent = addDOMEventListener(window, 'resize', this.resizeChange);
  }

  beforeDestroy() {
    this.resizeEvent.remove();
  }

  resizeChange() {
    setPostion(this, 'popconfirm');
  }

  isTrigger(ev: MouseEvent): boolean {
    return getEventType(ev.type) === this.trigger;
  }

  triggerHandle(ev: MouseEvent) {
    this.setStatus(!this.status, this.isTrigger(ev), true);
  }

  bodyClick(ev: MouseEvent) {
    if (this.status) {
      this.setStatus(false, this.isTrigger(ev), true);
    }
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

  cancelFn({ ev }: any) {
    if (!this.loading) {
      this.changeStatus(ev, 'cancel');
    }
  }

  okFn({ ev }: any) {
    this.before().then(() => {
      this.$nextTick(() => {
        this.changeStatus(ev, 'ok');
      });
    });
  }

  changeStatus(ev: MouseEvent, type: string) {
    this.triggerHandle(ev);
    ((this as any)[type] as Function)(this.status);
    this.$emit(type, this.status);
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
  @import "popconfirm.scss";
</style>
