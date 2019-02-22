<template>
  <div class="w-page-jumper">
    <span class="w-page-jumper-text">{{prefix}}</span>
    <w-input class="w-page-jumper-input" @keyup.enter.native="jumpPage($event)" />
    <span class="w-page-jumper-text">{{suffix}}</span>
  </div>
</template>
<script>
import WInput from '../form/input/Input';
import props from './props/pagejump';

export default {
  name: 'WPageJump',
  model: {
    prop: 'value',
    event: 'model',
  },
  props,
  methods: {
    jumpPage(ev) {
      this.$emit('model', parseInt(ev.target.value, 2));
      ev.target.value = '';
    },
  },
  components: {
    WInput,
  },
};
</script>
<style lang="scss" scoped>
</style>
