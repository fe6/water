<!-- @format -->

<template>
  <div>
    <h1>{{ Countdown }}</h1>
    <p>从一定时间开始计时。 <code>0.20.0</code> 新增。</p>
    <h2>何时使用</h2>
    <p>当需要突出某个或某组数字时。</p>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <OnlineReview
          :tem-code="base.code"
          :js-code="base.js"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :tem-code="million.code"
          :js-code="million.js"
          :render="million.render"
          :title="million.title"
          :desc="million.desc"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Countdown API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Countdown Method</h2>
    <MethodTable :data="methods"></MethodTable>
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
  import base from '@/views/code/countdown/base';
  import million from '@/views/code/countdown/million';
  import { props, methods } from '@/views/api/countdown';
  import { PropsEntity, MethodsEntity } from '@/views/entity/apientity';
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
  export default class CountdownView extends Vue {
    Countdown: string = TITLE.Countdown;

    base: ApiEntity = base;

    million: ApiEntity = million;

    props: PropsEntity[] = props;

    methods: MethodsEntity[] = methods;
  }
</script>

<style lang="scss">
  @import '~assets/style/button.scss';
</style>
