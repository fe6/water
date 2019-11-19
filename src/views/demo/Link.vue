<template>
  <div>
    <h1>{{ Link }}</h1>
    <p>全站通用的超级链接。</p>
    <h2>何时使用</h2>
    <p>用于跳转其他地方。</p>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <OnlineReview
          :tem-code="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="href.code"
          :render="href.render"
          :title="href.title"
          :desc="href.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="icon.code"
          :render="icon.render"
          :title="icon.title"
          :desc="icon.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="size.code"
          :render="size.render"
          :title="size.title"
          :desc="size.desc"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <WDemo
          :code="to.code"
          :render="to.render"
          :title="to.title"
          :desc="to.desc"
        ></WDemo>
        <OnlineReview
          :tem-code="target.code"
          :render="target.render"
          :title="target.title"
          :desc="target.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="loading.code"
          :render="loading.render"
          :title="loading.title"
          :desc="loading.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="disabled.code"
          :render="disabled.render"
          :title="disabled.title"
          :desc="disabled.desc"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Link API</h2>
    <ApiTable :data="props"></ApiTable>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ApiTable from '@/views/components/ApiTable.vue';
  import WRow from '@/components/grid/src/Row.vue';
  import WCol from '@/components/grid/src/Col.vue';
  import WDemo from '@/views/components/Demo.vue';
  import OnlineReview from '@/views/components/OnlineReview.vue';
  import { ApiEntity } from '@/views/entity/demoentity';
  import base from '@/views/code/link/base';
  import to from '@/views/code/link/to';
  import href from '@/views/code/link/href';
  import target from '@/views/code/link/target';
  import icon from '@/views/code/link/icon';
  import loading from '@/views/code/link/loading';
  import size from '@/views/code/link/size';
  import disabled from '@/views/code/link/disabled';
  import { props } from '@/views/api/link';
  import { PropsEntity } from '@/views/entity/apientity';
  import { TITLE } from '@/views/common/constant';

  @Component({
    components: {
      ApiTable,
      WRow,
      WCol,
      WDemo,
      OnlineReview,
    },
  })
  export default class LinkView extends Vue {
    Link: string = TITLE.Link;

    base: ApiEntity = base;

    to: ApiEntity = to;

    href: ApiEntity = href;

    target: ApiEntity = target;

    icon: ApiEntity = icon;

    loading: ApiEntity = loading;

    size: ApiEntity = size;

    disabled: ApiEntity = disabled;

    props: PropsEntity[] = props;
  }
</script>
