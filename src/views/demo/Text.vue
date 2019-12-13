<template>
  <div>
    <h1>{{ Text }}</h1>
    <p>文本的基本格式。 <code>0.20.0</code> 新增。</p>
    <h2>何时使用</h2>
    <p>当需要展示内容时使用，如文章/博客/日志的文本样式。</p>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <OnlineReview
          :tem-code="base.code"
          :js-code="base.js"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
          iframeHeight="300px"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :tem-code="type.code"
          :js-code="type.js"
          :render="type.render"
          :title="type.title"
          :desc="type.desc"
          iframeHeight="300px"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Text API</h2>
    <ApiTable :data="props"></ApiTable>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ApiTable from '@/views/components/ApiTable.vue';
  import ChangeTable from '@/views/components/ChangeTable.vue';
  import MethodTable from '@/views/components/MethodTable.vue';
  import WRow from '@/components/grid/src/Row.vue';
  import WCol from '@/components/grid/src/Col.vue';
  import WDemo from '@/views/components/Demo.vue';
  import OnlineReview from '@/views/components/OnlineReview.vue';
  import { ApiEntity } from '@/views/entity/demoentity';
  import base from '@/views/code/text/base';
  import type from '@/views/code/text/type';
  import { props } from '@/views/api/text';
  import {
    PropsEntity,
    SlotMethodsEntity,
    MethodsEntity,
  } from '@/views/entity/apientity';
  import { TITLE } from '@/views/common/constant';

  interface StatusEntity {
    ev: AnimationEvent;
    current: number;
  }

  @Component({
    components: {
      WRow,
      WCol,
      ApiTable,
      MethodTable,
      ChangeTable,
      WDemo,
      OnlineReview,
    },
  })
  export default class TextView extends Vue {
    Text: string = TITLE.Text;

    base: ApiEntity = base;

    type: ApiEntity = type;

    props: PropsEntity[] = props;
  }
</script>

<style lang="scss">
  @import '~assets/style/button.scss';
</style>
