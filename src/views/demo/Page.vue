<template>
  <div>
    <h1>{{ Page }}</h1>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="24">
        <WDemo
          :code="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
        ></WDemo>
        <WDemo
          :code="more.code"
          :render="more.render"
          :title="more.title"
          :desc="more.desc"
        ></WDemo>
        <WDemo
          :code="change.code"
          :render="change.render"
          :title="change.title"
          :desc="change.desc"
          :data="{ value: changeSize }"
          @changeHandle="changeFn"
        ></WDemo>
        <WDemo
          :code="jump.code"
          :render="jump.render"
          :title="jump.title"
          :desc="jump.desc"
          :data="{ value: jumpNumber }"
          @changeHandle="changeFn"
        ></WDemo>
        <WDemo
          :code="size.code"
          :render="size.render"
          :title="size.title"
          :desc="size.desc"
        ></WDemo>
        <WDemo
          :code="total.code"
          :render="total.render"
          :title="total.title"
          :desc="total.desc"
        ></WDemo>
        <WDemo
          :code="simple.code"
          :render="simple.render"
          :title="simple.title"
          :desc="simple.desc"
        ></WDemo>
      </WCol>
    </WRow>
    <h2>Page API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Page Method</h2>
    <MethodTable :data="methods"></MethodTable>
    <h2>PageJumpGroup API</h2>
    <ApiTable :data="pageJumpProps"></ApiTable>
    <h2>PageJumpGroup Method</h2>
    <MethodTable :data="pageJumpMethods"></MethodTable>
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
import base from '@/views/code/page/base';
import more from '@/views/code/page/more';
import change from '@/views/code/page/change';
import jump from '@/views/code/page/jump';
import size from '@/views/code/page/size';
import total from '@/views/code/page/total';
import simple from '@/views/code/page/simple';
import {
  props,
  methods,
  pageJumpProps,
  pageJumpMethods,
} from '@/views/api/page';
import { PropsEntity, MethodsEntity } from '@/views/entity/apientity';
import { TITLE } from '@/views/common/constant';

interface ChangeParamsEntity {
  attr: string;
  value: string;
}

@Component({
  components: {
    ApiTable,
    MethodTable,
    WRow,
    WCol,
    WDemo,
  },
})
export default class PageView extends Vue {
  Page: string = TITLE.Page;

  base: ApiEntity = base;

  more: ApiEntity = more;

  change: ApiEntity = change;

  changeSize: number = 10;

  jump: ApiEntity = jump;

  jumpNumber: number = 1;

  size: ApiEntity = size;

  total: ApiEntity = total;

  simple: ApiEntity = simple;

  props: PropsEntity[] = props;

  methods: MethodsEntity[] = methods;

  pageJumpProps: PropsEntity[] = pageJumpProps;

  pageJumpMethods: MethodsEntity[] = pageJumpMethods;

  changeFn({ attr, value }: ChangeParamsEntity) {
    (this as any)[attr] = value;
  }
}
</script>

<style lang="scss">
.page {
  &-inline {
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
