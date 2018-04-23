<template>
  <div class="home">
    <h1 class="home-title">水滴</h1>
    <p class="home-dec">一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库</p>
    <div class="home-btn">
      <router-link :to="{ name: 'Icon'}">组件</router-link>
      <a href="https://github.com/fe6">源码</a>
    </div>
  </div>
</template>
<style lang="scss">
@import '../assets/home.scss';
</style>
