<template>
  <div id="app" class="layout">
    <header class="layout-header">
      <WRow>
        <WCol :span="24">
          <router-link :to="{ name: 'Home' }" class="layout-logo">水滴</router-link>
        </WCol>
      </WRow>
    </header>
    <div class="layout-main">
      <WRow>
        <WCol :span="4">
          <section
            class="layout-menu"
            :style="menuStyle"
          >
            <div class="layout-menu-title" title="通用">通用</div>
            <ul class="layout-menu-list">
              <router-link
                exact-active-class="layout-menu-on"
                tag="li"
                :to="{ name: 'Icon' }"
                class="layout-menu-item"
              >Icon 图标</router-link>
              <router-link
                exact-active-class="layout-menu-on"
                tag="li"
                :to="{ name: 'Button' }"
                class="layout-menu-item"
              >Button 按钮</router-link>
            </ul>
            <div class="layout-menu-title" title="布局">布局</div>
            <ul class="layout-menu-list">
              <router-link
                exact-active-class="layout-menu-on"
                tag="li"
                :to="{ name: 'Grid' }"
                class="layout-menu-item"
              >Grid 栅格</router-link>
            </ul>
            <div class="layout-menu-title" title="导航">导航</div>
            <ul class="layout-menu-list">
              <router-link
                exact-active-class="layout-menu-on"
                tag="li"
                :to="{ name: 'Affix' }"
                class="layout-menu-item"
              >Affix 固钉</router-link>
              <router-link
                exact-active-class="layout-menu-on"
                tag="li"
                :to="{ name: 'Breadcrumb' }"
                class="layout-menu-item"
              >Breadcrumb 面包屑</router-link>
            </ul>
            <div class="layout-menu-title" title="数据录入">数据录入</div>
            <ul class="layout-menu-list">
              <router-link
                exact-active-class="layout-menu-on"
                tag="li"
                :to="{ name: 'Checkbox' }"
                class="layout-menu-item"
              >Checkbox 多选</router-link>
              <router-link
                exact-active-class="layout-menu-on"
                tag="li"
                :to="{ name: 'Input' }"
                class="layout-menu-item"
              >Input 输入框</router-link>
              <router-link
                exact-active-class="layout-menu-on"
                tag="li"
                :to="{ name: 'Radio' }"
                class="layout-menu-item"
              >Radio 单选</router-link>
            </ul>
            <div class="layout-menu-title" title="数据展示">数据展示</div>
            <ul class="layout-menu-list">
              <router-link
                exact-active-class="layout-menu-on"
                tag="li"
                :to="{ name: 'Badge' }"
                class="layout-menu-item"
              >Badge 徽标数</router-link>
            </ul>
            <div class="layout-menu-title" title="反馈">反馈</div>
            <ul class="layout-menu-list">
              <router-link
                exact-active-class="layout-menu-on"
                tag="li"
                :to="{ name: 'Loadbar' }"
                class="layout-menu-item"
              >Loadbar 加载进度</router-link>
            </ul>
          </section>
        </WCol>
        <WCol :span="20">
          <article class="layout-cantainer">
            <router-view/>
          </article>
        </WCol>
      </WRow>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';
import WAffix, { ChangeEntity } from '@/components/affix/Affix.vue';

interface MenuStyleEntity {
  height?: string;
}

@Component({
  components: {
    WRow,
    WCol,
    WAffix,
  },
})
export default class LayoutView extends Vue {
  menuStyle: MenuStyleEntity = {};

  affixChange({ affixStatus }: ChangeEntity) {
    if (affixStatus) {
      this.menuStyle = {
        height: `${window.innerHeight}px`,
      };
    } else {
      this.menuStyle = {};
    }
  }
}
</script>

<style lang="scss">
@import './assets/style/layout.scss';
</style>
