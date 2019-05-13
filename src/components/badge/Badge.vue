<template>
  <div class="w-badge" v-if="slotDefault">
    <sup
      class="w-badge-sup"
      :title="titleValue"
      v-if="showCount && !slotCount && !dot"
    >{{count}}</sup>
    <i class="w-badge-dot" v-else-if="!zeroCount && dot"></i>
    <span class="w-badge-custom" v-if="slotCount">
      <slot name="count"></slot>
    </span>
    <slot></slot>
  </div>
  <span
    class="w-badge-sup w-badge-count"
    :title="titleValue"
    v-else-if="(!slotDefault && !showStatus) || showCount"
  >{{count}}</span>
  <div class="w-badge-status" v-else-if="!slotDefault && showStatus">
    <span class="w-badge-status-dot" :class="[`w-badge-status-${status}`]"></span>
    <p class="w-badge-status-text" v-if="text">{{text}}</p>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Model, Vue,
} from 'vue-property-decorator';
// import { isNumber } from '../../helper/type';

@Component
export default class Badge extends Vue {
  name: string = 'Badge';

  @Model('model', { type: Number, default: 0 }) readonly value!: number;

  @Prop({
    type: Number,
    default: 99,
  }) private overflowCount?: number;

  @Prop(String) private status?: string;

  @Prop(String) private text?: string;

  @Prop(String) private title?: string;

  @Prop(Boolean) private showZero?: boolean;

  @Prop(Boolean) private dot?: boolean;

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
    return (this.overflowCount as number) > this.value ? this.value : `${this.overflowCount}+`;
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
  @import "badge.scss";
</style>
