import Vue from 'vue';
import WTooltip from './Tooltip';

export default {
  name: 'WTooltip',
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
    content: String,
    coreName: {
      type: [String, Array, Object],
      default: () => {},
    },
  },
  computed: {
    isHover() {
      return !!this.trigger && this.trigger === 'hover';
    },
    contentValue() {
      return this.content;
    },
  },
  mounted() {
    const boxElem = this.createBox();
    const popElem = this.createTooltip();
    this.getContainer().appendChild(boxElem);
    boxElem.appendChild(popElem);
    this.setStatus(this.value, true);
    this.mountEnd(this.value, popElem);
    this.$emit('mountEnd', this.value, popElem);
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
    createTooltip() {
      return (new Vue({
        render: h => h(WTooltip, {
          props: {
            getLayout: () => this.$el,
            placement: this.placement,
            value: this.status,
            content: this.contentValue,
          },
        }),
      })).$mount().$el;
    },
    createBox() {
      const divElem = document.createElement('div');
      divElem.setAttribute('class', 'w-tooltip-box');
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
      class: ['w-tooltip-core', this.coreName],
      on: {
        mouseenter: this.mouseenter,
        mouseleave: this.mouseleave,
        click: this.click,
      },
    }, this.$slots.default);
  },
};
