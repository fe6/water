<template>
  <div>
    <h1>{{ DatePicker }}</h1>
    <p>按钮用于开始一个即时操作。 <code>0.17.0</code> 新增。</p>
    <h2>何时使用</h2>
    <p>
      标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
    </p>
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
          :tem-code="disabledrender.code"
          :js-code="disabledrender.js"
          :render="disabledrender.render"
          :title="disabledrender.title"
          :desc="disabledrender.desc"
          iframe-height="400px"
        ></OnlineReview>
        <OnlineReview
          :tem-code="diy.code"
          :js-code="diy.js"
          :render="diy.render"
          :title="diy.title"
          :desc="diy.desc"
          iframe-height="400px"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :tem-code="format.code"
          :js-code="format.js"
          :render="format.render"
          :title="format.title"
          :desc="format.desc"
          iframe-height="400px"
        ></OnlineReview>
        <OnlineReview
          :tem-code="size.code"
          :js-code="size.js"
          :render="size.render"
          :title="size.title"
          :desc="size.desc"
          iframe-height="400px"
        ></OnlineReview>
        <OnlineReview
          :tem-code="slot.code"
          :js-code="slot.js"
          :render="slot.render"
          :title="slot.title"
          :desc="slot.desc"
          iframe-height="400px"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>DatePicker API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Change 方法返回的参数 API</h2>
    <ChangeTable :data="changeProps"></ChangeTable>
    <h2>DatePicker Method</h2>
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
  import base from '@/views/code/datepicker/base';
  import format from '@/views/code/datepicker/format';
  import size from '@/views/code/datepicker/size';
  import disabledrender from '@/views/code/datepicker/disabledrender';
  import diy from '@/views/code/datepicker/diy';
  import slot from '@/views/code/datepicker/slot';
  import { props, methods, changeProps } from '@/views/api/datepicker';
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
  export default class DatePickerView extends Vue {
    DatePicker: string = TITLE.DatePicker;

    base: ApiEntity = base;

    format: ApiEntity = format;

    size: ApiEntity = size;

    disabledrender: ApiEntity = disabledrender;

    diy: ApiEntity = diy;

    slot: ApiEntity = slot;

    props: PropsEntity[] = props;

    changeProps: ChangePropsEntity[] = changeProps;

    methods: MethodsEntity[] = methods;
  }
</script>

<style lang="scss">
  @import '~assets/style/button.scss';
</style>
