<template>
  <button :type="htmlType" :disabled="disabled" :class="[
    name,
    {
      [`${prefixCls}primary`]: type === 'primary',
      [`${prefixCls}dashed`]: type === 'dashed',
      [`${prefixCls}danger`]: type === 'danger',
      [`${prefixCls}ghost`]: ghost,
      [`${prefixCls}lg`]: size === 'large',
      [`${prefixCls}sm`]: size === 'small', [`${prefixCls}lg`]: size === 'large', [`${prefixCls}loading`]: loading, [`${prefixCls}circle`]: circle,
      [`${prefixCls}click`]: isClick,
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
        `${className}-icon`,
      ]"
      v-show="loading || icon"
      v-if="loading || icon"
      :type="icon ? icon : 'loading1'"
      :spin="loading || icon.indexOf('loading') > -1"
    />
    <span :class="[
      `${prefixCls}text`,
      {
        [`${prefix}-button-text`]: prefix,
        [`${className}-text`]: className,
      },
    ]" v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
const name = 'w-button';
const prefixCls = `${name}-`;

export default {
  name: 'WButton',
  props: {
    type: String,
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
  data() {
    const { $parent = { index: 0 }, $vnode } = this;
    const { index, $options: { _componentTag } = { _componentTag: '' } } = $parent;
    const { key = 0 } = $vnode.data;

    return {
      name,
      prefixCls,
      isClick: false,
      index,
      status: index === key && _componentTag === `${prefixCls}group`,
    };
  },
  methods: {
    clickFn(evente) {
      this.isClick = true;
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
  },
};
</script>
