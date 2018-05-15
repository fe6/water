<template>
  <i
    v-if="type"
    :class="[
      'w-font',
      {
        [`w-${type}`]: !!type,
      },
      {
        [`${prefix}-font`]: !!prefix,
      },
      {
        [`${prefix}-${type}`]: !!prefix && !!type,
      },
      {
        'w-spin': !!spin,
      },
      className,
    ]"
  ></i>
</template>

<script>
export default {
  name: 'WIcon',
  props: {
    type: String,
    spin: Boolean,
    prefix: String,
    className: [String, Object],
  },
  data() {
    return {};
  },
};
</script>
