<template>
  <li :class="optionClass" @click="optionClick($event)">
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: 'WOption',
  props: {
    value: String,
    loading: Boolean,
    hover: Boolean,
    active: Boolean,
    disabled: Boolean,
    mode: {
      type: String,
      default: 'single',
    },
    optionChange: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    activeValue() {
      return this.active;
    },
    optionClass() {
      return [`w-option-${this.mode}`, {
        [`w-option-${this.mode}-active`]: this.activeValue,
        [`w-option-${this.mode}-hover`]: this.hover,
        'w-option-loading': this.loading,
        'w-option-disabled': this.disabled,
      }];
    },
  },
  methods: {
    optionClick(event) {
      const value = event.target.innerHTML;
      this.$emit('model', value);
      this.optionChange(value, event);
      this.$emit('optionChange', value, event);
    },
  },
};
</script>
