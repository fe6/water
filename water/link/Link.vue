<template>
  <a class="w-link" :href="urlValue" :target="targetValue" v-if="urlValue">
    <slot></slot>
  </a>
  <router-link class="w-link" :tag="tag" :to="toValue" v-else-if="toValue">
    <slot></slot>
  </router-link>
  <span class="w-link" v-else><slot></slot></span>
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
  },
  computed: {
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
