<!-- @format -->

<template>
  <p class="w-text">Text</p>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class WText extends Vue {}
</script>

<style lang="scss">
  @import 'text.scss';
</style>
