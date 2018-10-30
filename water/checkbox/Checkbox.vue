<template>
  <div class="w-checkbox" @click="clickFn($event)" :class="[
    {
      [`${prefixCls}disabled`]: disabledStatus,
      [`${prefix}-checkbox`]: !!prefix,
    }
  ]">
    <div :class="[`${prefixCls}status`, {
      [`${prefixCls}on`]: checkStatus,
      [`${prefixCls}indeterminate`]: indeterminate,
      [`${prefixCls}status-disabled`]: disabledStatus,
      [`${prefixCls}status-right`]: mode === 'right',
    }]">
      <input type="checkbox" :class="[`${prefixCls}input`]">
    </div>
    <div :class="[`${prefixCls}content`, {
      [`${prefixCls}content-right`]: mode === 'right',
    }]" v-if="$slots.default">
      <slot></slot>
    </div>
  </div>
</template>
<script>
const checkboxName = 'w-checkbox';
const prefixCls = `${checkboxName}-`;

export default {
  name: 'WCheckbox',
  data() {
    return {
      prefixCls,
      checkStatus: this.on || false,
      disabledStatus: this.disabled || false,
    };
  },
  model: {
    prop: 'on',
    event: 'model',
  },
  props: {
    on: Boolean,
    disabled: Boolean,
    indeterminate: Boolean,
    change: {
      type: Function,
      default: () => {},
    },
    mode: {
      type: String,
      default: 'left',
    },
    prefix: String,
  },
  methods: {
    clickFn($event) {
      this.changeStatus($event);
      this.$emit('change', $event, this.checkStatus);
      this.change($event, this.checkStatus);
    },
    changeStatus() {
      if (!this.disabledStatus) {
        this.setValue(!this.checkStatus);
        this.$emit('model', this.checkStatus);
      }
    },
    setValue(value) {
      if (this.checkStatus !== value) {
        this.checkStatus = value;
      }
    },
  },
  watch: {
    disabled(value) {
      this.disabledStatus = value;
    },
    on(value) {
      this.setValue(value);
    },
  },
};
</script>
