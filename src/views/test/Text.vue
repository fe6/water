<!-- @format -->

<template>
  <div>
    <router-link :to="{ name: 'Dev' }">返回</router-link>
    <p>test tesssssst</p>
    <w-text />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class TextTestView extends Vue {}
</script>
