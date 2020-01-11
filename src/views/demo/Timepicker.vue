<!-- @format -->

<template>
  <div>
    <h1>{{ Timepicker }}</h1>
    <p>输入或选择时间的控件。 <code>0.20.0</code> 新增。</p>
    <h2>何时使用</h2>
    <p>当用户需要输入一个时间，可以点击标准输入框，弹出日期面板进行选择。</p>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <OnlineReview
          :tem-code="base.code"
          :js-code="base.js"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
          iframe-height="400px"
        ></OnlineReview>
        <OnlineReview
          :tem-code="disabledRender.code"
          :js-code="disabledRender.js"
          :render="disabledRender.render"
          :title="disabledRender.title"
          :desc="disabledRender.desc"
          iframe-height="400px"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :tem-code="size.code"
          :js-code="size.js"
          :render="size.render"
          :title="size.title"
          :desc="size.desc"
          iframe-height="400px"
        ></OnlineReview>
        <OnlineReview
          :tem-code="format.code"
          :js-code="format.js"
          :render="format.render"
          :title="format.title"
          :desc="format.desc"
          iframe-height="400px"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>TimePicker API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Change 方法返回的参数 API</h2>
    <ChangeTable :data="changeProps"></ChangeTable>
    <h2>Timepicker Method</h2>
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
  import base from '@/views/code/timepicker/base';
  import size from '@/views/code/timepicker/size';
  import disabledRender from '@/views/code/timepicker/disabledrender';
  import format from '@/views/code/timepicker/format';
  import { props, methods, changeProps } from '@/views/api/timepicker';
  import {
    PropsEntity,
    ChangePropsEntity,
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
  export default class TimepickerView extends Vue {
    Timepicker: string = TITLE.Timepicker;

    base: ApiEntity = base;

    size: ApiEntity = size;

    disabledRender: ApiEntity = disabledRender;

    format: ApiEntity = format;

    props: PropsEntity[] = props;

    changeProps: ChangePropsEntity[] = changeProps;

    methods: MethodsEntity[] = methods;
  }
</script>

<style lang="scss">
  @import '~assets/style/button.scss';
</style>
