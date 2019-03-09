import Vue from 'vue';
import WPopconfirm from './Popconfirm';

export default {
  name: 'WPopconfirm',
  data() {
    return {
      render: null,
      status: false,
    };
  },
  model: {
    prop: 'value',
    event: 'model',
  },
  props: {
    value: Boolean,
    enterDelay: {
      type: Number,
      default: 0,
    },
    leaveDelay: {
      type: Number,
      default: 100,
    },
    trigger: {
      type: String,
      default: 'click',
    },
    getContainer: {
      type: Function,
      default: () => document.body,
    },
    placement: {
      type: String,
      default: 'top',
    },
    loading: Boolean,
    before: Function,
    cancelText: String,
    okText: String,
    change: {
      type: Function,
      default: () => {},
    },
    mountEnd: {
      type: Function,
      default: () => {},
    },
    ok: {
      type: Function,
      default: () => {},
    },
    cancel: {
      type: Function,
      default: () => {},
    },
    coreName: {
      type: [String, Array, Object],
      default: () => {},
    },
  },
  computed: {
    isHover() {
      return !!this.trigger && this.trigger === 'hover';
    },
  },
  mounted() {
    const boxElem = this.createBox();
    const popconfirmElem = this.createPopconfirm();
    this.getContainer().appendChild(boxElem);
    boxElem.appendChild(popconfirmElem);
    this.setStatus(this.value, true);
    this.mountEnd(this.value, popconfirmElem);
    this.$emit('mountEnd', this.value, popconfirmElem);
    this.bindDomClick();
  },
  destroyed() {
    this.unbindDomClick();
  },
  methods: {
    bindDomClick() {
      document.addEventListener('click', this.bodyClick);
    },
    unbindDomClick() {
      document.removeEventListener('click', this.bodyClick);
    },
    bodyClick() {
      this.setStatus(this.isHover, !this.isHover, true);
    },
    setStatus(val, change = false, emit = false) {
      if (change && !this.loading) {
        this.status = val;
      }
      if (change && emit && !this.loading) {
        this.change(val);
        this.$emit('change', val);
        this.$emit('model', val);
      }
    },
    createPopconfirm() {
      return (new Vue({
        render: h => h(WPopconfirm, {
          props: {
            getLayout: () => this.$el,
            placement: this.placement,
            value: this.status,
            before: this.before,
            loading: this.loading,
            cancelText: this.cancelText,
            okText: this.okText,
          },
          on: {
            ok: this.okFn,
            cancel: this.cancelFn,
          },
        }, [
          h('title', this.$slots.title),
          h('content', this.$slots.content),
        ]),
      })).$mount().$el;
    },
    createBox() {
      const divElem = document.createElement('div');
      divElem.setAttribute('class', 'w-popconfirm-box');
      return divElem;
    },
    clickFn(event) {
      setTimeout(() => {
        this.setStatus(!this.status, !this.isHover, true);
      }, !this.status ? this.enterDelay : this.leaveDelay);
      event.stopPropagation();
    },
    okFn(status) {
      this.setStatus(this.isHover, !this.isHover, status);
      this.$emit('model', status);
      this.ok(status);
      this.$emit('ok', status);
    },
    cancelFn(status) {
      this.setStatus(this.isHover, !this.isHover, status);
      this.$emit('model', status);
      this.cancel(status);
      this.$emit('cancel', status);
    },
  },
  watch: {
    value(val) {
      this.setStatus(val, true);
    },
  },
  render(createElement) {
    return createElement('div', {
      class: ['w-popconfirm-core', this.coreName],
      on: {
        click: this.clickFn,
      },
    }, this.$slots.default);
  },
};
