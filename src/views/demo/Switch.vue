<template>
  <div>
    <h1>{{ Switch }}</h1>
    <p>开关选择器。 <code>0.4.0</code> 新增。</p>
    <h2>何时使用</h2>
    <ul>
      <li>需要表示开关状态/两种状态之间的切换时；</li>
      <li>
        和 <code>checkbox</code> 的区别是， 切换
        <code>switch</code> 会直接触发状态改变， 而
        <code>checkbox</code> 一般用于状态标记，需要和提交操作配合。
      </li>
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
          :tem-code="disabled.code"
          :title="disabled.title"
          :desc="disabled.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="size.code"
          :title="size.title"
          :desc="size.desc"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :tem-code="loading.code"
          :title="loading.title"
          :desc="loading.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="icon.code"
          :title="icon.title"
          :desc="icon.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="before.code"
          :js-code="before.js"
          :title="before.title"
          :desc="before.desc"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Switch API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Switch Method</h2>
    <MethodTable :data="methods"></MethodTable>
    <h2>change 函数返回的参数</h2>
    <ChangeTable :data="changeProps"></ChangeTable>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ApiTable from '@/views/components/ApiTable.vue';
  import ChangeTable from '@/views/components/ChangeTable.vue';
  import MethodTable from '@/views/components/MethodTable.vue';
  import WRow from '@/components/grid/Row.vue';
  import WCol from '@/components/grid/Col.vue';
  import OnlineReview from '@/views/components/OnlineReview.vue';
  import { ApiEntity } from '@/views/entity/demoentity';
  import base from '@/views/code/switch/base';
  import loading from '@/views/code/switch/loading';
  import disabled from '@/views/code/switch/disabled';
  import icon from '@/views/code/switch/icon';
  import size from '@/views/code/switch/size';
  import before from '@/views/code/switch/before';
  import { props, changeProps, methods } from '@/views/api/switch';
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
  export default class SwitchView extends Vue {
    Switch: string = TITLE.Switch;

    base: ApiEntity = base;

    loading: ApiEntity = loading;

    disabled: ApiEntity = disabled;

    icon: ApiEntity = icon;

    size: ApiEntity = size;

    before: ApiEntity = before;

    props: PropsEntity[] = props;

    changeProps: ChangePropsEntity[] = changeProps;

    methods: MethodsEntity[] = methods;
  }
</script>
