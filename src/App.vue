<!-- @format -->

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class LayoutView extends Vue {}
</script>

<style lang="scss">
  @import './assets/style/layout.scss';
</style>
