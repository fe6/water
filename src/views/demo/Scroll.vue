<!-- @format -->

<template>
  <div>
    <h1>{{ Scroll }}</h1>
    <p>
      滚动条在 Windows 环境下不太美观，这就是 Scroll 的由来。
      <code>0.18.0</code> 新增。
    </p>
    <h2>何时使用</h2>
    <p>
      需要美化 Windows 的滚动条，可开箱即用。目前只支持单方向滚动
    </p>
    <h2>代码演示</h2>
    <OnlineReview
      :tem-code="base.code"
      :js-code="base.js"
      :title="base.title"
      :desc="base.desc"
      iframe-height="300px"
    ></OnlineReview>
    <OnlineReview
      :tem-code="nesting.code"
      :js-code="nesting.js"
      :title="nesting.title"
      :desc="nesting.desc"
      iframe-height="300px"
    ></OnlineReview>
    <OnlineReview
      :tem-code="heng.code"
      :js-code="heng.js"
      :title="heng.title"
      :desc="heng.desc"
      iframe-height="300px"
    ></OnlineReview>
    <OnlineReview
      :tem-code="more.code"
      :js-code="more.js"
      :title="more.title"
      :desc="more.desc"
      iframe-height="300px"
    ></OnlineReview>
    <OnlineReview
      :tem-code="moreheng.code"
      :js-code="moreheng.js"
      :title="moreheng.title"
      :desc="moreheng.desc"
      iframe-height="300px"
    ></OnlineReview>
    <h2>Scroll API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Scroll Method</h2>
    <MethodTable :data="methods"></MethodTable>
    <h2>内置方法</h2>
    <MethodTable :data="innerMethods"></MethodTable>
    <h2>scrollTo API</h2>
    <ChangeTable :data="scrollToProps"></ChangeTable>
    <h2>scroll 和 pulling 函数返回的参数</h2>
    <ChangeTable :data="emitProps"></ChangeTable>
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
  import base from '@/views/code/scroll/base';
  import nesting from '@/views/code/scroll/nesting';
  import heng from '@/views/code/scroll/heng';
  import more from '@/views/code/scroll/more';
  import moreheng from '@/views/code/scroll/moreheng';
  import {
    props,
    methods,
    emitProps,
    innerMethods,
    scrollToProps,
  } from '@/views/api/scroll';
  import {
    PropsEntity,
    MethodsEntity,
    ChangePropsEntity,
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
  export default class ScrollView extends Vue {
    Scroll: string = TITLE.Scroll;

    base: ApiEntity = base;

    nesting: ApiEntity = nesting;

    heng: ApiEntity = heng;

    more: ApiEntity = more;

    moreheng: ApiEntity = moreheng;

    props: PropsEntity[] = props;

    methods: MethodsEntity[] = methods;

    emitProps: ChangePropsEntity[] = emitProps;

    innerMethods: MethodsEntity[] = innerMethods;

    scrollToProps: ChangePropsEntity[] = scrollToProps;
  }
</script>
