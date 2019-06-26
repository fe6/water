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
        <WDemo
          :code="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
        ></WDemo>
        <WDemo
          :code="icon.code"
          :render="icon.render"
          :title="icon.title"
          :desc="icon.desc"
        ></WDemo>
        <WDemo
          :code="disabled.code"
          :render="disabled.render"
          :title="disabled.title"
          :desc="disabled.desc"
        ></WDemo>
      </WCol>
      <WCol :span="12">
        <WDemo
          :code="size.code"
          :render="size.render"
          :title="size.title"
          :desc="size.desc"
        ></WDemo>
        <WDemo
          :code="error.code"
          :render="error.render"
          :title="error.title"
          :desc="error.desc"
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
import base from '@/views/code/input/base';
import size from '@/views/code/input/size';
import icon from '@/views/code/input/icon';
import error from '@/views/code/input/error';
import disabled from '@/views/code/input/disabled';
import { props, methods } from '@/views/api/input';
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
export default class InputView extends Vue {
  Input: string = TITLE.Input;

  base: ApiEntity = base;

  size: ApiEntity = size;

  icon: ApiEntity = icon;

  error: ApiEntity = error;

  disabled: ApiEntity = disabled;

  props: PropsEntity[] = props;

  methods: MethodsEntity[] = methods;
}
</script>
