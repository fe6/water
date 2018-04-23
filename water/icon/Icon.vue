<template>
  <i
    v-if="type"
    :class="[`${prefix}-font`,`${prefix}-${type}`, {
      'w-spin': !!spin,
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
      default: 'w',
    },
  },
  data() {
    return {};
  },
};
</script>
