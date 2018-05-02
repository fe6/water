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
        <router-link :to="{ name: 'Grid'}">栅格</router-link>
      </div>
      <keep-alive>
        <!-- <w-button-group :on="stats">
          <w-button :key="1" className="sc" prefix="l0" icon="loading1" type="primary" size="large" @click="clickFn">primary1</w-button>
          <w-button :key="2" type="danger" size="large" @click="clickFn">primary2</w-button>
          <w-button :key="3" type="dashed" size="large" @click="clickFn">primary3</w-button>
          <w-button :key="4" ghost size="large" @click="clickFn">primary3</w-button>
        </w-button-group> -->
        <router-view class="markdown-body layout-main"></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stats: 1,
    };
  },
  methods: {
    clickFn($event, index) {
      this.stats = index;
    },
  },
};
</script>
<style lang="scss">
@import '../../node_modules/github-markdown-css/github-markdown.css';
@import '../../node_modules/highlight.js/styles/github.css';
@import '../assets/layout.scss';
</style>
