<template>
  <div
    class="w-tag"
    :class="classList"
    :style="tagStyle"
    @animationend="removeClickName"
    @click="clickFn($event)"
  >
    <slot></slot>
    <i
      v-if="closableValue"
      class="w-tag-close"
      :class="{
        'w-tag-close-section': !isAllValue,
        'w-tag-close-disabled': disabled,
      }"
      @click="closeTag($event)"
    ></i>
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Emit, Vue } from 'vue-property-decorator';
  import { hexToRgb, RgbEntity } from '@/helper/color';

  interface ReturnEntity {
    ev: MouseEvent;
  }

  interface ColorsEntity {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
  }

  @Component
  export default class Tag extends Vue {
    clicked = false;

    @Model('model', { type: String }) readonly value!: string;

    @Prop(Boolean) private disabled!: boolean;

    @Prop(Boolean) private loading!: boolean;

    @Prop(Boolean) private stop!: boolean;

    @Prop({
      type: Boolean,
      default: true,
    })
    private inline!: boolean;

    @Prop(Boolean) private closable!: boolean;

    @Prop(String) private size!: string;

    @Prop(String) private color!: string;

    @Prop({
      type: String,
      default: 'all', // section 部分 || all 全部
    })
    private colorType!: string;

    @Prop({
      type: Function,
      default: () => {},
    })
    private close!: Function;

    get classList() {
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
    }

    get sectionLoad() {
      return !this.isAllValue && this.loading;
    }

    get loadLarge() {
      return this.loading && this.size === 'large';
    }

    get loadSmall() {
      return this.loading && this.size === 'small';
    }

    get closableValue() {
      return this.closable && !this.loading;
    }

    get sizeValue() {
      return this.size;
    }

    get disabledValue() {
      return this.disabled;
    }

    get colorTypeValue() {
      return this.colorType;
    }

    get isAllValue() {
      return this.colorType === 'all';
    }

    get borderColorValue() {
      const { r, g, b } = this.colorValue;
      const alpha = this.isAllValue ? 0.4 : 1;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    get backgroundColorValue() {
      const { r, g, b }: RgbEntity = this.colorValue;
      const alpha = this.isAllValue ? 0.1 : 1;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    get fontColorValue() {
      const { r, g, b }: RgbEntity = this.colorValue;
      return this.isAllValue ? `rgb(${r}, ${g}, ${b})` : '#fff';
    }

    get isSetColor(): boolean {
      return !!this.color;
    }

    get colorValue(): RgbEntity {
      return hexToRgb(this.color);
    }

    get tagStyle(): ColorsEntity {
      const colors: ColorsEntity = {};

      if (this.isSetColor) {
        colors.borderColor = this.borderColorValue;
        colors.color = this.fontColorValue;
        colors.backgroundColor = this.backgroundColorValue;
      }
      return colors;
    }

    clickFn(ev: MouseEvent) {
      this.clicked = !this.disabled;
      if (this.stop) {
        ev.stopPropagation();
      }
    }

    removeClickName() {
      this.clicked = false;
    }

    @Emit('close')
    closeTag(ev: MouseEvent) {
      const params: ReturnEntity = {
        ev,
      };

      this.close(params);

      if (this.stop) {
        ev.stopPropagation();
      }

      return params;
    }
  }
</script>

<style lang="scss">
  @import './tag.scss';
</style>
