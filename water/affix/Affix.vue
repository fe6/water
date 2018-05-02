<template>
  <div :class="`${prefix}-affix`" ref="affix" :style="`${style}`">
    <slot></slot>
  </div>
</template>

<script>
import debounce from '../utils/debounce';

export default {
  name: 'WAffix',
  props: {
    target: {
      default: () => window,
    },
    offsetTop: Number,
    offsetBottom: Number,
    index: {
      type: Number,
      default: 10,
    },
    change: {
      type: Function,
      default: () => {},
    },
    prefix: {
      type: String,
      default: 'w',
    },
    position: {
      type: String,
      default: 'fixed',
    },
  },
  data() {
    return {
      style: '',
      styleFixed: `position: ${this.position};`,
      styleStatic: 'position: static;',
      styleTop: `top: ${this.offsetTop || 0}px; zIndex: ${this.index};`,
      styleBottom: `bottom: ${this.offsetBottom || 0}px; zIndex: ${this.index};`,
      offset: 0,
      boxHeight: 0,
      height: 0,
      offsetType: '',
    };
  },
  mounted() {
    setTimeout(() => {
      const { affix } = this.$refs;
      const rect = affix.getBoundingClientRect();
      const { top, height } = rect;

      if (typeof this.offsetTop !== 'undefined') {
        this.offsetType = 'top';
      } else if (typeof this.offsetBottom !== 'undefined') {
        this.offsetType = 'bottom';
      } else {
        this.offsetType = 'top';
      }
      this.offset = top;
      this.height = height;
      this.boxHeight = this.target.innerHeight ? this.target.innerHeight : this.target.offsetHeight;
      this.boxOffsetTop = this.target.offsetTop || 0;

      this.debounce();
      this.target.addEventListener('scroll', this.debounce, false);
      this.target.addEventListener('resize', this.debounce, false);
    }, 0);
  },
  beforeDestroy() {
    this.target.removeEventListener('scroll', this.debounce);
    this.target.removeEventListener('resize', this.debounce);
  },
  methods: {
    debounce() {
      debounce(this.gogogo)();
    },
    gogogo() {
      const bottomMax = this.boxHeight + this.boxOffsetTop + this.target.scrollTop + this.height;
      if (this.offsetType === 'top') {
        if (this.offset <= (this.target.scrollTop - this.offsetTop) + this.boxOffsetTop) {
          this.style = `${this.styleFixed}${this.styleTop}`;
        } else {
          this.style = `${this.styleStatic}`;
        }
      } else if (this.offset + this.offsetBottom >= bottomMax) {
        this.style = `${this.styleFixed}${this.styleBottom}`;
      } else {
        this.style = `${this.styleStatic}`;
      }

      this.change(this.offsetType);
      this.$emit('change', this.offsetType);
    },
  },
};
</script>
