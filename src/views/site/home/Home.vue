<!-- @format -->

<template>
  <div class="home">
    <div ref="lottie" class="home-lottie"></div>
  </div>
</template>

<script lang="ts">
  import lottie from 'lottie-web';
  import { Component, Vue } from 'vue-property-decorator';
  import animationData from '@/views/site/home/lottie';

  @Component({
    components: {},
  })
  export default class HomeView extends Vue {
    path: string = `${process.env.BASE_URL}img/home/`;

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
  }
</script>
