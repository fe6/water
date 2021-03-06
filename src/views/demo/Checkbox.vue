<!-- @format -->

<template>
  <div>
    <h1>{{ Checkbox }}</h1>
    <p>可以一次选择多个。</p>
    <h2>何时使用</h2>
    <ul>
      <li>在一组可选项中进行多项选择时；</li>
      <li>
        单独使用可以表示两种状态之间的切换，和 <code>switch</code> 类似。
        区别在于切换 <code>switch</code> 会直接触发状态改变，而
        <code>checkbox</code> 一般用于状态标记，需要和提交操作配合。
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
          :tem-code="indeterminate.code"
          :js-code="indeterminate.js"
          :title="indeterminate.title"
          :desc="indeterminate.desc"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Checkbox API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Checkbox Method</h2>
    <MethodTable :data="methods"></MethodTable>
    <h2>CheckboxGroup API</h2>
    <ApiTable :data="groupProps"></ApiTable>
    <h2>CheckboxGroup Method</h2>
    <MethodTable :data="groupMethods"></MethodTable>
    <h2>Checkbox change 函数出发的参数 API</h2>
    <ChangeTable :data="changeCheckboxProps"></ChangeTable>
    <h2>CheckboxGroup change 函数出发的参数 API</h2>
    <ChangeTable :data="changeCheckboxGroupProps"></ChangeTable>
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
  import base from '@/views/code/checkbox/base';
  import disabled from '@/views/code/checkbox/disabled';
  import color from '@/views/code/checkbox/color';
  import indeterminate from '@/views/code/checkbox/indeterminate';
  import group from '@/views/code/checkbox/group';
  import {
    props,
    methods,
    groupProps,
    groupMethods,
    changeCheckboxProps,
    changeCheckboxGroupProps,
  } from '@/views/api/checkbox';
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
  export default class CheckboxView extends Vue {
    Checkbox: string = TITLE.Checkbox;

    base: ApiEntity = base;

    disabled: ApiEntity = disabled;

    color: ApiEntity = color;

    indeterminate: ApiEntity = indeterminate;

    group: ApiEntity = group;

    props: PropsEntity[] = props;

    changeCheckboxProps: ChangePropsEntity[] = changeCheckboxProps;

    changeCheckboxGroupProps: ChangePropsEntity[] = changeCheckboxGroupProps;

    methods: MethodsEntity[] = methods;

    groupProps: PropsEntity[] = groupProps;

    groupMethods: MethodsEntity[] = groupMethods;
  }
</script>
