<template>
  <ul class="w-rate" :class="[
    {
      [`${prefix}-rate`]: !!prefix,
    },
    className,
  ]" @mouseleave="out()">
    <li class="w-rate-item" :style="{color,}" :class="{
      ['w-rate-on']: isOn(cNow, index),
      ['w-rate-big']: isBig(cNow),
      [`${prefix}-rate-item`]: !!prefix,
    }" v-for="(num, cNow) in count" :key="cNow">
      <span v-if="half" class="w-rate-elem w-rate-elem-left" :class="{
        ['w-rate-on']: isHalf(cNow, now),
        [`${prefix}-rate-elem`]: !!prefix,
        [`${prefix}-rate-elem-left`]: !!prefix,
        [`${prefix}-rate-on`]: isHalf(cNow, now) && !!prefix,
      }" @mouseover="leftOver(cNow)" @mouseleave="leftOut(cNow)" @click="leftClick(cNow)">
        <w-icon v-if="!character" :class="['w-rate-font', {
          [`${prefix}-rate-elem-left`]: !!prefix,
        }]">
          <slot name="icon" v-if="!!$slots.icon"></slot>
          <svg v-else viewBox="64 64 896 896" class="" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
        </w-icon>
        {{character}}
      </span>
      <span v-if="half" class="w-rate-elem w-rate-elem-right" :class="{
        ['w-rate-elem-right-character']: character,
        ['w-rate-on']: isOn(cNow, index),
        [`${prefix}-rate-elem-right`]: !!prefix,
        [`${prefix}-rate-elem-right-character`]: character && !!prefix,
        [`${prefix}-rate-on`]: isOn(cNow, index) && !!prefix,
      }" @mouseover="rightOver(cNow)" @click="rightClick(cNow)">
        <w-icon v-if="!character" prefix="w-rate-elem-right" :class="['w-rate-font', {
          [`${prefix}-rate-elem-right`]: !!prefix,
        }]">
          <slot name="icon" v-if="!!$slots.icon"></slot>
          <svg v-else viewBox="64 64 896 896" class="" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
        </w-icon>
        {{character}}
      </span>
      <span v-if="!half" class="w-rate-elem" :class="{
        ['w-rate-on']: isHalf(cNow, now),
        [`${prefix}-rate-on`]: isHalf(cNow, now) && !!prefix,
      }" @mouseover="oneOver(cNow)" @mouseleave="oneOut(cNow)" @click="oneClick(cNow)">
        <w-icon v-if="!character" class="w-rate-font">
          <slot name="icon" v-if="!!$slots.icon"></slot>
          <svg v-else viewBox="64 64 896 896" class="" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
        </w-icon>
        {{character}}
      </span>
    </li>
  </ul>
</template>
<script>
import WIcon from '../icon/Icon';

export default {
  name: 'WRate',
  data() {
    return {
      now: -1,
      index: -1,
      clickedIndex: this.value, // 点击的索引
    };
  },
  props: {
    count: {
      type: Number,
      default: 5,
    },
    value: Number,
    half: Boolean,
    character: String,
    color: {
      type: String,
      default: '#fadb14',
    },
    prefix: String,
    className: [String, Object],
    change: {
      type: Function,
      default: () => {},
    },
    hover: {
      type: Function,
      default: () => {},
    },
  },
  mounted() {
    this.init(this.value);
  },
  methods: {
    isHalf(cNow, now) {
      return cNow + 0.5 <= now;
    },
    isOn(cNow, index) {
      return cNow < index;
    },
    isBig(cNow) {
      return cNow === Math.ceil(this.now) - 1;
    },
    init(value = -1) {
      this.setIndex(value);
      this.updateIndexList();
      this.setClickedIndex(value);
    },
    oneOver(index) {
      this.leftOver(index);
    },
    oneOut(index) {
      this.leftOut(index);
    },
    oneClick(index) {
      this.rightClick(index);
    },
    leftOver(index) {
      const value = index + 0.5;
      this.setIndex(value);
      this.updateIndexList();
      this.emitHover(value);
    },
    leftOut(index) {
      this.setIndex(index);
      this.updateIndexList();
    },
    leftClick(index) {
      const value = index + 0.5;
      this.setClickedIndex(value);
      this.emitClick(value);
    },
    rightOver(index) {
      const value = index + 1;
      this.setIndex(value);
      this.updateIndexList();
      this.emitHover(value);
    },
    rightClick(index) {
      const value = index + 1;
      this.setClickedIndex(value);
      this.emitClick(value);
    },
    out() {
      this.setIndex(this.clickedIndex);
      this.updateIndexList();
    },
    setClickedIndex(value) {
      // 更新点击之后的索引
      this.clickedIndex = value;
    },
    setIndex(value = -1) {
      this.now = value;
    },
    getIndex() {
      return String(this.now).split('.');
    },
    updateIndexList() {
      const index = this.getIndex();
      this.index = index.length > 0 ? index[0] : -1;
    },
    emitHover(value) {
      this.hover(value);
      this.$emit('hover', value);
    },
    emitClick(value) {
      this.change(value);
      this.$emit('input', value);
      this.$emit('change', value);
    },
  },
  components: {
    WIcon,
  },
  watch: {
    value(val) {
      this.init(val);
    },
  },
};
</script>
