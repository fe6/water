<template>
  <div v-transfer-dom="getContainer && getContainer()" :data-transfer="transfer">
    <transition name="fade">
      <div
        class="w-modal-wrap"
        :class="{
          'w-modal-mask': mask,
        }"
        v-show="status"
        @click="wrapClickFn"
      >
        <div
          class="w-modal"
          :class="{
            'w-modal-center': centerValue,
          }"
          :style="modalStyle"
          @click.stop="noop"
        >
          <div
            class="w-modal-header"
            :class="titleClassName"
            v-if="titleValue || $slots.title"
          >
            <slot name="title">
              <div class="w-modal-title" v-if="titleValue" v-html="titleValue"></div>
            </slot>
          </div>
          <i class="w-modal-close" v-if="closable" @click="cancelFn"></i>
          <div class="w-modal-body" :class="bodyClassName" :style="bodyStyle">
            <slot></slot>
          </div>
          <div
            class="w-modal-footer"
            :class="footerClassName"
            v-if="(okable || cancelable) || $slots.footer"
          >
            <slot name="footer">
              <w-button
                class="w-modal-button w-modal-button-cancel"
                size="large"
                type="border"
                @click="cancelFn"
                v-if="cancelable"
              >{{cancelText}}</w-button>
              <w-button
                class="w-modal-button w-modal-button-ok"
                size="large"
                :type="okType"
                :loading="loadingValue"
                @click="okFn"
                v-if="okable"
              >{{okText}}</w-button>
            </slot>
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
  Emit,
  Vue,
  Watch,
} from 'vue-property-decorator';
import addDOMEventListener from 'add-dom-event-listener';
import TransferDom from '@/directives/transfer-dom';
import WButton from '../button/Button.vue';
import { noop } from '@/helper/noop';

Vue.directive('transfer-dom', (TransferDom as any));

@Component({
  components: {
    WButton,
  },
})
export default class Modal extends Vue {
  name: string = 'Modal';

  footer: boolean = true;

  body: boolean = false;

  status: boolean = false;

  keyUpEvent: any = null;

  noop: Function = noop;

  @Model('model', { type: Boolean }) readonly value!: boolean;

  @Prop(Boolean) private loading!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  }) private mask!: boolean;

  @Prop(Boolean) private maskClosable!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  }) private closable!: boolean;

  @Prop(Boolean) private esc!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  }) private center!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  }) private cancelable!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  }) private okable!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  }) private transfer!: boolean;

  @Prop({
    type: Function,
    default: () => document.body,
  }) private getContainer!: Function;

  @Prop(Function) private before!: Function;

  @Prop({
    type: Function,
    default: noop,
  }) private cancel!: Function;

  @Prop({
    type: Function,
    default: noop,
  }) private ok!: Function;

  @Prop({
    type: Function,
    default: noop,
  }) private change!: Function;

  @Prop(String) private title!: string;

  @Prop({
    type: String,
    default: '取消',
  }) private cancelText!: string;

  @Prop({
    type: String,
    default: '确定',
  }) private okText!: string;

  @Prop(String) private okType!: string;

  @Prop({
    type: Object,
    default: noop,
  }) private modalStyle!: object;

  @Prop({
    type: Object,
    default: noop,
  }) private bodyStyle!: object;

  @Prop([String, Object, Array]) private footerClassName!: string | object | any[];

  @Prop([String, Object, Array]) private titleClassName!: string | object | any[];

  @Prop([String, Object, Array]) private bodyClassName!: string | object | any[];

  get titleValue() {
    return this.title;
  }

  get centerValue() {
    return this.center;
  }

  get loadingValue() {
    return this.loading;
  }

  mounted() {
    this.setStatus(this.value);
    this.bindKeyUp();
  }

  beforeDestroy() {
    this.unBindKeyUp();
  }

  setScroll(val: boolean) {
    document.body.style.overflow = val ? 'hidden' : '';
  }

  @Watch('value')
  @Emit('model')
  setStatus(val: boolean) {
    this.status = val;
    this.setScroll(val);
    return this.status;
  }

  @Emit('change')
  changeStatus(type: string) {
    this.setStatus(false);
    (this as any)[type](this.status);
    this.change(this.status);
    return this.status;
  }

  @Emit('cancel')
  cancelFn() {
    if (!this.loadingValue) {
      this.changeStatus('cancel');
    }
    return this.status;
  }

  @Emit('ok')
  okFn() {
    if (this.before) {
      this.before().then(() => {
        this.$nextTick(() => {
          this.changeStatus('ok');
        });
      });
    } else {
      this.changeStatus('ok');
    }
    return this.status;
  }

  bindKeyUp() {
    // ESC close
    this.keyUpEvent = addDOMEventListener(document, 'keydown', this.keyUpFn);
  }

  unBindKeyUp() {
    // ESC close
    this.keyUpEvent.remove();
    this.keyUpEvent = null;
  }

  @Emit('cancel')
  keyUpFn(ev = window.event) {
    if (this.status && this.esc && (ev as any).keyCode === 27 && !this.loadingValue) {
      this.changeStatus('cancel');
    }
    return this.status;
  }

  wrapClickFn() {
    if (this.maskClosable) {
      this.cancelFn();
    }
  }
}
</script>

<style lang="scss">
  @import "modal.scss";
</style>
