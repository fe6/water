<template>
  <div class="w-radio-group" :class="[`w-radio-group-${modeString}`, {
    [`${prefix}-radio-group`]: !!prefix,
  }]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'wRadioGroup',
  data() {
    return {
      index: this.defaultChecked ? this.value || this.on : -1,
      modeString: '',
      disabledStatus: false,
    };
  },
  props: {
    name: String,
    on: {
      type: Number,
      default: 0,
    },
    prefix: String,
    disabled: Boolean,
    loading: Boolean,
    defaultChecked: {
      type: Boolean,
      default: true,
    },
    mode: {
      type: String,
      default: 'horizontal', // 默认 水平( horizontal ) & 垂直( vertical )
    },
    value: Number,
    // before: Function,
    before: {
      type: Function,
      default() {
        return new Promise((resolve, reject) => {
          resolve();
        });
      },
    },
    change: {
      type: Function,
      default: () => {},
    },
  },
  mounted() {
    // 设置模式, 水平 & 垂直
    this.setMode(this.mode);
    this.updateChild();
    this.setDisabled(this.disabled);
    this.setLoading(this.loading);
  },
  methods: {
    updateChild() {
      this.$children.forEach((child) => {
        child.updateIndex();
      });
    },
    changeFn(evente, key) {
      this.change(evente, key);
      this.$emit('input', key);
      this.$emit('change', evente, key);
    },
    setMode(value) {
      this.modeString = value;
      this.$children.forEach((child) => {
        child.setMode(value);
      });
    },
    setDisabled(value) {
      this.disabledStatus = value;
      this.$children.forEach((child) => {
        child.setDisabledStatus(value);
      });
    },
    setLoading(value) {
      this.loadingStatus = value;
      this.$children.forEach((child) => {
        child.setLoadingStatus(value);
      });
    },
  },
  watch: {
    on(val) {
      this.index = val;
      this.updateChild();
    },
    mode(val) {
      this.setMode(val);
    },
    disabled(val) {
      this.setDisabled(val);
    },
    loading(val) {
      this.setLoading(val);
    },
  },
};
</script>
