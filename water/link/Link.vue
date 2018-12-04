<template>
  <a class="w-link" :class="classList" :href="urlValue" :target="targetValue" v-if="urlValue">
    <slot></slot>
  </a>
  <router-link class="w-link" :class="classList" :tag="tag" :to="toValue" v-else-if="toValue">
    <slot></slot>
  </router-link>
  <span class="w-link" :class="classList" v-else><slot></slot></span>
</template>
<script>
export default {
  name: 'WLink',
  props: {
    tag: {
      type: String,
      default: 'a',
    },
    url: String,
    target: String,
    to: Object,
    size: String,
    loading: Boolean,
  },
  computed: {
    classList() {
      return [
        {
          'w-link-loading': this.loading,
          'w-link-lg': this.size === 'large',
          'w-link-sm': this.size === 'small',
          'w-link-loading-lg': this.loadLarge,
          'w-link-loading-sm': this.loadSmall,
        },
      ];
    },
    loadLarge() {
      return this.loading && this.size === 'large';
    },
    loadSmall() {
      return this.loading && this.size === 'small';
    },
    urlValue() {
      return this.url;
    },
    targetValue() {
      return this.target || '_self';
    },
    toValue() {
      return this.to;
    },
  },
};
</script>
