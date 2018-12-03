<template>
  <div class="w-tag" :class="classList" @animationend="removeClickName" @click="clickFn()" :style="{'border-color': borderColorValue, 'color': fontColorValue, 'background-color': backgroundColorValue, }">
    <slot></slot>
    <i class="w-tag-close" :class="{'w-tag-close-section': !isAllValue}" v-if="closableValue" @click="closeTag($event)"></i>
  </div>
</template>
<script>
import { hexToRgb, rgbToHsb } from '../utils/color';

export default {
  name: 'WTag',
  data() {
    return {
      clicked: false,
    };
  },
  model: {
    prop: 'value',
    event: 'model',
  },
  props: {
    closable: Boolean,
    value: String,
    size: String,
    color: String,
    colorType: {
      type: String,
      default: 'all', // section 部分 || all 全部
    },
    disabled: Boolean,
    inline: Boolean,
    close: {
      type: Function,
      default: () => {},
    }
  },
  computed: {
    classList() {
      return [
        {
          'w-tag-lg': this.size === 'large',
          'w-tag-sm': this.size === 'small',
          'w-tag-click': this.clicked,
          'w-tag-inline': this.inline,
          'w-tag-disabled': this.disabled,
          'w-tag-section': !this.isAllValue,
        },
      ];
    },
    closableValue() {
      return this.closable;
    },
    sizeValue() {
      return this.size;
    },
    disabledValue() {
      return this.disabled;
    },
    colorTypeValue() {
      return this.colorType;
    },
    isAllValue() {
      return this.colorType === 'all';
    },
    borderColorValue() {
      const { r, g, b, } = this.colorValue;
      const alpha = this.isAllValue ? 0.4 : 1;
      return `rgba(${r}, ${g}, ${b}, ${alpha})` ;
    },
    backgroundColorValue() {
      const { r, g, b, } = this.colorValue;
      const alpha = this.isAllValue ? 0.1 : 1;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    },
    fontColorValue() {
      const { r, g, b, } = this.colorValue;
      return this.isAllValue ? `rgb(${r}, ${g}, ${b})` : '#fff';
    },
    colorValue() {
      return this.color ? hexToRgb(this.color) : '';
    },
  },
  methods: {
    clickFn() {
      this.clicked = true;
    },
    removeClickName() {
      this.clicked = false;
    },
    closeTag(event) {
      this.close(event);
      this.$emit('close', event);
    },
  },
}
</script>
