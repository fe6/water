<template>
  <div class="w-breadcrumb">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Breadcrumb extends Vue {
    name = 'Breadcrumb';
  }
</script>

<style lang="scss">
  @import 'breadcrumb.scss';
</style>
