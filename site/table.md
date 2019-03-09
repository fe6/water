# Table 表格

##  基本

<br>
<br>

<div>
  <w-table :columns="baseColumns" :data="baseData"></w-table>
</div>
<br>
<br>

## 自定义表格内容

<br>
<br>

<div>
  <button class="inp-btn" @click="addDiy">添加</button>
  <br>
  <br>
  <w-table :columns="diyColumns" :data="diyData"></w-table>
</div>
<br>
<br>

##  可选择

<br>
<br>

<div>
  <button class="inp-btn" @click="selectRemove">删除</button>
  <button class="inp-btn" @click="selectReset">恢复</button>
  <br>
  <br>
  <w-table :rowSelection="{getCheckboxProps, change: selectChange}" :columns="checkboxColumns" :data="checkboxData"></w-table>
</div>
<br>
<br>

##  筛选和排序

<br>
<br>

<div>
  <w-table :loading="false" :columns="sortColumns" :data="sortData"></w-table>
</div>
<br>
<br>

## 远程加载数据

<br>
<br>

<div>
  <w-table :loading="ajaxLoading" :columns="ajaxColumns" :data="ajaxData" @change="ajaxChange"></w-table>
</div>
<br>
<br>

## 暂无数据

<br>
<br>

<div>
  <w-table :columns="emptyColumns"></w-table>
</div>
<br>
<br>

## 嵌套子表格并可展开

<br>
<br>

<div>
  <w-table :columns="expandColumns" :data="expandData" :expandedRowRender="expandedRowRender"></w-table>
</div>
<br>
<br>

## 表格行|列合并

<br>
<br>

<div>
  <w-table :columns="mergeColumns" :data="mergeData" bordered></w-table>
</div>
<br>
<br>

## 固定表头

<br>
<br>

<div>
  <w-table :columns="fixColumns" :data="fixData" :scroll="{ x: 1500, y: 240 }"></w-table>
</div>
<br>
<br>


## API

#### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|columns|表格列的配置描述，具体项见下表|Array|否|[]|
|data|数据数组|Array|否|[]|
|bordered|是否展示外边框和列边框|Boolean|否|无|
|loading|页面是否加载中|Boolean|否|无|
|rowSelection|表格行是否可选择，配置项|Object|否|无|
|scroll|设置横向或纵向滚动，也可用于指定滚动区域的宽和高，建议为 x 设置一个字符串|Object|否|无|
|emptyText|空数据时候的文案|String|否|未匹配到结果|
|expandedRowRender|额外的展开行|Function|否|无|

#### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|头部筛选改变的时候触发|`筛选项`, `筛选规则`, `Event 对象`|


<script>
import reqwest from 'reqwest';
import WTable from '../water/table/Table';
import {baseData, baseColumns} from './table/base';
import {diyData, diyColumns, diyDataDemo} from './table/diy';
import {checkboxData, checkboxColumns} from './table/checkbox';
import {sortData, sortColumns} from './table/sort';
import {ajaxColumns} from './table/ajax';
import {emptyColumns} from './table/empty';
import {expandData, expandColumns, expandChildColumns, expandChildData} from './table/expand';
import {mergeData, mergeColumns} from './table/merge';
import {fixData, fixColumns} from './table/fix';


export default {
  data() {
    return {
      baseData,
      baseColumns,
      diyData,
      diyColumns,
      checkboxData,
      checkboxColumns,
      sortData,
      sortColumns,
      ajaxData: [],
      ajaxLoading: false,
      ajaxColumns,
      emptyColumns,
      expandData,
      expandColumns,
      mergeData,
      mergeColumns,
      fixData,
      fixColumns,
      selectCheck: baseData.filter(data => data.name === 'Joe Black'),
    };
  },
  mounted() {
    this.ajaxInit();
  },
  methods: {
    getCheckboxProps:(record, type) => {
      if(type === 'tbody') {
        return {
          disabled: record.name === 'John Brown',
          on: record.name === 'Joe Black',
        };
      }
    },
    selectChange(ev, status, checked, item, itemIdx) {
      this.selectCheck = checked.slice();
    },
    selectRemove() {
      this.checkboxData = this.checkboxData.filter(checkItem => this.selectCheck.findIndex(selectCheckItem => selectCheckItem.name === checkItem.name) < 0);
    },
    selectReset() {
      this.checkboxData = checkboxData.slice();
    },
    ajaxChange(sorter, sortOrder, ev) {
      this.ajaxInit({
        ...sorter,
        sortOrder,
      });
    },
    ajaxInit(params = {}) {
      this.ajaxLoading = true;
      reqwest({
        url: 'https://randomuser.me/api',
        method: 'get',
        data: {
          results: 10,
          ...params,
        },
        type: 'json',
      }).then((data) => {
        this.ajaxLoading = false;
        this.ajaxData = data.results;
      });
    },
    expandedRowRender: (createElement, { dataItem, dataIdx, data}) => {
      return createElement(WTable, {
        style: {
          margin: '-16px -16px -17px',
        },
        props: {
          columns: expandChildColumns,
          data: expandChildData,
        },
      });
    },
    addDiy() {
      this.diyData.push(diyDataDemo);
      this.diyData[this.diyData.length - 1].key = this.diyData.length - 1;
    },
  },
  components: {
    WTable,
  },
};
</script>
<style lang="scss">
$font-path: '../water/font/';
@import '../water/icon/style/icon.scss';
@import '../water/tag/style/tag.scss';
@import '../water/form/input/input.scss';
@import '../water/popconfirm/style/popconfirm.scss';
@import '../water/table/style/table.scss';


.inp-btn {
  border: none;
  cursor: pointer;
  border: 1px solid #1996f9;
  color: #333;
  transition: color 0.4s, background 0.4s;

  &:focus {
    outline: none;
  }

  &.on {
    background: #1996f9;
    color: #fff;
  }
}
</style>
