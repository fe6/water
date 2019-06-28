<template>
  <div>
    <h1>{{ InputNumber }}</h1>
    <p>通过鼠标或键盘，输入范围内的数值。 <code>0.6.0</code> 新增。</p>
    <h2>何时使用</h2>
    <p>当需要获取标准数值时。</p>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <WDemo
          :code="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
          :data="{ value: baseValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="size.code"
          :render="size.render"
          :title="size.title"
          :desc="size.desc"
          :data="{ value: sizeValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="formatter.code"
          :render="formatter.render"
          :title="formatter.title"
          :desc="formatter.desc"
          :data="{ value: formatterValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="animate.code"
          :render="animate.render"
          :title="animate.title"
          :desc="animate.desc"
          :data="{ value: animateValue }"
          @changeHandle="change"
        ></WDemo>
      </WCol>
      <WCol :span="12">
        <WDemo
          :code="decimal.code"
          :render="decimal.render"
          :title="decimal.title"
          :desc="decimal.desc"
          :data="{ value: decimalValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="disabled.code"
          :render="disabled.render"
          :title="disabled.title"
          :desc="disabled.desc"
          :data="{ value: 1 }"
        ></WDemo>
        <WDemo
          :code="readonly.code"
          :render="readonly.render"
          :title="readonly.title"
          :desc="readonly.desc"
          :data="{ value: 1 }"
        ></WDemo>
        <WDemo
          :code="precision.code"
          :render="precision.render"
          :title="precision.title"
          :desc="precision.desc"
          :data="{ value: precisionValue }"
        ></WDemo>
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
import WDemo from '@/views/components/Demo.vue';
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

interface ChangeParamsEntity {
  attr: string;
  value: string;
}

@Component({
  components: {
    WRow,
    WCol,
    ApiTable,
    MethodTable,
    WDemo,
  },
})
export default class InputNumberView extends Vue {
  InputNumber: string = TITLE.InputNumber;

  base: ApiEntity = base;

  baseValue: number = 1;

  decimal: ApiEntity = decimal;

  decimalValue: number | string = '';

  size: ApiEntity = size;

  sizeValue: number = 3;

  disabled: ApiEntity = disabled;

  formatter: ApiEntity = formatter;

  formatterValue: number = 12345678;

  readonly: ApiEntity = readonly;

  readonlyValue: number = 3;

  animate: ApiEntity = animate;

  animateValue: number = 30;

  precision: ApiEntity = precision;

  precisionValue: number = 15.123;

  props: PropsEntity[] = props;

  methods: MethodsEntity[] = methods;

  change({ attr, value }: ChangeParamsEntity) {
    (this as any)[attr] = value;
  }
}
</script>
