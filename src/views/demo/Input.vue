<!-- @format -->

<template>
  <div>
    <h1>{{ Input }}</h1>
    <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
    <h2>何时使用</h2>
    <ul>
      <li>需要用户输入表单域内容时。</li>
      <li>提供组合型输入框，带搜索的输入框，还可以进行大小选择。</li>
    </ul>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <OnlineReview
          :tem-code="base.code"
          :title="base.title"
          :desc="base.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="icon.code"
          :title="icon.title"
          :desc="icon.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="disabled.code"
          :title="disabled.title"
          :desc="disabled.desc"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :tem-code="size.code"
          :title="size.title"
          :desc="size.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="error.code"
          :js-code="error.js"
          :title="error.title"
          :desc="error.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="limit.code"
          :js-code="limit.js"
          :title="limit.title"
          :desc="limit.desc"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Input API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Input Method</h2>
    <MethodTable :data="methods"></MethodTable>
    <h2>error 函数返回的参数</h2>
    <ChangeTable :data="errorProps"></ChangeTable>
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
  import base from '@/views/code/input/base';
  import size from '@/views/code/input/size';
  import icon from '@/views/code/input/icon';
  import error from '@/views/code/input/error';
  import disabled from '@/views/code/input/disabled';
  import limit from '@/views/code/input/limit';
  import { props, changeProps, errorProps, methods } from '@/views/api/input';
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
  export default class InputView extends Vue {
    Input: string = TITLE.Input;

    base: ApiEntity = base;

    size: ApiEntity = size;

    icon: ApiEntity = icon;

    error: ApiEntity = error;

    disabled: ApiEntity = disabled;

    limit: ApiEntity = limit;

    props: PropsEntity[] = props;

    errorProps: ChangePropsEntity[] = errorProps;

    changeProps: ChangePropsEntity[] = changeProps;

    methods: MethodsEntity[] = methods;
  }
</script>
