<template>
  <li :class="optionClass" @click="optionClick($event)">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import {
  Component,
  Model,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';
import { ReturnParamsEntity, FieldNamesEntity, fieldNamesDefault } from './entity';

@Component
export default class Option extends Vue {
  name: string = 'Option';

  @Model('model', { type: String }) readonly value!: string;

  @Prop(Boolean) private loading!: boolean;

  @Prop(Boolean) private hover!: boolean;

  @Prop(Boolean) private active!: boolean;

  @Prop(Boolean) private disabled!: boolean;

  @Prop(String) private label!: string;

  @Prop({
    type: Object,
    default: (): FieldNamesEntity => fieldNamesDefault,
  }) private fieldNames!: FieldNamesEntity;

  @Prop({
    type: String,
    default: 'single',
  }) private mode!: string;

  @Prop({
    type: Function,
    default: () => {},
  }) private optionChange?: Function;

  get activeValue() {
    return this.active;
  }

  get optionClass() {
    return [`w-option-${this.mode}`, {
      [`w-option-${this.mode}-active`]: this.activeValue,
      [`w-option-${this.mode}-hover`]: this.hover,
      'w-option-loading': this.loading,
      'w-option-disabled': this.disabled,
    }];
  }

  @Emit('optionChange')
  optionClick(ev: MouseEvent): ReturnParamsEntity {
    const reParams: ReturnParamsEntity = {
      ev,
      [this.fieldNames.value]: this.value,
      [this.fieldNames.label]: this.label,
      [this.fieldNames.disabled]: this.disabled,
    };

    this.returnModel();
    (this as any).optionChange(reParams);

    return reParams;
  }

  @Emit('model')
  returnModel(): string {
    return this.value;
  }
}
</script>

<style lang="scss">
  @import "option.scss";
</style>
