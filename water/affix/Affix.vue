<template>
  <div :class="`${prefix}-affix`" ref="affix" :style="`${style}`">
    <slot></slot>
  </div>
</template>

<script>
import debounce from '../utils/debounce';

export default {
  name: 'WAffix',
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
      win: null, // 为了配合 ssr
      doc: null, // 为了配合 ssr
    };
  },
  props: {
    target: {
      default: () => null,
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
  mounted() {
    setTimeout(() => {
      this.doc = document;
      this.win = this.target || window;
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
      this.boxHeight = this.win.innerHeight || this.win.offsetHeight;
      this.boxOffsetTop = this.win.offsetTop || 0;

      this.debounce();
      this.win.addEventListener('scroll', this.debounce, false);
      this.win.addEventListener('resize', this.debounce, false);
    }, 0);
  },
  beforeDestroy() {
    this.win.removeEventListener('scroll', this.debounce);
    this.win.removeEventListener('resize', this.debounce);
  },
  methods: {
    debounce() {
      debounce(this.gogogo)();
    },
    gogogo() {
      const scrollTop = this.win.scrollTop ||
        Math.max(
          window.pageYOffset,
          this.doc.documentElement.scrollTop,
          this.doc.body.scrollTop,
        );
      const bottomMax = this.boxHeight + this.boxOffsetTop + scrollTop + this.height;

      if (this.offsetType === 'top') {
        if (this.offset <= (scrollTop - this.offsetTop) + this.boxOffsetTop) {
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
