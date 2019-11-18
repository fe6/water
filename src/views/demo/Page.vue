<template>
  <div>
    <h1>{{ Page }}</h1>
    <p>
      采用分页的形式分隔长列表，每次只加载一个页面。 <code>0.11.0</code> 新增。
    </p>
    <h2>何时使用</h2>
    <ul>
      <li>当加载 / 渲染所有数据将花费很多时间时。</li>
      <li>可切换页码浏览数据。</li>
    </ul>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="24">
        <OnlineReview
          :tem-code="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="more.code"
          :render="more.render"
          :title="more.title"
          :desc="more.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="change.code"
          :js-code="change.js"
          :title="change.title"
          :desc="change.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="jump.code"
          :js-code="jump.js"
          :title="jump.title"
          :desc="jump.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="size.code"
          :render="size.render"
          :title="size.title"
          :desc="size.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="total.code"
          :js-code="total.js"
          :title="total.title"
          :desc="total.desc"
        ></OnlineReview>
        <OnlineReview
          :tem-code="simple.code"
          :render="simple.render"
          :title="simple.title"
          :desc="simple.desc"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Page API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Page Method</h2>
    <MethodTable :data="methods"></MethodTable>
    <h2>PageJump API</h2>
    <ApiTable :data="pageJumpProps"></ApiTable>
    <h2>PageJump Method</h2>
    <MethodTable :data="pageJumpMethods"></MethodTable>
    <h2>change 函数返回的参数</h2>
    <ChangeTable :data="showTotalProps"></ChangeTable>
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
    showTotalProps,
  } from '@/views/api/page';
  import {
    PropsEntity,
    ChangePropsEntity,
    MethodsEntity,
  } from '@/views/entity/apientity';
  import { TITLE } from '@/views/common/constant';

  interface ChangeParamsEntity {
    attr: string;
    value: string;
  }

  @Component({
    components: {
      ApiTable,
      ChangeTable,
      MethodTable,
      WRow,
      WCol,
      OnlineReview,
    },
  })
  export default class PageView extends Vue {
    Page: string = TITLE.Page;

    base: ApiEntity = base;

    more: ApiEntity = more;

    change: ApiEntity = change;

    changeSize = 10;

    jump: ApiEntity = jump;

    jumpNumber = 1;

    size: ApiEntity = size;

    total: ApiEntity = total;

    simple: ApiEntity = simple;

    props: PropsEntity[] = props;

    methods: MethodsEntity[] = methods;

    pageJumpProps: PropsEntity[] = pageJumpProps;

    pageJumpMethods: MethodsEntity[] = pageJumpMethods;

    showTotalProps: ChangePropsEntity[] = showTotalProps;

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
