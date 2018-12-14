<template>
  <div class="w-tag" :class="classList" @animationend="removeClickName" @click="clickFn($event)" :style="{'border-color': borderColorValue, 'color': fontColorValue, 'background-color': backgroundColorValue, }">
    <slot></slot>
    <i class="w-tag-close" :class="{'w-tag-close-section': !isAllValue}" v-if="closableValue" @click="closeTag($event)"></i>
  </div>
</template>
<script>
import { hexToRgb } from '../utils/color';

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
    stop: Boolean,
    loading: Boolean,
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
    },
  },
  computed: {
    classList() {
      return [
        {
          'w-tag-loading': this.loading,
          'w-tag-lg': this.size === 'large',
          'w-tag-sm': this.size === 'small',
          'w-tag-loading-lg': this.loadLarge,
          'w-tag-loading-sm': this.loadSmall,
          'w-tag-click': !this.loading && this.clicked,
          'w-tag-inline': this.inline,
          'w-tag-disabled': this.disabled,
          'w-tag-section': !this.isAllValue,
          'w-tag-section-loading': this.sectionLoad,
        },
      ];
    },
    sectionLoad() {
      return !this.isAllValue && this.loading;
    },
    loadLarge() {
      return this.loading && this.size === 'large';
    },
    loadSmall() {
      return this.loading && this.size === 'small';
    },
    closableValue() {
      return this.closable && !this.loading;
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
      const { r, g, b } = this.colorValue;
      const alpha = this.isAllValue ? 0.4 : 1;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    },
    backgroundColorValue() {
      const { r, g, b } = this.colorValue;
      const alpha = this.isAllValue ? 0.1 : 1;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    },
    fontColorValue() {
      const { r, g, b } = this.colorValue;
      return this.isAllValue ? `rgb(${r}, ${g}, ${b})` : '#fff';
    },
    colorValue() {
      return this.color ? hexToRgb(this.color) : '';
    },
  },
  methods: {
    clickFn(event) {
      this.clicked = true;
      if (this.stop) {
        event.stopPropagation();
      }
    },
    removeClickName() {
      this.clicked = false;
    },
    closeTag(event) {
      this.close(event);
      this.$emit('close', event);
      if (this.stop) {
        event.stopPropagation();
      }
    },
  },
};
</script>
