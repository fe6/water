<template>
  <div class="w-number" :class="{
    ['w-number-disabled']: disabledValue,
    ['w-number-lg']: size === 'large',
    ['w-number-sm']: size === 'small',
  }">
    <div class="w-number-handle">
      <i class="w-number-arrow w-number-arrow-up" :class="{
        ['w-number-arrow-disabled']: upDisabled
      }" @click="upNumber"></i>
      <i class="w-number-arrow w-number-arrow-down" :class="{
        ['w-number-arrow-disabled']: downDisabled
      }" @click="downNumber"></i>
    </div>
    <input type="text" class="w-number-input" :class="{
      ['w-number-input-disabled']: disabledValue,
      ['w-number-input-lg']: size === 'large',
      ['w-number-input-sm']: size === 'small',
    }" :value="count" @input="changeValue($event)" @focus="focusFn" @blur="blurFn($event)" :readonly="readonly" aria-label="number" :disabled="disabledValue">
    <!-- {{animatedNumber}}-{{number}} -->
  </div>
</template>
<script>
import {
  upStep, downStep, getMaxPrecision, formatWrapper, getValueFromEvent, watchNumber,
} from '../utils/number';

export default {
  name: 'WNumber',
  data() {
    return {
      number: 0,
      originalNumber: 0, // 当格式化时不能改变，用于真正改变的数字
      moveNumber: 0,
      tweenedNumber: 0,
      write: false,
    };
  },
  model: {
    prop: 'value',
    event: 'model',
  },
  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
    animate: Boolean,
    animateTime: {
      type: Number,
      default: 0.5,
    },
    disabled: Boolean,
    readonly: Boolean,
    size: String,
    decimalSeparator: {
      type: String,
      default: '.',
    },
    formatter: {
      type: Function,
      default: num => num,
    },
    parser: {
      type: Function,
      default: input => input,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    step: {
      type: Number,
      default: 1,
    },
    precision: Number,
    change: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    minValue() {
      return this.min;
    },
    maxValue() {
      return this.max;
    },
    stepValue() {
      return this.step;
    },
    disabledValue() {
      return this.disabled;
    },
    upDisabled() {
      return this.max <= this.originalNumber;
    },
    downDisabled() {
      return this.min >= this.originalNumber;
    },
    animatedNumber() {
      const {
        tweenedNumber,
        formatter,
        precision,
        stepValue,
        number,
      } = this;
      const writeValue = formatWrapper(tweenedNumber, formatter);
      const readValue = formatWrapper(
        tweenedNumber.toFixed(
          Math.abs(
            getMaxPrecision(
              number,
              stepValue,
              precision,
            ),
          ),
        ),
        formatter,
      );
      return this.write ? writeValue : readValue;
    },
    count() {
      const newValue = this.animate ? this.animatedNumber : this.number;
      return newValue.toString().replace('.', this.decimalSeparator);
    },
  },
  mounted() {
    this.setValue(this.value);
  },
  methods: {
    setValue(val) {
      this.number = formatWrapper(val, this.formatter);
      this.originalNumber = val;
      this.$emit('model', this.number, this.originalNumber);
      this.$emit('change', this.number, this.originalNumber);
      this.change(this.number, this.originalNumber);
    },
    changeValue(evt = window.event) {
      this.setValue(this.parser(getValueFromEvent(evt)));
    },
    focusFn() {
      this.write = true;
    },
    blurFn(evt = window.event) {
      let value = this.parser(getValueFromEvent(evt));
      if (value >= this.maxValue) {
        value = this.maxValue;
      } else if (value <= this.minValue) {
        value = this.minValue;
      }
      this.setValue(value);
      this.write = false;
    },
    // start
    upNumber() {
      if (!this.upDisabled) {
        this.setValue(upStep(
          this.originalNumber,
          this.minValue,
          this.maxValue,
          this.stepValue,
          this.precision,
        ));
      }
    },
    downNumber() {
      if (!this.downDisabled) {
        this.setValue(downStep(
          this.originalNumber,
          this.minValue,
          this.maxValue,
          this.stepValue,
          this.precision,
        ));
      }
    },
  },
  watch: {
    number() {
      watchNumber(this);
    },
  },
};
</script>
