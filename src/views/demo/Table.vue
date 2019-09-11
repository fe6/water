<template>
  <div>
    <h1>{{ Table }}</h1>
    <p>展示行列数据。<code>0.14.0</code> 新增。</p>
    <h2>何时使用</h2>
    <ul>
      <li>当有大量结构化的数据需要展现时；</li>
      <li>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</li>
    </ul>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="24">
        <OnlineReview
          :temCode="base.code"
          :jsCode="base.js"
          :title="base.title"
          :desc="base.desc"
          iframeHeight="300px"
        ></OnlineReview>
        <OnlineReview
          :temCode="checkbox.code"
          :jsCode="checkbox.js"
          :title="checkbox.title"
          :desc="checkbox.desc"
          iframeHeight="300px"
        ></OnlineReview>
        <OnlineReview
          :temCode="sort.code"
          :jsCode="sort.js"
          :title="sort.title"
          :desc="sort.desc"
          iframeHeight="300px"
        ></OnlineReview>
        <OnlineReview
          :temCode="size.code"
          :jsCode="size.js"
          :title="size.title"
          :desc="size.desc"
          iframeHeight="500px"
        ></OnlineReview>
        <OnlineReview
          :temCode="border.code"
          :jsCode="border.js"
          :title="border.title"
          :desc="border.desc"
          iframeHeight="360px"
        ></OnlineReview>
        <OnlineReview
          :temCode="extend.code"
          :jsCode="extend.js"
          :title="extend.title"
          :desc="extend.desc"
          iframeHeight="400px"
        ></OnlineReview>
        <OnlineReview
          :temCode="merge.code"
          :jsCode="merge.js"
          :title="merge.title"
          :desc="merge.desc"
          iframeHeight="360px"
        ></OnlineReview>
        <OnlineReview
          :temCode="fix.code"
          :jsCode="fix.js"
          :title="fix.title"
          :desc="fix.desc"
          iframeHeight="360px"
        ></OnlineReview>
        <OnlineReview
          :temCode="group.code"
          :jsCode="group.js"
          :title="group.title"
          :desc="group.desc"
          iframeHeight="440px"
        ></OnlineReview>
        <OnlineReview
          :temCode="empty.code"
          :jsCode="empty.js"
          :title="empty.title"
          :desc="empty.desc"
          iframeHeight="280px"
        ></OnlineReview>
        <OnlineReview
          :temCode="loading.code"
          :jsCode="loading.js"
          :title="loading.title"
          :desc="loading.desc"
          iframeHeight="340px"
        ></OnlineReview>
        <OnlineReview
          :temCode="slot.code"
          :jsCode="slot.js"
          :title="slot.title"
          :desc="slot.desc"
          iframeHeight="340px"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Table API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Col API</h2>
    <p>列描述数据对象，是 col 属性中的一项的 API。</p>
    <ApiTable :data="colProps"></ApiTable>
    <h2>Table Method</h2>
    <MethodTable :data="methods"></MethodTable>
    <!-- <h3>size</h3>
    <w-table
      :col="sizeCol"
      :options="sizeOptions"
      :scroll="{ x: '130%', y: 300 }"
      border
      size="small"
    ></w-table>
    <h3>group</h3>
    <w-table
      :col="groupCol"
      :options="groupOptions"
      :scroll="{ x: '130%', y: 300 }"
      border
    ></w-table>
    <h3>slot</h3>
    <w-table :col="slotCol" :options="slotOptions">
      <template #name="{col}">
        <strong>111</strong>
      </template>
      <template #action="{optIndex}">
        <strong>{{optIndex}}</strong>
      </template>
    </w-table>
    <h3>empty</h3>
    <w-table :col="emptyCol" :options="emptyOptions"></w-table>
    <h3>fix</h3>
    <w-table
      :col="fixCol"
      :options="fixOptions"
      :scroll="{ x: '130%', y: 240 }"
    ></w-table>
    <h3>border</h3>
    <w-table
      :col="borderCol"
      border
      :options="borderOptions"
      :header="header"
      :footer="footer"
    ></w-table>
    <h3>sort</h3>
    <button @click="clearSort">清除排序</button>
    <w-table :col="showSortCol" :options="sortOptions" showSort></w-table>
    <br>
    <w-table ref="sortTable" :col="sortCol" :options="sortOptions"></w-table>
    <h3>extend</h3>
    <w-table :col="extendCol" :options="extendOptions"></w-table>
    <h3>checkbox</h3>
    <w-table :col="checkboxCol" :options="checkboxOptions"></w-table>
    <h3>base</h3>
    <w-table :col="baseCol" :options="baseOptions"></w-table>
    <h3>loading</h3>
    <button @click="loadingStatus = !loadingStatus">{{loadingStatus ? '加载中' : '我要加载'}}</button>
    <w-table
      :col="loadingCol"
      :options="loadingOptions"
      :loading="loadingStatus"
    ></w-table> -->
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
import base from '@/views/code/table/base';
import checkbox from '@/views/code/table/checkbox';
import sort from '@/views/code/table/sort';
import size from '@/views/code/table/size';
import border from '@/views/code/table/border';
import extend from '@/views/code/table/extend';
import merge from '@/views/code/table/merge';
import fix from '@/views/code/table/fix';
import group from '@/views/code/table/group';
import empty from '@/views/code/table/empty';
import loading from '@/views/code/table/loading';
import slot from '@/views/code/table/slot';
import { props, colProps, methods } from '@/views/api/table';
import { PropsEntity, MethodsEntity } from '@/views/entity/apientity';
import { TITLE } from '@/views/common/constant';
import WTable from '@/components/table/Table.vue';
import WCheckbox from '@/components/checkbox/Checkbox.vue';
import { baseCol, baseOptions } from '@/views/code/table/options/base';
import { checkboxCol, checkboxOptions } from '@/views/code/table/options/checkbox';
import { extendCol, extendOptions } from '@/views/code/table/options/extend';
import { showSortCol, sortCol, sortOptions } from '@/views/code/table/options/sort';
import {
  borderCol,
  borderOptions,
  header,
  footer,
} from '@/views/code/table/options/border';
import { fixCol, fixOptions } from '@/views/code/table/options/fix';
import { emptyCol, emptyOptions } from '@/views/code/table/options/empty';
import { slotCol, slotOptions } from '@/views/code/table/options/slot';
import { mergeCol, mergeOptions } from '@/views/code/table/options/merge';
import { groupCol, groupOptions } from '@/views/code/table/options/group';
import { sizeCol, sizeOptions } from '@/views/code/table/options/size';
import { loadingCol, loadingOptions } from '@/views/code/table/options/loading';

