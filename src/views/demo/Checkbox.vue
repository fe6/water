<template>
  <div>
    <h1>{{ Checkbox }}</h1>
    <p>可以一次选择多个。</p>
    <h2>何时使用</h2>
    <ul>
      <li>在一组可选项中进行多项选择时；</li>
      <li>
        单独使用可以表示两种状态之间的切换，和 <code>switch</code> 类似。
        区别在于切换 <code>switch</code> 会直接触发状态改变，而 <code>checkbox</code> 一般用于状态标记，需要和提交操作配合。
      </li>
    </ul>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <WDemo
          :code="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
        ></WDemo>
        <WDemo
          :code="color.code"
          :render="color.render"
          :title="color.title"
          :desc="color.desc"
        ></WDemo>
        <WDemo
          :code="group.code"
          :render="group.render"
          :title="group.title"
          :desc="group.desc"
        ></WDemo>
      </WCol>
      <WCol :span="12">
        <WDemo
          :code="disabled.code"
          :render="disabled.render"
          :title="disabled.title"
          :desc="disabled.desc"
        ></WDemo>
        <WDemo
          :code="indeterminate.code"
          :render="indeterminate.render"
          :title="indeterminate.title"
          :desc="indeterminate.desc"
        ></WDemo>
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
} from '@/views/api/checkbox';
import { PropsEntity, MethodsEntity } from '@/views/entity/apientity';
import { TITLE } from '@/views/common/constant';

@Component({
  components: {
    WRow,
    WCol,
    ApiTable,
    MethodTable,
    WDemo,
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

  methods: MethodsEntity[] = methods;

  groupProps: PropsEntity[] = groupProps;

  groupMethods: MethodsEntity[] = groupMethods;
}
</script>
