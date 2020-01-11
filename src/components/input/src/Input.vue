<!-- @format -->

<template>
  <div
    v-if="beSlot || showWordLimit"
    class="w-input-wraper"
    :class="wraperClass"
  >
    <span v-if="bePrefix" class="w-input-wraper-prefix" :class="prefixClass">
      <slot name="prefix"></slot>
    </span>
    <Inp
      :class="inputClass"
      :type="type"
      :value="value"
      :disabled="disabled"
      :size="size"
      :readonly="readonly"
      :placeholder="placeholder"
      :error="error"
      :max-length="maxLength"
      :style="suffixStyle"
      @change="changeValue"
    />
    <span
      v-if="beSuffix || showWordLimit"
      ref="suffix"
      class="w-input-wraper-suffix"
      :class="suffixClass"
    >
      <slot v-if="beSuffix" name="suffix"></slot>
      <span
        v-if="maxLength > 0 && showWordLimit"
        class="w-input-count"
        :class="{
          ['w-input-count-suffix']: beSuffix,
        }"
      >
        {{ String(value).length }} / {{ maxLength }}
      </span>
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
    :max-length="maxLength"
    @change="changeValue"
  />
</template>

<script lang="ts">
  import { Component, Model, Prop, Emit, Vue } from 'vue-property-decorator';
  import Inp, { ReturnParamsEntity } from '@/components/input/src/Inp';
  import { getMaxLengthValue } from '@/components/input/src/helpers';

  @Component({
    components: {
      Inp,
    },
  })
  export default class Input extends Vue {
    name = 'WInput';

    preName = 'w-input-';

    suffixStyle = '';

    @Model('model', { type: [String, Number] }) readonly value!:
      | string
      | number;

    @Prop([String, Number]) private maxLength!: string | number;

    @Prop(String) private placeholder!: string;

    @Prop(String) private size!: string;

    @Prop({
      type: String,
      default: 'text',
    })
    private type!: string;

    @Prop(Boolean) private disabled!: boolean;

    @Prop(Boolean) private showWordLimit!: boolean;

    @Prop(Boolean) private readonly!: boolean;

    @Prop({
      type: Function,
      default: (): boolean => false,
    })
    private error?: Function;

    @Prop({
      type: Function,
      default: () => {},
    })
    private change?: Function;

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
          'w-input-wraper-suffix-limit': this.showWordLimit,
          [`w-input-wraper-suffix-limit-${this.size}`]:
            this.size && this.showWordLimit,
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

    mounted() {
      this.setPaddingRight();
    }

    setPaddingRight() {
      const { suffix } = this.$refs;
      const space = suffix ? 16 : 0;
      const width = suffix ? `${(suffix as any).offsetWidth + space}px` : '';
      const paddingRightValue =
        this.showWordLimit && this.value ? `padding-right: ${width}` : '';
      this.suffixStyle = paddingRightValue;
    }

    @Emit('model')
    changeValue(params: ReturnParamsEntity): string | number {
      this.setPaddingRight();

      this.$emit('change', params);
      (this.change as Function)(params);

      return getMaxLengthValue(params.value, this.maxLength);
    }
  }
</script>

<style lang="scss">
  @import 'input.scss';
</style>
