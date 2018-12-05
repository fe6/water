<template>
  <div class="w-spin" v-if="defaultValue">
    <div class="w-spin-box" :class="boxClasses">
      <slot></slot>
    </div>
    <div class="w-spin-mask" v-show="spinValue">
      <w-icon class="w-spin-icon" :class="iconClasses" :type="loadingTypeValue" :spin="true" />
      <p class="w-spin-tip" :class="tipClasses" v-if="tipValue">{{tipValue}}</p>
    </div>
  </div>
  <w-icon class="w-spin-icon" :class="iconClasses" :type="loadingTypeValue" v-else :spin="true" v-show="spinValue" />
</template>
<script>
import WIcon from '../icon/Icon';

export default {
  name: 'WSpin',
  model: {
    prop: 'value',
    event: 'model',
  },
  props: {
    value: Boolean,
    type: {
      type: String,
      default: 'loading3',
    },
    tip: String,
    size: String,
  },
  computed: {
    boxClasses() {
      return {
        'w-spin-box-active': this.spinValue,
      };
    },
    iconClasses() {
      return [
        {
          'w-spin-icon-lg': this.size === 'large',
          'w-spin-icon-sm': this.size === 'small',
        },
      ];
    },
    tipClasses() {
      return [
        {
          'w-spin-tip-lg': this.size === 'large',
          'w-spin-tip-sm': this.size === 'small',
        },
      ];
    },
    spinValue() {
      return this.value;
    },
    loadingTypeValue() {
      return this.type;
    },
    tipValue() {
      return this.tip;
    },
    defaultValue() {
      return !!this.$slots.default;
    },
  },
  components: {
    WIcon,
  },
};
</script>
