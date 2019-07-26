<template>
  <div>
    <h1>{{ Breadcrumb }}</h1>
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
        <OnlineReview
          :temCode="base.code"
          :title="base.title"
          :desc="base.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="open.code"
          :title="open.title"
          :desc="open.desc"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :temCode="icon.code"
          :title="icon.title"
          :desc="icon.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="separator.code"
          :title="separator.title"
          :desc="separator.desc"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Breadcrumb API</h2>
    <ApiTable :data="props"></ApiTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApiTable from '@/views/components/ApiTable.vue';
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';
import OnlineReview from '@/views/components/OnlineReview.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import base from '@/views/code/breadcrumb/base';
import icon from '@/views/code/breadcrumb/icon';
import open from '@/views/code/breadcrumb/open';
import separator from '@/views/code/breadcrumb/separator';
import { props } from '@/views/api/breadcrumb';
import { PropsEntity } from '@/views/entity/apientity';
import { TITLE } from '@/views/common/constant';

@Component({
  components: {
    ApiTable,
    WRow,
    WCol,
    OnlineReview,
  },
})
export default class BreadcrumbView extends Vue {
  Breadcrumb: string = TITLE.Breadcrumb;

  base: ApiEntity = base;

  icon: ApiEntity = icon;

  open: ApiEntity = open;

  separator: ApiEntity = separator;

  props: PropsEntity[] = props;
}
</script>

<style lang="scss">
@import '~assets/style/breadcrumb.scss';
</style>
