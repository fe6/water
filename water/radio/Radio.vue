<template>
  <div class="w-radio" :class="[`w-radio-${modeString}`, {
    [`${prefixCls}click`]: isClick,
    [`${prefixCls}on`]:status,
    [`${prefixCls}disabled`]: disabledStatus,
    [`${prefix}-radio`]: !!prefix,
    [`${prefix}-radio`]: !!prefix,
    [`${prefix}-radio-${modeString}`]: !!prefix,
    [`${prefix}-click`]: isClick && !!prefix,
    [`${prefix}-on`]:status && !!prefix,
    [`${prefix}-disabled`]: disabledStatus && !!prefix,
  }]" @click="clickFn($event)" @animationend="removeClickName">
    <div class="w-radio-status" :class="{
      [`${prefix}-radio-status`]: !!prefix,
      ['w-radio-status-disabled']: disabledStatus,
      [`${prefix}-radio-status-disabled`]: disabledStatus && !!prefix,
      ['w-radio-status-loading']: loadingStatus,
    }">
      <input class="w-radio-input" type="radio" :name="inputName" :value="key" :class="{
        [`${prefix}-radio-input`]: !!prefix,
      }">
      <i class="w-radio-inner" :class="{
        [`${prefix}-radio-inner`]: !!prefix,
        ['w-radio-inner-disabled']: disabledStatus,
        [`${prefix}-radio-inner-disabled`]: disabledStatus && !!prefix,
      }"></i>
    </div>
    <div class="w-radio-content" :class="{
      [`${prefix}-radio-content`]: !!prefix,
    }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
const radioName = 'w-radio';
const prefixCls = `${radioName}-`;

export default {
  name: 'WRadio',
  data() {
    const { $parent, $vnode } = this;
    const { key = 0 } = $vnode.data;
    const {
      index = 0, $options, name, defaultChecked = true, prefix, disabled, loading,
    } = $parent;

    return {
      inputName: name || this.name || 'wradio',
      modeString: '',
      prefixCls,
      isClick: false,
      defaultChecked,
      disabledStatus: disabled || this.disabled,
      loadingStatus: loading,
      prefix,
      key,
      index,
      /* eslint-disable no-underscore-dangle */
      status: index === key && $options._componentTag === `${prefixCls}group`,
    };
  },
  props: {
    name: String,
    disabled: Boolean,
  },
  methods: {
    clickFn(evente) {
      const {
        loading,
        before,
      } = this.$parent;
      if (!this.disabledStatus && !loading && !this.status) {
        before().then(() => {
          this.changeStatus(evente);
        });
      }
    },
    changeStatus(evente) {
      const { key } = this.$vnode.data;
      this.isClick = true;
      this.$parent.index = key || 0;
      this.$parent.updateChild();
      this.$parent.changeFn(evente, key);
    },
    removeClickName() {
      this.isClick = false;
    },
    /*
     * 父组件更新子组件选中状态的方法
     */
    updateIndex() {
      const { index = 0 } = this.$parent;
      const { key = 0 } = this.$vnode.data;
      this.index = index;
      this.status = index === key;
    },
    setMode(value = 'horizontal') {
      this.modeString = value;
    },
    /*
     * 父组件更新子组件禁用状态的方法
     */
    setDisabledStatus(value) {
      this.disabledStatus = value || this.disabled;
    },
    setDisabledOneStatus(value) {
      this.disabledStatus = this.$parent.disabled || value;
    },
    setLoadingStatus(value) {
      this.loadingStatus = value && !this.status;
    },
  },
  watch: {
    disabled(value) {
      this.setDisabledOneStatus(value);
    },
  },
};
</script>
