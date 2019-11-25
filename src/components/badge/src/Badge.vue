<template>
  <div v-if="slotDefault" class="w-badge">
    <sup
      v-if="showCount && !slotCount && !dot"
      class="w-badge-sup"
      :title="titleValue"
      >{{ count }}</sup
    >
    <i v-else-if="!zeroCount && dot" class="w-badge-dot"></i>
    <span v-if="slotCount" class="w-badge-custom">
      <slot name="count"></slot>
    </span>
    <slot></slot>
  </div>
  <span
    v-else-if="(!slotDefault && !showStatus) || showCount"
    class="w-badge-sup w-badge-count"
    :title="titleValue"
    >{{ count }}</span
  >
  <span v-else-if="!slotDefault && showStatus" class="w-badge-status">
    <span
      class="w-badge-status-dot"
      :class="{
        [`w-badge-status-${status}`]: !statusIsColor,
      }"
      :style="dotColor"
    ></span>
    <span v-if="text" class="w-badge-status-text">{{ text }}</span>
  </span>
</template>

<script lang="ts">
  import { Component, Prop, Model, Vue } from 'vue-property-decorator';

  interface ColorEntity {
    background?: string;
  }

  @Component
  export default class Badge extends Vue {
    name = 'WBadge';

    @Model('model', { type: Number, default: 0 }) readonly value!: number;

    @Prop({
      type: Number,
      default: 99,
    })
    private overflowCount?: number;

    @Prop(String) private status?: string;

    @Prop(String) private text?: string;

    @Prop(String) private title?: string;

    @Prop(Boolean) private showZero?: boolean;

    @Prop(Boolean) private dot?: boolean;

    get statusIsColor(): boolean {
      return !!this.status && (this.status as string).indexOf('#') > -1;
    }

    get dotColor(): ColorEntity {
      const color: ColorEntity = {};
      if (this.statusIsColor) {
        color.background = this.status;
      }
      return color;
    }

    get showStatus(): boolean {
      return this.status !== '';
    }

    get slotDefault(): boolean {
      return !!this.$slots.default;
    }

    get slotCount(): boolean {
      return !!this.$slots.count;
    }

    get count() {
      return (this.overflowCount as number) >= this.value
        ? this.value
        : `${this.overflowCount}+`;
    }

    get zeroCount(): boolean {
      return this.count < 1;
    }

    get showCount(): boolean {
      return !this.zeroCount || !!this.showZero;
    }

    get titleValue(): string | number {
      return this.title || this.count;
    }
  }
</script>

<style lang="scss">
  @import 'badge.scss';
</style>
