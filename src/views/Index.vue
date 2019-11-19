<template>
  <div class="layout">
    <WAffix :offset-top="0">
      <header class="layout-header">
        <WRow>
          <WCol :span="24" class="layout-header-col">
            <router-link :to="{ name: 'Home' }" class="layout-logo">
              <img height="32px" src="~assets/image/logo.svg" alt="水滴" />
            </router-link>
            <a
              href="https://www.npmjs.org/package/@fe6/water"
              class="layout-npm"
            >
              <img
                src="https://camo.githubusercontent.com/f520134cf8606447113265dbfd486a9dc6268156/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406665362f77617465722e7376673f7374796c653d666c61742d737175617265"
                class="layout-npm-img"
                alt="@fe6/water"
                data-canonical-src="https://img.shields.io/npm/v/@fe6/water.svg?style=flat-square"
                style="max-width:100%;"
                height="100%"
              />
            </a>
          </WCol>
        </WRow>
      </header>
    </WAffix>
    <div class="layout-main">
      <section class="layout-menu" :style="menuStyle">
        <template v-for="(navItem, navIndex) in nav">
          <div
            v-if="navItem.children"
            :key="`navItem_${navIndex}`"
            class="layout-menu-sub"
            :title="navItem.title"
          >
            {{ navItem.title }}
          </div>
          <router-link
            v-else
            :key="`navItem_${navIndex}`"
            exact-active-class="layout-menu-on"
            :to="navItem.to"
            class="layout-menu-link"
            >{{ navItem.title }}</router-link
          >
          <template v-for="(navChildren, navChildrenIndex) in navItem.children">
            <div
              :key="`navChildren_${navChildrenIndex}`"
              class="layout-menu-h3"
              :title="navChildren.title"
            >
              {{ navChildren.title }}
            </div>
            <ul :key="navChildrenIndex" class="layout-menu-list">
              <router-link
                v-for="(linkItem, linkIndex) in navChildren.nav"
                :key="`linkItem_${linkIndex}`"
                exact-active-class="layout-menu-on"
                tag="li"
                :to="linkItem.to"
                class="layout-menu-item"
                >{{ linkItem.title }}</router-link
              >
            </ul>
          </template>
        </template>
      </section>
      <article class="layout-cantainer">
        <router-view />
      </article>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Watch, Vue } from 'vue-property-decorator';
  import WAffix from '@/components/affix/src/Affix.vue';
  import WRow from '@/components/grid/src/Row.vue';
  import WCol from '@/components/grid/src/Col.vue';
  import { nav, NavEntity } from '@/nav';

  interface MenuStyleEntity {
    height?: string;
  }

  @Component({
    components: {
      WAffix,
      WRow,
      WCol,
    },
  })
  export default class IndexView extends Vue {
    nav: NavEntity[] = nav;

    menuStyle: MenuStyleEntity = {};

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
  @import '~assets/style/layout.scss';
</style>
