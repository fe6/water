<!-- @format -->

<template>
  <div>
    <h1>Radio</h1>
    <p>单选框。</p>
    <h2>何时使用</h2>
    <ul>
      <li>用于在多个备选项中选中单个状态。</li>
      <li>
        和 <code>Select</code> 的区别是，
        <code>Radio</code>
        所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。
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
        ></OnlineReview>
        <OnlineReview
          :tem-code="color.code"
          :js-code="color.js"
          :title="color.title"
          :desc="color.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="group.code"
          :js-code="group.js"
          :title="group.title"
          :desc="group.desc"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :tem-code="disabled.code"
          :js-code="disabled.js"
          :title="disabled.title"
          :desc="disabled.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="before.code"
          :js-code="before.js"
          :title="before.title"
          :desc="before.desc"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Radio API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Radio Method</h2>
    <MethodTable :data="methods"></MethodTable>
    <h2>RadioGroup API</h2>
    <ApiTable :data="groupProps"></ApiTable>
    <h2>RadioGroup Method</h2>
    <MethodTable :data="groupMethods"></MethodTable>
    <h2>before 函数返回的参数</h2>
    <ChangeTable :data="beforeProps"></ChangeTable>
    <h2>change 函数返回的参数</h2>
    <ChangeTable :data="changeProps"></ChangeTable>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ApiTable from '@/views/components/ApiTable.vue';
  import ChangeTable from '@/views/components/ChangeTable.vue';
  import MethodTable from '@/views/components/MethodTable.vue';
  import WRow from '@/components/grid/src/Row.vue';
  import WCol from '@/components/grid/src/Col.vue';
  import OnlineReview from '@/views/components/OnlineReview.vue';
  import { ApiEntity } from '@/views/entity/demoentity';
  import base from '@/views/code/radio/base';
  import disabled from '@/views/code/radio/disabled';
  import before from '@/views/code/radio/before';
  import color from '@/views/code/radio/color';
  import group from '@/views/code/radio/group';
  import {
    props,
    methods,
    groupProps,
    groupMethods,
    changeProps,
    beforeProps,
  } from '@/views/api/radio';
  import {
    PropsEntity,
    ChangePropsEntity,
    MethodsEntity,
  } from '@/views/entity/apientity';
  import { TITLE } from '@/views/common/constant';

  @Component({
    components: {
      WRow,
      WCol,
      ApiTable,
      ChangeTable,
      MethodTable,
      OnlineReview,
    },
  })
  export default class RadioView extends Vue {
    Radio: string = TITLE.Radio;

    base: ApiEntity = base;

    disabled: ApiEntity = disabled;

    color: ApiEntity = color;

    before: ApiEntity = before;

    group: ApiEntity = group;

    props: PropsEntity[] = props;

    methods: MethodsEntity[] = methods;

    groupProps: PropsEntity[] = groupProps;

    groupMethods: MethodsEntity[] = groupMethods;

    beforeProps: ChangePropsEntity[] = beforeProps;

    changeProps: ChangePropsEntity[] = changeProps;
  }
</script>
