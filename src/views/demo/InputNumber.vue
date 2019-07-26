<template>
  <div>
    <h1>{{ InputNumber }}</h1>
    <p>通过鼠标或键盘，输入范围内的数值。 <code>0.6.0</code> 新增。</p>
    <h2>何时使用</h2>
    <p>当需要获取标准数值时。</p>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <OnlineReview
          :temCode="base.code"
          :jsCode="base.js"
          :title="base.title"
          :desc="base.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="size.code"
          :jsCode="size.js"
          :title="size.title"
          :desc="size.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="formatter.code"
          :jsCode="formatter.js"
          :title="formatter.title"
          :desc="formatter.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="animate.code"
          :title="animate.title"
          :desc="animate.desc"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :temCode="decimal.code"
          :jsCode="decimal.js"
          :title="decimal.title"
          :desc="decimal.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="disabled.code"
          :title="disabled.title"
          :desc="disabled.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="readonly.code"
          :jsCode="readonly.js"
          :title="readonly.title"
          :desc="readonly.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="precision.code"
          :jsCode="precision.js"
          :title="precision.title"
          :desc="precision.desc"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Input API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Input Method</h2>
    <MethodTable :data="methods"></MethodTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApiTable from '@/views/components/ApiTable.vue';
import MethodTable from '@/views/components/MethodTable.vue';
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';
import OnlineReview from '@/views/components/OnlineReview.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import base from '@/views/code/inputnumber/base';
import decimal from '@/views/code/inputnumber/decimal';
import size from '@/views/code/inputnumber/size';
import disabled from '@/views/code/inputnumber/disabled';
import formatter from '@/views/code/inputnumber/formatter';
import readonly from '@/views/code/inputnumber/readonly';
import animate from '@/views/code/inputnumber/animate';
import precision from '@/views/code/inputnumber/precision';
import { props, methods } from '@/views/api/inputnumber';
import { PropsEntity, MethodsEntity } from '@/views/entity/apientity';
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
export default class InputNumberView extends Vue {
  InputNumber: string = TITLE.InputNumber;

  base: ApiEntity = base;

  decimal: ApiEntity = decimal;

  size: ApiEntity = size;

  disabled: ApiEntity = disabled;

  formatter: ApiEntity = formatter;

  readonly: ApiEntity = readonly;

  animate: ApiEntity = animate;

  precision: ApiEntity = precision;

  props: PropsEntity[] = props;

  methods: MethodsEntity[] = methods;
}
</script>
