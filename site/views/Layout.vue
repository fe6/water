<template>
  <div>
    <router-link :to="{ name: 'Home'}">首页</router-link>
    <keep-alive>
      <router-view class="markdown-body"></router-view>
    </keep-alive>
  </div>
</template>
<style>
@import '../../node_modules/github-markdown-css/github-markdown.css';
@import '../../node_modules/highlight.js/styles/github.css';
</style>
