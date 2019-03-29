<template>
  <button :type="htmlType" :disabled="disabled" :class="[
    name,
    {
      [`${prefixCls}primary`]: type === 'primary',
      [`${prefixCls}dashed`]: type === 'dashed',
      [`${prefixCls}danger`]: type === 'danger',
      [`${prefixCls}ghost`]: ghost,
      [`${prefixCls}lg`]: size === 'large',
      [`${prefixCls}sm`]: size === 'small',
      [`${prefixCls}loading`]: loading,
      [`${prefixCls}circle`]: circle,
      [`${prefixCls}click`]: clicked,
      [`${prefixCls}disabled`]: disabled,
      [`${prefixCls}on`]: status,
      [`${prefixCls}primary-on`]: type === 'primary' && status,
      [`${prefixCls}dashed-on`]: type === 'dashed' && status,
      [`${prefixCls}danger-on`]: type === 'danger' && status,
      [`${prefixCls}ghost-on`]: type === 'ghost' && status,
    },
    prefix ? `${prefix}-button` : '',
    prefix && status ? `${prefix}-button-on` : '',
    className,
  ]" @animationend="removeClickName" @click="clickFn($event)" @mouseover="mouseoverFn($event)" @mouseout="mouseoutFn($event)">
    <w-icon
      :class="[
        prefix ? `${prefix}-button-icon` : '',
      ]"
      v-show="loading || !!$slots.icon"
      v-if="loading || !!$slots.icon"
      :color="iconColor"
      :spin="loading"
    >
      <slot name="icon"></slot>
    </w-icon>
    <span :class="{
      [`${prefixCls}text`]: loading,
      [`${prefix}-button-text`]: prefix,
      [`${prefixCls}primary-text`]: type === 'primary',
      [`${prefixCls}text-lg`]: (loading) && size === 'large',
      [`${prefixCls}text-sm`]: (loading) && size === 'small',
    }" v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import WIcon from '../icon/Icon';

const name = 'w-button';
const prefixCls = `${name}-`;

export default {
  name: 'WButton',
  data() {
    const { $parent, $vnode } = this;
    const { key = 0 } = $vnode.data;
    const { index = 0, $options } = $parent;

    return {
      name,
      prefixCls,
      clicked: false,
      index,
      /* eslint-disable no-underscore-dangle */
      status: index === key && $options._componentTag === `${prefixCls}group`,
    };
  },
  props: {
    type: String,
    size: String,
    loading: Boolean,
    circle: Boolean,
    ghost: Boolean,
    disabled: Boolean,
    htmlType: {
      type: String,
      default: 'button',
    },
    prefix: String,
    className: [String, Object],
    click: {
      type: Function,
      default: () => {},
    },
    mouseover: {
      type: Function,
      default: () => {},
    },
    mouseout: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    iconColor() {
      let color = '';
      switch (this.type) {
        case 'danger':
          color = '#f5222d';
          break;
        case 'primary':
          color = '#fff';
          break;
        case 'ghost':
          color = '#fff';
          break;
        default:
          color = 'rgba(0, 0, 0, 0.65)';
      }
      return color;
    },
  },
  methods: {
    clickFn(evente) {
      this.clicked = true;
      const { key } = this.$vnode.data;
      this.click(evente, key);
      this.$emit('click', evente, key);
    },
    mouseoverFn(evente) {
      const { key } = this.$vnode.data;
      this.mouseover(evente, key);
      this.$emit('mouseover', evente, key);
    },
    mouseoutFn(evente) {
      const { key } = this.$vnode.data;
      this.mouseout(evente, key);
      this.$emit('mouseout', evente, key);
    },
    removeClickName() {
      this.clicked = false;
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
  },
  components: {
    WIcon,
  },
};
</script>
