<template>
  <div>
    <h1>Breadcrumb 面包屑</h1>
    <p>显示当前页面在系统层级结构中的位置，并能向上返回。</p>
    <h2>何时使用</h2>
    <ul>
      <li>当系统拥有超过两级以上的层级结构时；</li>
      <li>当需要告知用户『你在哪里』时；</li>
      <li>当需要向上导航的功能时。</li>
    </ul>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <WDemo
          :code="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
        ></WDemo>
        <WDemo
          :code="open.code"
          :render="open.render"
          :title="open.title"
          :desc="open.desc"
        ></WDemo>
        <WDemo
          :code="separator.code"
          :render="separator.render"
          :title="separator.title"
          :desc="separator.desc"
        ></WDemo>
      </WCol>
      <WCol :span="12">
        <WDemo
          :code="href.code"
          :render="href.render"
          :title="href.title"
          :desc="href.desc"
        ></WDemo>
        <WDemo
          :code="icon.code"
          :render="icon.render"
          :title="icon.title"
          :desc="icon.desc"
        ></WDemo>
      </WCol>
    </WRow>
    <h2>API</h2>
    <ApiTable :data="props"></ApiTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApiTable from '@/views/components/ApiTable.vue';
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';
import WDemo from '@/views/components/Demo.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import base from '@/views/code/breadcrumb/base';
import icon from '@/views/code/breadcrumb/icon';
import open from '@/views/code/breadcrumb/open';
import href from '@/views/code/breadcrumb/href';
import separator from '@/views/code/breadcrumb/separator';
import { props } from '@/views/api/breadcrumb';
import { PropsEntity } from '@/views/entity/apientity';

@Component({
  components: {
    ApiTable,
    WRow,
    WCol,
    WDemo,
  },
})
export default class BreadcrumbView extends Vue {
  base: ApiEntity = base;

  icon: ApiEntity = icon;

  open: ApiEntity = open;

  href: ApiEntity = href;

  separator: ApiEntity = separator;

  props: PropsEntity[] = props;
}
</script>

<style lang="scss">
@import '~assets/style/breadcrumb.scss';
</style>
