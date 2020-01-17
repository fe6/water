<!-- @format -->

<template>
  <router-view id="app" />
</template>

<script lang="ts">
  import { Component, Watch, Vue } from 'vue-property-decorator';

  @Component
  export default class IndexView extends Vue {
    mounted() {
      this.setTitle(this.$route);
    }

    @Watch('$route')
    setTitle(val: any) {
      document.title = val.meta.title;
    }
  }
</script>

<style lang="scss">
  @import './assets/reset.scss';
  // 自定义 water 主题
  @import './assets/val.scss';
</style>
