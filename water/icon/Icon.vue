<template>
  <i
    v-if="type"
    :class="[`${prefix}-font`,`${prefix}-${type}`, {
      'vi-spin': !!spin,
    }]"
  ></i>
</template>

<script>
export default {
  name: 'WIcon',
  props: {
    type: String,
    spin: Boolean,
    prefix: {
      type: String,
      default: 'vi',
    },
  },
  data() {
    return {};
  },
};
</script>
