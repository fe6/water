<template>
  <span class="w-breadcrumb-item" :class="{
    [`${prefix}-breadcrumb-item`]: prefix,
  }">
    <span :class="{
      'w-breadcrumb-item-link': to||href||open,
      [`${prefix}-breadcrumb-item-link`]: prefix,
    }" @click="page">
      <slot></slot>
    </span>
    <i class="w-breadcrumb-item-separator" :class="{
      [`${prefix}-breadcrumb-item-separator`]: prefix,
    }" v-html="separator"></i>
  </span>
</template>
<script>
export default {
  name: 'WBreadcrumbItem',
  props: {
    separator: {
      type: String,
      default: '/',
    },
    open: String,
    href: String,
    to: {
      type: Object,
      default: () => {},
    },
    routerType: {
      type: [String, Number],
      default: 'push',
    },
    click: {
      type: Function,
      default: () => {},
    },
    prefix: String,
  },
  data() {
    return {
    };
  },
  methods: {
    page() {
      if (this.href) {
        window.location.href = this.href;
      }
      if (this.open) {
        window.open(this.open);
      }
      if (this.to) {
        this.$router[this.routerType](this.to);
      }
      this.click();
      this.$emit('click');
    },
  },
};
</script>
