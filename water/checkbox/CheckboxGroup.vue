<template>
  <div class="w-checkbox-group" :class="{
    [`${prefix}-checkbox`]: !!prefix,
  }">
    <w-checkbox v-for="(item, itemIndex) in list" :key="itemIndex" @change="checkFn(item)" :disabled="disabled || item.disabled" v-model="item.on">{{item[formatValue]}}</w-checkbox>
  </div>
</template>
<script>
import WCheckbox from './Checkbox';

export default {
  name: 'wCheckboxGroup',
  data() {
    return {
      list: this.options,
      checkList: this.on || [],
    };
  },
  model: {
    prop: 'on',
    event: 'model',
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    change: {
      type: Function,
      default: () => {},
    },
    format: String,
    formatValue: {
      type: String,
      default: 'value',
    },
    disabled: Boolean,
    prefix: String,
  },
  methods: {
    checkFn(value) {
      if (!this.disabled && !value.disabled) {
        this.setValue(value);
        this.$emit('model', this.checkList);
      }
    },
    setValue(value) {
      const hasFormat = this.format && value[this.format];
      const checkIndex = hasFormat
        ? this.checkList.indexOf(value[this.format])
        : this.checkList.findIndex(item => item === value);
      const checkIn = checkIndex > -1;
      if (checkIn) {
        this.checkList.splice(checkIndex, 1);
      } else {
        const checkItem = hasFormat ? value[this.format] : value;
        this.checkList.push(checkItem);
      }
      this.$emit('change', this.checkList, !checkIn, value);
      this.change(this.checkList, !checkIn, value);
    },
  },
  components: {
    WCheckbox,
  },
};
</script>
