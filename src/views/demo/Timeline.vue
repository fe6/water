<!-- @format -->

<template>
  <div>
    <h1>{{ Timeline }}</h1>
    <p>垂直展示的时间流信息。 <code>0.19.0</code> 新增。</p>
    <h2>何时使用</h2>
    <ul>
      <li>
        需要有一条时间轴进行视觉上的串联时。
      </li>
    </ul>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <OnlineReview
          :tem-code="base.code"
          :js-code="base.js"
          :title="base.title"
          :desc="base.desc"
          iframe-height="300px"
        ></OnlineReview>
        <OnlineReview
          :tem-code="alternate.code"
          :js-code="alternate.js"
          :title="alternate.title"
          :desc="alternate.desc"
          iframe-height="340px"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :tem-code="color.code"
          :js-code="color.js"
          :title="color.title"
          :desc="color.desc"
          iframe-height="300px"
        ></OnlineReview>
        <OnlineReview
          :tem-code="right.code"
          :js-code="right.js"
          :title="right.title"
          :desc="right.desc"
          iframe-height="340px"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Timeline API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Timeline Item API</h2>
    <ApiTable :data="itemProps"></ApiTable>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ApiTable from '@/views/components/ApiTable.vue';
  import WRow from '@/components/grid/src/Row.vue';
  import WCol from '@/components/grid/src/Col.vue';
  import OnlineReview from '@/views/components/OnlineReview.vue';
  import { ApiEntity } from '@/views/entity/demoentity';
  import base from '@/views/code/timeline/base';
  import color from '@/views/code/timeline/color';
  import alternate from '@/views/code/timeline/alternate';
  import right from '@/views/code/timeline/right';
  import { props, itemProps } from '@/views/api/timeline';
  import { PropsEntity } from '@/views/entity/apientity';
  import { TITLE } from '@/views/common/constant';

  interface ParamsEntity {
    attr: string;
    value: string;
    ctx?: any;
  }

  @Component({
    components: {
      WRow,
      WCol,
      ApiTable,
      OnlineReview,
    },
  })
  export default class TimelineView extends Vue {
    Timeline: string = TITLE.Timeline;

    base: ApiEntity = base;

    color: ApiEntity = color;

    alternate: ApiEntity = alternate;

    right: ApiEntity = right;

    props: PropsEntity[] = props;

    itemProps: PropsEntity[] = itemProps;
  }
</script>
