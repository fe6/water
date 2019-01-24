import Vue from 'vue';
import WPopover from './Popover';

export default {
  name: 'WPopover',
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
      default: 'hover',
    },
    getContainer: {
      type: Function,
      default: () => document.body,
    },
    placement: {
      type: String,
      default: 'top',
    },
    change: {
      type: Function,
      default: () => {},
    },
    mountEnd: {
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
    const popoverElem = this.createPopover();
    this.getContainer().appendChild(boxElem);
    boxElem.appendChild(popoverElem);
    this.setStatus(this.value, true);
    this.mountEnd(this.value, popoverElem);
    this.$emit('mountEnd', this.value, popoverElem);
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
      if (change) {
        this.status = val;
      }
      if (change && emit) {
        this.change(val);
        this.$emit('change', val);
        this.$emit('model', val);
      }
    },
    createPopover() {
      return (new Vue({
        render: h => h(WPopover, {
          props: {
            getLayout: () => this.$el,
            placement: this.placement,
            value: this.status,
          },
        }, [
          h('title', this.$slots.title),
          h('content', this.$slots.content),
        ]),
      })).$mount().$el;
    },
    createBox() {
      const divElem = document.createElement('div');
      divElem.setAttribute('class', 'w-popover-box');
      return divElem;
    },
    mouseenter() {
      setTimeout(() => {
        this.setStatus(!this.status, this.isHover, true);
      }, this.enterDelay);
    },
    mouseleave() {
      setTimeout(() => {
        this.setStatus(!this.status, this.isHover, true);
      }, this.enterDelay);
    },
    click(event) {
      setTimeout(() => {
        this.setStatus(!this.status, !this.isHover, true);
      }, !this.status ? this.enterDelay : this.leaveDelay);
      event.stopPropagation();
    },
  },
  watch: {
    value(val) {
      this.setStatus(val, true);
    },
  },
  render(createElement) {
    return createElement('div', {
      class: ['w-popover-core', this.coreName],
      on: {
        mouseenter: this.mouseenter,
        mouseleave: this.mouseleave,
        click: this.click,
      },
    }, this.$slots.default);
  },
};
