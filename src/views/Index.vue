<template>
  <div class="layout">
    <header class="layout-header">
      <WRow>
        <WCol :span="24">
          <router-link :to="{ name: 'Home' }" class="layout-logo">水滴</router-link>
        </WCol>
      </WRow>
    </header>
    <div class="layout-main">
      <WRow>
        <WCol :xs="12" :sm="8" :md="7" :lg="6" :xl="4">
          <section
            class="layout-menu"
            :style="menuStyle"
          >
            <template v-for="(navItem, navIndex) in nav">
              <div
                class="layout-menu-title"
                :title="navItem.title"
                :key="`nav_${navIndex}`"
              >{{navItem.title}}</div>
              <ul class="layout-menu-list" :key="navIndex">
                <router-link
                  exact-active-class="layout-menu-on"
                  tag="li"
                  :to="linkItem.to"
                  class="layout-menu-item"
                  v-for="(linkItem, linkIndex) in navItem.nav"
                  :key="`item_${linkIndex}`"
                >{{linkItem.title}}</router-link>
              </ul>
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
