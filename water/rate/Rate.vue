<template>
  <ul class="w-rate" :class="[
    {
      [`${prefix}-rate`]: !!prefix,
    },
    className,
  ]" @mouseleave="out()">
    <li class="w-rate-item" style="color: #fadb14;" :class="{
      ['w-rate-on']: isOn(cNow, index),
      [`${prefix}-rate-item`]: !!prefix,
    }" v-for="(num, cNow) in count" :key="cNow">
      <span v-if="half" class="w-rate-elem w-rate-elem-left" :class="{
        ['w-rate-on']: isHalf(cNow, now),
        [`${prefix}-rate-elem`]: !!prefix,
        [`${prefix}-rate-elem-left`]: !!prefix,
        [`${prefix}-rate-on`]: isHalf(cNow, now) && !!prefix,
      }" @mouseover="leftOver(cNow)" @mouseleave="leftOut(cNow)" @click="leftClick(cNow)">
        <w-icon v-if="!character" :type="icon" :class="{
          [`${prefix}-rate-elem-left`]: !!prefix,
        }" />
        {{character}}
      </span>
      <span v-if="half" class="w-rate-elem w-rate-elem-right" :class="{
        ['w-rate-elem-right-character']: character,
        ['w-rate-on']: isOn(cNow, index),
        [`${prefix}-rate-elem-right`]: !!prefix,
        [`${prefix}-rate-elem-right-character`]: character && !!prefix,
        [`${prefix}-rate-on`]: isOn(cNow, index) && !!prefix,
      }" @mouseover="rightOver(cNow)" @click="rightClick(cNow)">
        <w-icon v-if="!character" :type="icon" prefix="w-rate-elem-right" :class="{
          [`${prefix}-rate-elem-right`]: !!prefix,
        }" />
        {{character}}
      </span>
      <span v-if="!half" class="w-rate-elem" :class="{
        ['w-rate-on']: isHalf(cNow, now),
        [`${prefix}-rate-on`]: isHalf(cNow, now) && !!prefix,
      }" @mouseover="oneOver(cNow)" @mouseleave="oneOut(cNow)" @click="oneClick(cNow)">
        <w-icon v-if="!character" :type="icon" />
        {{character}}
      </span>
    </li>
  </ul>
</template>
<script>
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
    icon: {
      type: String,
      default: 'star',
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
  watch: {
    value(val) {
      this.init(val);
    },
  },
};
</script>
