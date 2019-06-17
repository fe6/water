<template>
  <div
    class="w-input-wraper"
    :class="wraperClass"
    v-if="beSlot"
  >
    <span
      class="w-input-wraper-prefix"
      :class="prefixClass"
      v-if="bePrefix"
    >
      <slot name="prefix"></slot>
    </span>
    <Inp
      :class="inputClass"
      :type="type"
      :value="value"
      :disabled="disabled"
      :size="size"
      :placeholder="placeholder"
      :error="error"
      @change="changeValue"
    />
    <span
      class="w-input-wraper-suffix"
      :class="suffixClass"
      v-if="beSuffix"
    >
      <slot name="suffix"></slot>
    </span>
  </div>
  <Inp
    v-else
    :type="type"
    :disabled="disabled"
    :size="size"
    :placeholder="placeholder"
    :error="error"
    :value="value"
    @change="changeValue"
  />
</template>

<script lang="ts">
import {
  Component,
  Model,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';
import Inp, { ReturnParamsEntity } from './Inp';

@Component({
  components: {
    Inp,
  },
})
export default class Input extends Vue {
  name: string = 'Input';

  preName: string = 'w-input-';

  @Model('model', { type: String }) readonly value!: string;

  @Prop(String) private placeholder!: string;

  @Prop(String) private size!: string;

  @Prop({
    type: String,
    default: 'text',
  }) private type!: string;

  @Prop(Boolean) private disabled!: boolean;

  @Prop({
    type: Function,
    default: (): boolean => false,
  }) private error?: Function;

  @Prop({
    type: Function,
    default: () => {},
  }) private change?: Function;

  get wraperClass(): any[] {
    return [
      {
        'w-input-wraper-slot': this.beSlot,
      },
    ];
  }

  get inputClass(): any[] {
    return [
      {
        'w-input-slot-suffix': this.beSuffix,
        'w-input-slot-prefix': this.bePrefix,
        [`w-input-slot-suffix-${this.size}`]: this.beSuffix && this.size,
        [`w-input-slot-prefix-${this.size}`]: this.bePrefix && this.size,
      },
    ];
  }

  get suffixClass(): any[] {
    return [
      {
        [`w-input-wraper-suffix-${this.size}`]: this.size,
      },
    ];
  }

  get prefixClass(): any[] {
    return [
      {
        [`w-input-wraper-prefix-${this.size}`]: this.size,
      },
    ];
  }

  get beSuffix(): boolean {
    return !!this.$slots.suffix;
  }

  get bePrefix(): boolean {
    return !!this.$slots.prefix;
  }

  get beSlot(): boolean {
    return !!this.beSuffix || !!this.bePrefix;
  }

  @Emit('model')
  changeValue(params: ReturnParamsEntity): string {
    this.$emit('change', params);
    (this.change as Function)(params);

    return params.value;
  }
}
</script>

<style lang="scss">
  @import "input.scss";
</style>
