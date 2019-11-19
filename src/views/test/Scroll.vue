<template>
  <div>
    <WScroll
      class="demo-scroll-h"
      type="horizontal"
      openPull
      ref="pullScroll2"
      :pulling="pulling2"
    >
      <!-- <WScroll class="demo-scroll-h" :noResize="false" type="horizontal"> -->
      <div class="demo-scroll-h-i2">
        <p class="demo-desc-h" v-for="(text, index) in texts3" :key="index">
          {{ text }}
        </p>
      </div>
    </WScroll>
    <hr />
    <WScroll class="demo-scroll" openPull ref="pullScroll" :pulling="pulling">
      <p v-for="(text, index) in texts2" :key="index">{{ text }}</p>
    </WScroll>
    <hr />
    <WScroll class="demo-scroll">
      <p v-for="(text, index) in texts" :key="index">{{ text }}</p>
    </WScroll>
    <hr />
    <WScroll class="demo-scroll-h" type="horizontal">
      <!-- <WScroll class="demo-scroll-h" :noResize="false" type="horizontal"> -->
      <div class="demo-scroll-h-i">
        <p class="demo-desc-h" v-for="(text, index) in texts1" :key="index">
          {{ text }}
        </p>
      </div>
    </WScroll>
    <hr />
    <hr />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import WScroll from '@/components/scroll/Scroll.vue';

  @Component({
    components: {
      WScroll,
    },
  })
  export default class ScrollView extends Vue {
    texts: string[] = [];

    texts1: string[] = [];

    texts2: string[] = [];

    texts3: string[] = [];

    created() {
      this.initDate();
    }

    initDate() {
      for (let i = 1; i < 100; i++) {
        this.texts.push(`这是一段文字++${i}`);
      }
      for (let i = 1; i < 100; i++) {
        this.texts1.push(`这是一段文字++${i}`);
      }
      for (let i = 1; i < 10; i++) {
        this.texts2.push(`这是一段文字++${i}`);
      }
      for (let i = 1; i < 30; i++) {
        this.texts3.push(`这是一段文字++${i}`);
      }
    }

    pulling() {
      const len = this.texts2.length;

      for (let i = len + 1; i < len + 11; i++) {
        this.texts2.push(`这是一段文字++${i}`);
      }

      this.$nextTick(() => {
        (this.$refs.pullScroll as any).refresh();
        (this.$refs.pullScroll as any).finishPull();
      });
    }

    pulling2() {
      const len = this.texts3.length;

      for (let i = len + 1; i < len + 11; i++) {
        this.texts3.push(`这是一段文字++${i}`);
      }

      this.$nextTick(() => {
        (this.$refs.pullScroll2 as any).refresh();
        if (len < 100) {
          (this.$refs.pullScroll2 as any).finishPull();
        }
      });
    }
  }
</script>

<style lang="scss">
  .demo-scroll {
    height: 200px;

    & p {
      margin: 0;
    }
  }

  .demo-scroll-h {
    width: 100%;
    height: 200px;

    &-i {
      width: 11980px;
    }

    &-i2 {
      white-space: nowrap;
    }

    & p {
      margin: 0;
    }
  }

  .demo-desc-h {
    display: inline-block;
    height: 200px;
    width: 120px;
    border-right: 1px solid #000;
  }
</style>
