<template>
  <div
    class="w-input-number"
    :class="{
      ['w-input-number-disabled']: disabled,
      [`w-input-number-${size}`]: size,
      'w-input-number-focus': write,
    }"
  >
    <div class="w-input-number-handle">
      <i
        class="w-input-number-arrow w-input-number-arrow-up"
        :class="{
          ['w-input-number-arrow-disabled']: upDisabled,
        }"
        @click="upNumber"
      ></i>
      <i
        class="w-input-number-arrow w-input-number-arrow-down"
        :class="{
          ['w-input-number-arrow-disabled']: downDisabled,
        }"
        @click="downNumber"
      ></i>
    </div>
    <input
      autocomplete="off"
      class="w-input-number-input"
      :class="{
        ['w-input-number-input-disabled']: disabled,
        ['w-input-number-input-readonly']: readonly,
        [`w-input-number-input-${size}`]: size,
      }"
      :value="count"
      :readonly="readonly"
      aria-label="input-number"
      :disabled="disabled"
      @input="changeValue($event)"
      @focus="focusFn"
      @blur="blurFn($event)"
    />
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Model,
    Prop,
    Emit,
    Watch,
    Vue,
  } from 'vue-property-decorator';
  import {
    upStep,
    downStep,
    getMaxPrecision,
    formatWrapper,
    getValueFromEvent,
    watchNumber,
  } from '@/helper/number';
  import { noop } from '@/helper/noop';

  interface ReturnParamsEntity {
    value: number | string;
    original: number | string;
  }

  @Component
  export default class InputNumber extends Vue {
    number: number | string = 0;

    originalNumber: number | string = 0; // 当格式化时不能改变，用于真正改变的数字

    moveNumber = 0;

    tweenedNumber = 0;

    write = false;

    @Model('model', { type: [Number, String], default: 0 }) readonly value!:
      | number
      | string;

    @Prop(Boolean) private disabled!: boolean;

    @Prop(Boolean) private readonly!: boolean;

    @Prop(Boolean) private animate!: boolean;

    @Prop({
      type: Number,
      default: 0.3,
    })
    private animateTime!: number;

    @Prop({
      type: Number,
      default: -Infinity,
    })
    private min!: number;

    @Prop({
      type: Number,
      default: Infinity,
    })
    private max!: number;

    @Prop({
      type: Number,
      default: 1,
    })
    private step!: number;

    @Prop(Number) private precision!: number;

    @Prop(String) private size!: string;

    @Prop({
      type: String,
      default: '.',
    })
    private decimalSeparator!: string;

    @Prop({
      type: Function,
      default: (num: number) => num,
    })
    private formatter?: Function;

    @Prop({
      type: Function,
      default: (input: string) => input,
    })
    private parser?: Function;

    @Prop({
      type: Function,
      default: noop,
    })
    private change?: Function;

    get upDisabled(): boolean {
      return this.max <= this.originalNumber;
    }

    get downDisabled(): boolean {
      return this.min >= this.originalNumber;
    }

    get animatedNumber(): number | string {
      const writeValue = formatWrapper(
        this.tweenedNumber,
        this.formatter,
        this.parser
      );
      const readValue = formatWrapper(
        this.tweenedNumber.toFixed(
          Math.abs(getMaxPrecision(this.number, this.step, this.precision))
        ),
        this.formatter,
        this.parser
      );

      return this.write ? writeValue : readValue;
    }

    get count(): string {
      const newValue = this.animate ? this.animatedNumber : this.number;
      return newValue.toString().replace('.', this.decimalSeparator);
    }

    mounted() {
      this.setNumber(this.value);
    }

    setNumber(val: number | string) {
      this.number = formatWrapper(val, this.formatter, this.parser);
      this.originalNumber = (this.parser as Function)(val);
      watchNumber(this);
    }

    @Emit('change')
    setValue(val: number | string): ReturnParamsEntity {
      this.setNumber(val);

      const reParams: ReturnParamsEntity = {
        value: this.number,
        original: this.originalNumber,
      };

      this.returnModal();
      (this.change as Function)(reParams);

      return reParams;
    }

    @Emit('model')
    returnModal(): number | string {
      return this.number;
    }

    changeValue(ev: MouseEvent) {
      this.setValue((this.parser as Function)(getValueFromEvent(ev)));
    }

    focusFn() {
      this.write = !this.readonly;
    }

    blurFn(ev: MouseEvent) {
      let value = (this.parser as Function)(getValueFromEvent(ev));
      if (value >= this.max) {
        value = this.max;
      } else if (value <= this.min) {
        value = this.min;
      }
      this.setValue(value);
      this.write = false;
    }

    upNumber() {
      if (!this.upDisabled) {
        this.setValue(
          upStep(
            this.originalNumber,
            this.min,
            this.max,
            this.step,
            this.precision
          )
        );
      }
    }

    downNumber() {
      if (!this.downDisabled) {
        this.setValue(
          downStep(
            this.originalNumber,
            this.min,
            this.max,
            this.step,
            this.precision
          )
        );
      }
    }

    @Watch('value')
    watchNumber(value: number | string) {
      this.setNumber(value);
    }
  }
</script>

<style lang="scss">
  @import 'inputnumber.scss';
</style>
