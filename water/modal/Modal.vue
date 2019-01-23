<template>
  <div v-transfer-dom="getContainer()" :data-transfer="transfer" @keyup="keyUpFn">
    <transition name="fade">
      <div class="w-modal-wrap" :class="wrapClass" v-show="status" @click="wrapClickFn">
        <div class="w-modal" :class="modalClass" :style="modalStyle" @click.stop="noop">
          <div class="w-modal-header" :class="titleName" v-if="titleValue || $slots.title">
            <slot name="title">
              <div class="w-modal-title" v-if="titleValue" v-html="titleValue"></div>
            </slot>
          </div>
          <i class="w-modal-close" :class="closeName" v-if="closable" @click="cancelFn"></i>
          <div class="w-modal-body" :class="bodyName" :style="bodyStyle">
            <slot></slot>
          </div>
          <div class="w-modal-footer" :class="footerName" v-if="(okable || cancelable) || $slots.footer">
            <slot name="footer">
              <w-button class="w-modal-button w-modal-button-cancel" @click="cancelFn" v-if="cancelable">{{cancelText}}</w-button>
              <w-button class="w-modal-button w-modal-button-ok" :type="okType" :loading="loadingValue" @click="okFn" v-if="okable">{{okText}}</w-button>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import TransferDom from '../directives/transfer-dom';
import WIcon from '../icon/Icon';
import WButton from '../button/Button';

export default {
  data: () => ({
    footer: true,
    body: false,
    status: false,
    noop: () => {},
  }),
  model: {
    prop: 'value',
    event: 'model',
  },
  props: {
    value: Boolean,
    title: String,
    modalStyle: {
      type: Object,
      default: () => {},
    },
    bodyStyle: {
      type: Object,
      default: () => {},
    },
    loading: Boolean,
    mask: {
      type: Boolean,
      default: true,
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
    esc: {
      type: Boolean,
      default: true,
    },
    center: {
      type: Boolean,
      default: true,
    },
    closable: {
      type: Boolean,
      default: true,
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    cancelable: {
      type: Boolean,
      default: true,
    },
    cancel: {
      type: Function,
      default: () => {},
    },
    okText: {
      type: String,
      default: '确定',
    },
    okable: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
      default: () => {},
    },
    okType: {
      type: String,
      default: 'primary',
    },
    before: Function,
    modalName: {
      type: [String, Array, Object],
      default: () => {},
    },
    titleName: {
      type: [String, Array, Object],
      default: () => {},
    },
    closeName: {
      type: [String, Array, Object],
      default: () => {},
    },
    footerName: {
      type: [String, Array, Object],
      default: () => {},
    },
    bodyName: {
      type: [String, Array, Object],
      default: () => {},
    },
    maskName: {
      type: [String, Array, Object],
      default: () => {},
    },
    transfer: {
      type: Boolean,
      default: true,
    },
    getContainer: {
      type: Function,
      default: () => document.body,
    },
  },
  computed: {
    modalClass() {
      return [{
        'w-modal-center': this.centerValue,
      }, this.modalName];
    },
    wrapClass() {
      return [{
        'w-modal-mask': this.mask,
      }, this.maskName];
    },
    titleValue() {
      return this.title;
    },
    centerValue() {
      return this.center;
    },
    loadingValue() {
      return this.loading;
    },
  },
  mounted() {
    this.setStatus(this.value);
    this.bindKeyUp();
  },
  methods: {
    setScroll(val) {
      document.body.style.overflow = val ? 'hidden' : '';
    },
    setStatus(val) {
      this.status = val;
      this.setScroll(val);
      this.$emit('model', this.status);
    },
    changeStatus(type) {
      this.setStatus(false);
      this[type](this.status);
      this.$emit(type, this.status);
    },
    cancelFn() {
      if (!this.loadingValue) {
        this.changeStatus('cancel');
      }
    },
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
    },
    bindKeyUp() {
      // ESC close
      document.addEventListener('keydown', this.keyUpFn);
    },
    keyUpFn(ev = window.event) {
      if (this.status && this.esc && ev.keyCode === 27 && !this.loadingValue) {
        this.changeStatus('cancel');
      }
    },
    wrapClickFn() {
      if (this.maskClosable) {
        this.cancelFn();
      }
    },
  },
  directives: { TransferDom },
  components: {
    WIcon,
    WButton,
  },
  watch: {
    value(val) {
      this.setStatus(val);
    },
  },
};
</script>
