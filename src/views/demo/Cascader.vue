<template>
  <div>
    <h1>{{ Cascader }}</h1>
    <p>级联选择框。 <code>0.7.0</code> 新增。</p>
    <h2>何时使用</h2>
    <ul>
      <li>需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。</li>
      <li>从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。</li>
      <li>比起 <code>Select</code> 组件，可以在同一个浮层中完成选择，有较好的体验。</li>
    </ul>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <OnlineReview
          :temCode="base.code"
          :jsCode="base.js"
          :title="base.title"
          :desc="base.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="diy.code"
          :jsCode="diy.js"
          :title="diy.title"
          :desc="diy.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="disabled.code"
          :jsCode="disabled.js"
          :title="disabled.title"
          :desc="disabled.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="render.code"
          :jsCode="render.js"
          :title="render.title"
          :desc="render.desc"
          iframeHeight="200px"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :temCode="def.code"
          :jsCode="def.js"
          :title="def.title"
          :desc="def.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="size.code"
          :jsCode="size.js"
          :title="size.title"
          :desc="size.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="search.code"
          :jsCode="search.js"
          :title="search.title"
          :desc="search.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="loading.code"
          :jsCode="loading.js"
          :title="loading.title"
          :desc="loading.desc"
          iframeHeight="200px"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Cascader API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>searchRender 函数返回的参数 API</h2>
    <ChangeTable :data="searchRenderProps"></ChangeTable>
    <h2>displayRender 函数返回的参数 API</h2>
    <ChangeTable :data="displayRenderProps"></ChangeTable>
    <h2>change 函数返回的参数 API</h2>
    <ChangeTable :data="changeProps"></ChangeTable>
    <h2>Cascader Method</h2>
    <MethodTable :data="methods"></MethodTable>
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
import base from '@/views/code/cascader/base';
import def from '@/views/code/cascader/def';
import diy from '@/views/code/cascader/diy';
import disabled from '@/views/code/cascader/disabled';
import size from '@/views/code/cascader/size';
import render from '@/views/code/cascader/render';
import search from '@/views/code/cascader/search';
import loading from '@/views/code/cascader/loading';
import {
  props,
  methods,
  changeProps,
  searchRenderProps,
  displayRenderProps,
} from '@/views/api/cascader';
import { PropsEntity, ChangePropsEntity, MethodsEntity } from '@/views/entity/apientity';
import { TITLE } from '@/views/common/constant';

interface ParamsEntity {
  attr: string;
  value: string;
  ctx?: any;
}

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
export default class CascaderView extends Vue {
  Cascader: string = TITLE.Cascader;

  base: ApiEntity = base;

  def: ApiEntity = def;

  diy: ApiEntity = diy;

  disabled: ApiEntity = disabled;

  size: ApiEntity = size;

  render: ApiEntity = render;

  search: ApiEntity = search;

  loading: ApiEntity = loading;

  props: PropsEntity[] = props;

  changeProps: ChangePropsEntity[] = changeProps;

  searchRenderProps: ChangePropsEntity[] = searchRenderProps;

  displayRenderProps: ChangePropsEntity[] = displayRenderProps;

  methods: MethodsEntity[] = methods;
}
</script>
