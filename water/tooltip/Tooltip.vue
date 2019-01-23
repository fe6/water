<template>
  <transition name="fade">
    <div class="w-tooltip" :class="tooltipClass" :style=" { left: `${left}px`, top: `${top}px` }" ref="popElem" v-show="status" v-if="contentValue">
      <i class="w-tooltip-arrow" :class="arrowClass"></i>
      <div class="w-tooltip-content">
        {{contentValue}}
      </div>
    </div>
  </transition>
</template>
<script>
import {
  setLeftFn,
  setTopFn,
  regDirection,
} from '../utils/poper';

export default {
  name: 'WTooltipWarp',
  data() {
    return {
      left: 0,
      top: 0,
      status: false,
    };
  },
  model: {
    prop: 'value',
    event: 'model',
  },
  props: {
    render: HTMLDivElement,
    content: String,
    value: Boolean,
    placement: {
      type: String,
      default: 'top',
    },
    interval: {
      type: Number,
      default: 8,
    },
  },
  computed: {
    contentValue() {
      return this.content;
    },
    tooltipClass() {
      return [
        {
          'w-tooltip-horbottom': this.isHorBottom,
          'w-tooltip-hortop': this.isHorTop,
          'w-tooltip-horleft': this.isVerLeft,
          'w-tooltip-horright': this.isVerRight,
        },
      ];
    },
    arrowClass() {
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
    },
    ...regDirection,
  },
  mounted() {
    this.$nextTick(() => {
      setLeftFn(this, this.render, () => {
        this.setStatus(true);
      }, () => {
        this.setStatus(this.value);
      }).then((left) => {
        this.left = left;
      });
      setTopFn(this, this.render, () => {
        this.setStatus(true);
      }, () => {
        this.setStatus(this.value);
      }).then((top) => {
        this.top = top;
      });
    });
  },
  methods: {
    setStatus(val) {
      this.status = val;
    },
  },
  watch: {
    value(val) {
      this.setStatus(val);
    },
  },
};
</script>
