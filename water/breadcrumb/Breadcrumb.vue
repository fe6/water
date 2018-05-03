<template>
  <div class="w-breadcrumb" :class="{
    [`${prefix}-breadcrumb`]: prefix,
  }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WBreadcrumb',
  props: {
    prefix: String,
  },
};
</script>
