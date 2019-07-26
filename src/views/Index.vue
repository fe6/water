<template>
  <div class="layout">
    <header class="layout-header">
      <WRow>
        <WCol :span="24" class="layout-header-col">
          <router-link :to="{ name: 'Home' }" class="layout-logo">水滴</router-link>
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
    <div class="layout-main">
      <WRow>
        <WCol :xs="12" :sm="10" :md="8" :lg="6" :xl="5" :xxl="4">
          <section
            class="layout-menu"
            :style="menuStyle"
          >
            <template v-for="(navItem, navIndex) in nav">
              <div
                class="layout-menu-sub"
                :title="navItem.title"
                :key="`navItem_${navIndex}`"
                v-if="navItem.children"
              >{{navItem.title}}</div>
              <router-link
                exact-active-class="layout-menu-on"
                :to="navItem.to"
                class="layout-menu-link"
                :key="`navItem_${navIndex}`"
                v-else
              >{{navItem.title}}</router-link>
              <template v-for="(navChildren, navChildrenIndex) in navItem.children">
                <div
                  class="layout-menu-h3"
                  :title="navChildren.title"
                  :key="`navChildren_${navChildrenIndex}`"
                >{{navChildren.title}}</div>
                <ul
                  class="layout-menu-list"
                  :key="navChildrenIndex"
                >
                  <router-link
                    exact-active-class="layout-menu-on"
                    tag="li"
                    :to="linkItem.to"
                    class="layout-menu-item"
                    v-for="(linkItem, linkIndex) in navChildren.nav"
                    :key="`linkItem_${linkIndex}`"
                  >{{linkItem.title}}</router-link>
                </ul>
              </template>
            </template>
          </section>
        </WCol>
        <WCol :xs="12" :sm="16" :md="17" :lg="18" :xl="20">
          <article class="layout-cantainer">
            <router-view/>
          </article>
        </WCol>
      </WRow>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';
import { nav, NavEntity } from '@/nav';

interface MenuStyleEntity {
  height?: string;
}

@Component({
  components: {
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
