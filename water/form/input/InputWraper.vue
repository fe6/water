<template>
  <div class="w-input-wraper" :class="wraperClass" v-if="slotValue">
    <span class="w-input-wraper-prefix" :class="prefixClass" v-if="prefixValue"><slot name="prefix"></slot></span>
    <w-input-tag :class="inputClass" :type="typeValue" :value="inputValue" :disabled="disabledValue" :size="sizeValue" :placeholder="placeholderValue" @change="changeValue" />
    <span class="w-input-wraper-suffix" :class="suffixClass" v-if="suffixValue"><slot name="suffix"></slot></span>
  </div>
  <w-input-tag v-else :type="typeValue" :disabled="disabledValue" :size="sizeValue" :placeholder="placeholderValue" v-model="inputValue" />
</template>
<script>
import WIcon from '../../icon/Icon';
import WInputTag from './Input';

export default {
  name: "WInput",
  data() {
    return {
      inputValue: '',
    };
  },
  model: {
    prop: 'value',
    event: 'model',
  },
  computed: {
    wraperClass() {
      return [
        {
          'w-input-wraper-slot': this.slotValue,
        },
      ];
    },
    inputClass() {
      return [
        {
          'w-input-slot-suffix': this.suffixValue,
          'w-input-slot-prefix': this.prefixValue,
          'w-input-slot-suffix-lg': this.suffixValue && this.size === 'large',
          'w-input-slot-suffix-sm': this.suffixValue && this.size === 'small',
          'w-input-slot-prefix-lg': this.prefixValue && this.size === 'large',
          'w-input-slot-prefix-sm': this.prefixValue && this.size === 'small',
        },
      ];
    },
    suffixClass() {
      return [
        {
          'w-input-wraper-suffix-lg': this.size === 'large',
          'w-input-wraper-suffix-sm': this.size === 'small',
        },
      ];
    },
    prefixClass() {
      return [
        {
          'w-input-wraper-prefix-lg': this.size === 'large',
          'w-input-wraper-prefix-sm': this.size === 'small',
        },
      ];
    },
    sizeValue() {
      return this.size;
    },
    disabledValue() {
      return this.disabled;
    },
    placeholderValue() {
      return this.placeholder;
    },
    typeValue() {
      return this.type;
    },
    suffixValue() {
      return !!this.$slots.suffix;
    },
    prefixValue() {
      return !!this.$slots.prefix;
    },
    slotValue() {
      return !!this.suffixValue || !!this.prefixValue;
    },
  },
  props: {
    placeholder: String,
    value: String,
    size: String,
    disabled: Boolean,
    type: {
      type: String,
      default: 'text',
    },
    change: {
      type: Function,
      default: () => {},
    }
  },
  mounted() {
    this.setValue(this.value);
  },
  methods: {
    changeValue(value, evt) {
      this.setValue(value);
      this.$emit('model', this.inputValue);
      this.$emit('change', this.inputValue, evt);
      this.change(this.inputValue, evt);
    },
    setValue(value) {
      this.inputValue = value;
    },
  },
  components: {
    WInputTag,
    WIcon,
  },
  watch: {
    value(val) {
      this.setValue(val);
    },
  },
}
</script>
