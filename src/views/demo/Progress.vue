<template>
  <div>
    <h1>{{ Progress }}</h1>
    <p>展示操作的当前进度。</p>
    <h2>何时使用</h2>
    <p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p>
    <ul>
      <li>
        当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；
      </li>
      <li>当需要显示一个操作完成的百分比时。</li>
    </ul>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <OnlineReview
          :tem-code="base.code"
          :js-code="base.js"
          :title="base.title"
          :desc="base.desc"
          iframe-height="220px"
        ></OnlineReview>
        <OnlineReview
          :tem-code="dashboard.code"
          :js-code="dashboard.js"
          :title="dashboard.title"
          :desc="dashboard.desc"
          iframe-height="260px"
        ></OnlineReview>
        <OnlineReview
          :tem-code="inside.code"
          :js-code="inside.js"
          :title="inside.title"
          :desc="inside.desc"
          iframe-height="220px"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :tem-code="circle.code"
          :js-code="circle.js"
          :title="circle.title"
          :desc="circle.desc"
          iframe-height="220px"
        ></OnlineReview>
        <OnlineReview
          :tem-code="color.code"
          :js-code="color.js"
          :title="color.title"
          :desc="color.desc"
          iframe-height="260px"
        ></OnlineReview>
        <OnlineReview
          :tem-code="strokeLinecap.code"
          :js-code="strokeLinecap.js"
          :title="strokeLinecap.title"
          :desc="strokeLinecap.desc"
          iframe-height="260px"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Progress API</h2>
    <ApiTable :data="props"></ApiTable>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ApiTable from '@/views/components/ApiTable.vue';
  import MethodTable from '@/views/components/MethodTable.vue';
  import WRow from '@/components/grid/src/Row.vue';
  import WCol from '@/components/grid/src/Col.vue';
  import OnlineReview from '@/views/components/OnlineReview.vue';
  import { ApiEntity } from '@/views/entity/demoentity';
  import base from '@/views/code/progress/base';
  import circle from '@/views/code/progress/circle';
  import dashboard from '@/views/code/progress/dashboard';
  import color from '@/views/code/progress/color';
  import inside from '@/views/code/progress/inside';
  import strokeLinecap from '@/views/code/progress/strokeLinecap';
  import { props } from '@/views/api/progress';
  import { PropsEntity } from '@/views/entity/apientity';
  import { TITLE } from '@/views/common/constant';

  @Component({
    components: {
      WRow,
      WCol,
      ApiTable,
      MethodTable,
      OnlineReview,
    },
  })
  export default class ProgressView extends Vue {
    Progress: string = TITLE.Progress;

    base: ApiEntity = base;

    circle: ApiEntity = circle;

    dashboard: ApiEntity = dashboard;

    color: ApiEntity = color;

    inside: ApiEntity = inside;

    strokeLinecap: ApiEntity = strokeLinecap;

    props: PropsEntity[] = props;
  }
</script>
