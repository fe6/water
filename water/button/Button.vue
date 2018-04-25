<template>
  <button :type="htmlType" :disabled="disabled" :class="[
    name,
    {
      [`${prefix}primary`]: type === 'primary',
      [`${prefix}dashed`]: type === 'dashed',
      [`${prefix}danger`]: type === 'danger',
      [`${prefix}ghost`]: ghost,
      [`${prefix}lg`]: size === 'large',
      [`${prefix}sm`]: size === 'small', [`${prefix}lg`]: size === 'large', [`${prefix}loading`]: loading, [`${prefix}circle`]: circle,
      [`${prefix}click`]: isClick,
      [`${prefix}disabled`]: disabled,
    },
  ]" @animationend="removeClickName" @click="clickFn($event)">
    <w-icon
      v-show="loading || icon"
      v-if="loading || icon"
      :type="icon ? icon : 'loading1'"
      :spin="loading || icon.indexOf('loading') > -1"
    />
    <span :class="`${prefix}text`" v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
const name = 'w-button';
const prefix = `${name}-`;

export default {
  name: 'WButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: String,
    icon: String,
    loading: Boolean,
    circle: Boolean,
    ghost: Boolean,
    disabled: Boolean,
    htmlType: {
      type: String,
      default: 'button',
    },
    click: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      name,
      prefix,
      isClick: false,
    };
  },
  methods: {
    clickFn(evente) {
      this.isClick = true;
      this.click(evente);
      this.$emit('click', evente);
    },
    removeClickName() {
      this.isClick = false;
    },
  },
};
</script>
