const prefixCls = 'w-row';

export default {
  name: 'WRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    basin: {
      type: Number,
      default: 0,
    },
    type: String,
    align: String,
    justify: String,
    className: [String, Object],
    prefix: String,
    tag: {
      type: String,
      default: 'div',
    },
  },
  computed: {
    classList() {
      return [
        {
          [`${prefixCls}`]: !this.type,
          [`${prefixCls}-${this.type}`]: !!this.type,
          [`${prefixCls}-${this.align}`]: !!this.type && !!this.align,
          [`${prefixCls}-${this.justify}`]: !!this.type && !!this.justify,
          [`${this.prefix}-row`]: !!this.prefix,
        },
      ];
    },
    rowStyle() {
      if (this.gutter > 48) {
        this.gutter = 48;
      }
      const gapGutter = this.gutter / 2;
      const gapBasin = this.basin / 2;
      const gutter = gapGutter > 0 ? `margin-left: -${gapGutter}px;margin-right: -${gapGutter}px;` : '';
      const basin = gapBasin > 0 ? `margin-top: -${gapBasin}px;margin-bottom: -${gapBasin}px;` : '';
      return `${gutter}${basin}`;
    },
  },
  render(h) {
    return h(this.tag, {
      class: [this.prefixCls, this.classList, this.className],
      style: this.rowStyle,
    }, this.$slots.default);
  },
};
