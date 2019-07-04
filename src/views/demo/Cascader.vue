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
        <WDemo
          :code="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
          :data="{ value: baseValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="diy.code"
          :render="diy.render"
          :title="diy.title"
          :desc="diy.desc"
          :data="{ value: diyValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="disabled.code"
          :render="disabled.render"
          :title="disabled.title"
          :desc="disabled.desc"
          :data="{ value: disabledValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="render.code"
          :render="render.render"
          :title="render.title"
          :desc="render.desc"
          :data="{ value: renderValue }"
          @changeHandle="change"
        ></WDemo>
      </WCol>
      <WCol :span="12">
        <WDemo
          :code="def.code"
          :render="def.render"
          :title="def.title"
          :desc="def.desc"
          :data="{ value: defValue }"
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
          :code="search.code"
          :render="search.render"
          :title="search.title"
          :desc="search.desc"
          :data="{ value: searchValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="loading.code"
          :render="loading.render"
          :title="loading.title"
          :desc="loading.desc"
          :data="{
            value: loadingValue,
            options: loadingOptions,
            loading: loadingStatus,
            beforeHandle: beforeHandle,
          }"
          @changeHandle="loadingChange"
        ></WDemo>
      </WCol>
    </WRow>
    <h2>Cascader API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Cascader Method</h2>
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
import base from '@/views/code/cascader/base';
import def from '@/views/code/cascader/def';
import diy from '@/views/code/cascader/diy';
import disabled from '@/views/code/cascader/disabled';
import size from '@/views/code/cascader/size';
import render from '@/views/code/cascader/render';
import search from '@/views/code/cascader/search';
import loading from '@/views/code/cascader/loading';
import { props, methods } from '@/views/api/cascader';
import { PropsEntity, MethodsEntity } from '@/views/entity/apientity';
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
    MethodTable,
    WDemo,
  },
})
export default class CascaderView extends Vue {
  Cascader: string = TITLE.Cascader;

  base: ApiEntity = base;

  baseValue: string[] = [];

  def: ApiEntity = def;

  defValue: string[] = ['Jiangsu', 'Nanjing', 'West1 Lake'];

  diy: ApiEntity = diy;

  diyValue: string[] = [];

  disabled: ApiEntity = disabled;

  disabledValue: string[] = [];

  size: ApiEntity = size;

  sizeValue: string[] = [];

  render: ApiEntity = render;

  renderValue: string[] = [];

  search: ApiEntity = search;

  searchValue: string[] = [];

  loading: ApiEntity = loading;

  loadingStatus: boolean = false;

  loadingOptions: any[] = [];

  loadingValue: string[] = [];

  loadingGetDataTime: number = 1;

  props: PropsEntity[] = props;

  methods: MethodsEntity[] = methods;

  change({ attr, value }: ParamsEntity) {
    (this as any)[attr] = value;
  }

  loadingChange({ attr, value, ctx }: ParamsEntity) {
    const {
      options,
      item,
      index,
      ev,
    } = ctx;
    (this as any)[attr] = value;
    if (this.loadingGetDataTime) {
      this.loadingGetDataTime = 0;
      options.splice(index, 1, {
        ...item,
        loading: true,
      });
      setTimeout(() => {
        options.splice(index, 1, {
          ...item,
          loading: false,
          children: [
            {
              value: 'dongcheng',
              label: 'Dong Cheng',
              code: 300392,
            },
          ],
        });
      }, 2000);
      ev.stopPropagation();
    }
  }

  beforeHandle() {
    if (!this.loadingOptions.length) {
      this.loadingStatus = true;
      return new Promise((resolve) => {
        setTimeout(() => {
          this.loadingOptions.push({
            value: 'beijing',
            label: 'Beijing',
            code: 300392,
          });
          this.loadingOptions.push({
            value: 'nanjing',
            label: 'Nanjing',
            code: 300392,
          });
          this.loadingStatus = false;
          resolve();
        }, 2000);
      });
    }
    return new Promise((resolve) => {
      resolve();
    });
  }
}
</script>
