<!-- @format -->

<template>
  <div>
    <h1>{{ Statistic }}</h1>
    <p>展示统计数值。 <code>0.20.0</code> 新增。</p>
    <h2>何时使用</h2>
    <ul>
      <li>当需要突出某个或某组数字时。</li>
      <li>当需要展示带描述的统计类数据时使用。</li>
    </ul>
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
        <OnlineReview
          :tem-code="valuestyle.code"
          :js-code="valuestyle.js"
          :render="valuestyle.render"
          :title="valuestyle.title"
          :desc="valuestyle.desc"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :tem-code="unit.code"
          :js-code="unit.js"
          :render="unit.render"
          :title="unit.title"
          :desc="unit.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="slot.code"
          :js-code="slot.js"
          :render="slot.render"
          :title="slot.title"
          :desc="slot.desc"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Statistic API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Slot Scope 参数</h2>
    <MethodTable :data="slotMethods"></MethodTable>
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
  import base from '@/views/code/statistic/base';
  import unit from '@/views/code/statistic/unit';
  import valuestyle from '@/views/code/statistic/valuestyle';
  import slot from '@/views/code/statistic/slot';
  import { props, methods, slotMethods } from '@/views/api/statistic';
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
  export default class StatisticView extends Vue {
    Statistic: string = TITLE.Statistic;

    base: ApiEntity = base;

    unit: ApiEntity = unit;

    valuestyle: ApiEntity = valuestyle;

    slot: ApiEntity = slot;

    props: PropsEntity[] = props;

    slotMethods: SlotMethodsEntity[] = slotMethods;

    methods: MethodsEntity[] = methods;
  }
</script>

<style lang="scss">
  @import '~assets/style/button.scss';
</style>
