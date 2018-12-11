<template>
  <transition name="fade">
    <div class="w-popover" :class="popoverClass" :style=" { left: `${left}px`, top: `${top}px` }" ref="tooltipElem" v-show="status">
      <i class="w-popover-arrow" :class="arrowClass"></i>
      <div class="w-popover-main">
        <div class="w-popover-title" :class="titleClass" ref="title" v-if="title"></div>
        <div class="w-popover-content" ref="content" v-if="content"></div>
      </div>
    </div>
  </transition>
</template>
<script>
import Vue from 'vue';
import { setLeftFn, setTopFn } from '../utils/poper';
import { hasOwn } from '../utils/o';

export default {
  name: 'WPopoverWarp',
  data() {
    return {
      left: 0,
      top: 0,
      status: false,
      content: true,
      title: true,
    };
  },
  model: {
    prop: 'value',
    event: 'model',
  },
  props: {
    render: HTMLDivElement,
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
    titleClass() {
      return [{
        'w-popover-title-border': this.content,
      }];
    },
    popoverClass() {
      return [
        {
          'w-popover-horbottom': this.isHorBottom,
          'w-popover-hortop': this.isHorTop,
          'w-popover-horleft': this.isVerLeft,
          'w-popover-horright': this.isVerRight,
        },
      ];
    },
    arrowClass() {
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
    },
    // 纵向( Ver )，设置左边的判断 start
    isVerCenter() {
      // top bottom
      return /\b(top|bottom)\b/g.test(this.placement);
    },
    isVerEndRight() {
      // topRight bottomRight
      return /Right/g.test(this.placement);
    },
    isVerEndLeft() {
      // topLeft bottomLeft
      return /Left/g.test(this.placement);
    },
    isVerLeft() {
      // leftTop left leftBottom
      return /left/g.test(this.placement);
    },
    isVerRight() {
      // rightTop right rightBottom
      return /right/g.test(this.placement);
    },
    // 纵向( Ver )，设置左边的判断 end

    // 横向( Hor )，设置左边的判断 end
    isHorCenter() {
      // left right
      return /\b(left|right)\b/g.test(this.placement);
    },
    isHorEndBottom() {
      // leftBottom rightBottom
      return /Bottom/g.test(this.placement);
    },
    isVerEndTop() {
      // topTop bottomTop
      return /Top/g.test(this.placement);
    },
    isHorTop() {
      // top topLeft topRight
      return /top/g.test(this.placement);
    },
    isHorBottom() {
      // bottom bottomLeft bottomRight
      return /bottom/g.test(this.placement);
    },
  },
  mounted() {
    this.handleSlot();
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
    handleSlot() {
      this.filterSlot('title');
      this.filterSlot('content');
    },
    filterSlot(attr) {
      if (hasOwn(this.$slots, 'default')) {
        const results = this.$slots.default.filter(slot => slot.tag === attr);
        if (results.length) {
          const { children } = (new Vue({
            render: h => h(attr, {}, [results[0].children]),
          })).$mount().$el;
          if (children.length) {
            this.$refs[attr].appendChild(children[0]);
          } else {
            this[attr] = false;
          }
        } else {
          this[attr] = false;
        }
      } else {
        this[attr] = false;
      }
    },
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
