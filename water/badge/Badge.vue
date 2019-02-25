<template>
  <div class="w-badge" v-if="slotDefault">
    <sup class="w-badge-sup" :title="titleValue" v-if="showCount && !slotCount && !dot">{{count}}</sup>
    <i class="w-badge-dot" v-else-if="!zeroCount && dot"></i>
    <span class="w-badge-custom" v-if="slotCount">
      <slot name="count"></slot>
    </span>
    <slot></slot>
  </div>
  <span class="w-badge-sup w-badge-count" :title="titleValue" v-else-if="(!slotDefault && !showStatus) || showCount">{{count}}</span>
  <div class="w-badge-status" v-else-if="!slotDefault && showStatus">
    <span class="w-badge-status-dot" :class="[`w-badge-status-${status}`]"></span>
    <p class="w-badge-status-text" v-if="text">{{text}}</p>
  </div>
</template>
<script>
import props from './props';

export default {
  name: 'WBadge',
  model: {
    prop: 'value',
    event: 'model',
  },
  props,
  computed: {
    showStatus() {
      return this.status !== '';
    },
    slotDefault() {
      return !!this.$slots.default;
    },
    slotCount() {
      return !!this.$slots.count;
    },
    count() {
      return this.overflowCount > this.value ? this.value : `${this.overflowCount}+`;
    },
    zeroCount() {
      return this.count < 1;
    },
    showCount() {
      return !this.zeroCount || this.showZero;
    },
    titleValue() {
      return this.title || this.count;
    },
  },
};
</script>
