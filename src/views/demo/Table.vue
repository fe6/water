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
    <h3>size</h3>
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
    <h3>merge</h3>
    <w-table
      :col="mergeCol"
      :options="mergeOptions"
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
      :scroll="{ x: 2200, y: 240 }"
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
    ></w-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApiTable from '@/views/components/ApiTable.vue';
import MethodTable from '@/views/components/MethodTable.vue';
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';
import OnlineReview from '@/views/components/OnlineReview.vue';
import { TITLE } from '@/views/common/constant';
import WTable from '@/components/table/Table.vue';
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
  },
})
export default class TableView extends Vue {
  Table: string = TITLE.Table;

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
