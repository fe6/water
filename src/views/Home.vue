<template>
  <div class="home">
    <div ref="lottie" class="home-lottie"></div>
    <div class="home-header">
      <h1 class="home-icon">
        <img src="~assets/image/logo.svg" class="home-logo" />
      </h1>
    </div>
    <transition name="home-anim">
      <div class="home-core" v-show="coreStatus">
        <h2 class="home-title">Water UI</h2>
        <p class="home-desc">Vue 2.0 的高质量组件库</p>
        <div class="home-handle">
          <w-button class="home-btn" @click="start">开始使用</w-button>
          <w-button class="home-btn" type="info" @click="goVSC"
            >VSCode 插件</w-button
          >
          <w-button class="home-btn" type="border" @click="goGithub">
            <svg
              slot="icon"
              class="octicon octicon-mark-github v-align-middle"
              height="32"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              aria-hidden="true"
            >
              <path fill-rule="evenodd" :d="github"></path>
            </svg>
            Github</w-button
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import lottie from 'lottie-web';
  import { Component, Vue } from 'vue-property-decorator';
  import WButton from '@/components/button/src/Button.vue';
  import animationData from '@/views/common/data';
  import { github } from '@/views/common/icon';
  import { VSC_URL } from '@/views/common/constant';

  @Component({
    components: {
      WButton,
    },
  })
  export default class HomeView extends Vue {
    path: string = `${process.env.BASE_URL}img/home/`;

    github: string = github;

    msg = '首页';

    coreStatus: boolean = false;

    beforeCreate() {
      document.title = this.$route.meta.title;
    }

    mounted() {
      this.$nextTick(() => {
        lottie.loadAnimation({
          container: this.$refs.lottie as Element,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData(this.path),
        });
        this.coreStatus = true;
      });
    }

    start() {
      this.$router.push({
        name: 'Start',
      });
    }

    goGithub() {
      this.msg = '首页';
      window.open('https://github.com/fe6/water');
    }

    goVSC() {
      this.msg = '首页';
      window.open(VSC_URL);
    }
  }
</script>

<style lang="scss">
  @import '~assets/style/home.scss';
</style>
