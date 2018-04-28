<template>
  <div class="layout">
    <header class="layout-header">
      <h1 class="layout-title">💧 水滴</h1>
    </header>
    <div class="layout-body">
      <div class="layout-side">
        <router-link :to="{ name: 'Home'}">首页</router-link>
        <router-link :to="{ name: 'Button'}">按钮</router-link>
        <router-link :to="{ name: 'Icon'}">图标</router-link>
        <router-link :to="{ name: 'Loadbar'}">全局进度条</router-link>
      </div>
      <keep-alive>
        <router-view class="markdown-body layout-main"></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<style lang="scss">
@import '../../node_modules/github-markdown-css/github-markdown.css';
@import '../../node_modules/highlight.js/styles/github.css';
@import '../assets/layout.scss';
</style>
