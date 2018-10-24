<template>
  <span class="w-switch" :class="{
    [`w-switch-${size}`]: size === 'small',
    ['w-switch-loading']: loading,
    [`w-switch-${size}-loading`]: size === 'small' && loading,
    ['w-switch-on']: status,
    [`w-switch-${size}-on`]: size === 'small' && status,
    ['w-switch-disabled']: disabled,
  }" @click="changeFn">
    <span class="w-switch-inner" :class="{
      [`w-switch-${size}-inner`]: size === 'small',
      ['w-switch-on-inner']: status,
      [`w-switch-${size}-on-inner`]: size === 'small' && status,
    }">
      <slot name="open" v-if="status"></slot>
      <slot name="close" v-else></slot>
    </span>
  </span>
</template>
<script>
export default {
  name: 'WSwitch',
  data() {
    return {
      status: this.value,
    };
  },
  props: {
    value: Boolean,
    size: String,
    disabled: Boolean,
    loading: Boolean,
    before: Function,
    change: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    changeFn() {
      if (this.before) {
        const promiseGo = this.before();
        promiseGo.then(() => {
          this.changeStatus();
        });
      } else {
        this.changeStatus();
      }
      this.change(this.status);
      this.$emit('change', this.status);
      this.$emit('input', this.status);
    },
    changeStatus() {
      this.status = !this.status;
    },
  },
  watch: {
    value(val) {
      this.status = val;
    },
  },
};
</script>
