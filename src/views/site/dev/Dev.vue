<!-- @format -->

<template>
  <div>
    <h1>本地开发界面</h1>
    <router-link :to="{ name: 'Home' }">首页</router-link>
    <h2>通用</h2>
    <div>
      <router-link :to="{ name: 'TestText' }">文本</router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class DevView extends Vue {}
</script>
