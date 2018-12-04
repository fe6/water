<template>
  <input :type="typeValue" class="w-input" :class="[classList]" :placeholder="placeholderValue" :value="inputValue" @input="changeValue($event)">
</template>
<script>
export default {
  name: 'WInputTag',
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
    classList() {
      return [
        {
          'w-input-lg': this.size === 'large',
          'w-input-sm': this.size === 'small',
          'w-input-disabled': this.disabled,
        },
      ];
    },
    placeholderValue() {
      return this.placeholder;
    },
    typeValue() {
      return this.type;
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
    },
  },
  mounted() {
    this.setValue(this.value);
  },
  methods: {
    changeValue(evt) {
      const val = evt.target.value;
      this.setValue(val);
      this.$emit('model', this.inputValue);
      this.$emit('change', this.inputValue, evt);
      this.change(this.inputValue, evt);
    },
    setValue(value) {
      this.inputValue = value;
    },
  },
  watch: {
    value(val) {
      this.setValue(val);
    },
  },
};
</script>