@Component({
  components: {
    WRow,
    WCol,
    ApiTable,
    MethodTable,
    OnlineReview,
    WTable,
    WCheckbox,
  },
})
export default class TableView extends Vue {
  Table: string = TITLE.Table;

  base: ApiEntity = base;

  checkbox: ApiEntity = checkbox;

  sort: ApiEntity = sort;

  size: ApiEntity = size;

  border: ApiEntity = border;

  extend: ApiEntity = extend;

  merge: ApiEntity = merge;

  fix: ApiEntity = fix;

  group: ApiEntity = group;

  empty: ApiEntity = empty;

  loading: ApiEntity = loading;

  slot: ApiEntity = slot;

  props: PropsEntity[] = props;

  colProps: PropsEntity[] = colProps;

  methods: MethodsEntity[] = methods;

  baseCol: any = baseCol;

  baseOptions: any = baseOptions;

  checkboxCol: any = checkboxCol;

  checkboxOptions: any = checkboxOptions;

  extendCol: any = extendCol;

  extendOptions: any = extendOptions;

  sortCol: any = sortCol;

  showSortCol: any = showSortCol;

  sortOptions: any = sortOptions;

  borderCol: any = borderCol;

  borderOptions: any = borderOptions;

  header: Function = header;

  footer: Function = footer;

  fixCol: any = fixCol;

  fixOptions: any = fixOptions;

  emptyCol: any = emptyCol;

  emptyOptions: any = emptyOptions;

  slotCol: any = slotCol;

  slotOptions: any = slotOptions;

  mergeCol: any = mergeCol;

  mergeOptions: any = mergeOptions;

  groupCol: any = groupCol;

  groupOptions: any = groupOptions;

  sizeCol: any = sizeCol;

  sizeOptions: any = sizeOptions;

  loadingCol: any = loadingCol;

  loadingOptions: any = loadingOptions;

  loadingStatus: boolean = true;

  clearSort() {
    (this.$refs.sortTable as any).clearSort();
  }
}
</script>
