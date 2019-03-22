<template>
  <div :style="scrollStyle">
    <table class="w-table">
      <colgroup>
        <col key="colKeyRowSelection" :style="{ width: '62px', minWidth: '62px' }" v-if="!!hasOwn(rowSelection, 'getCheckboxProps') && typeof rowSelection.getCheckboxProps === 'function'">
        <col key="colKeyExpandedRowRender" :style="{ width: '62px', minWidth: '62px' }" v-if="!!expandedRowRender">
        <col :key="colKey" v-for="(col, colKey) in fixColumns" :style="{ width: col.width, minWidth: col.width }">
      </colgroup>
      <thead class="w-table-thead">
        <tr class="w-table-tr">
          <!-- 选择 -->
          <th class="w-table-th" :class="{
            ['w-table-bordered-th']: bordered,
          }" v-if="!!hasOwn(rowSelection, 'getCheckboxProps') && typeof rowSelection.getCheckboxProps === 'function'">
            <w-checkbox :disabled="checkbox.disabled" :indeterminate="(!!checked.length && checked.length < optional.length)" :change="checkbox.change" :mode="checkbox.mode" :prefix="checkbox.prefix" :on="!!checked.length && !!optional.length && checked.length === optional.length" @change="checkboxChange"></w-checkbox>
          </th>
          <!-- 展开 -->
          <th class="w-table-th" :class="{
            ['w-table-bordered-th']: bordered,
          }" v-if="!!expandedRowRender"></th>
          <!-- 普通 -->
          <th class="w-table-th" :class="{
            ['w-table-sorter']: isFunction(col.sorter),
            ['w-table-sortered']: colSort[colIdx] !== 'all',
            ['w-table-bordered-th']: bordered,
          }" :key="colIdx" v-for="(col, colIdx) in fixColumns" @click="sortCol(col, colIdx, $event)" :colspan="col.colSpan" v-if="!hasOwn(col, 'colSpan') || (hasOwn(col, 'colSpan') && col.colSpan > 0)">
            {{col.title}}
            <div class="w-table-sort" v-if="hasOwn(col, 'sorter')">
              <i class="w-table-sort-icon w-table-sort-up" :class="{
                ['w-table-sort-on']: colSort[colIdx] === 'ascend',
              }" v-if="!hasOwn(col, 'sortDirections') || (hasOwn(col, 'sortDirections') && isArray(col.sortDirections) && col.sortDirections.indexOf('ascend') > -1)"></i>
              <i class="w-table-sort-icon w-table-sort-down" :class="{
                ['w-table-sort-on']: colSort[colIdx] === 'descend',
              }" v-if="!hasOwn(col, 'sortDirections') || (hasOwn(col, 'sortDirections') && isArray(col.sortDirections) && col.sortDirections.indexOf('descend') > -1)"></i>
            </div>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
import props from './props/thead';
import checkboxProps from './props/checkbox';
import { hasOwn, isFunction, isArray } from '../utils/o';
import WCheckbox from '../checkbox/Checkbox';

export default {
  name: 'THead',
  data() {
    return {
      isArray,
      isFunction,
      hasOwn,
      oldData: [],
      defSortDirections: ['descend', 'ascend'],
      colSort: [],
    };
  },
  props,
  computed: {
    checkbox() {
      return checkboxProps(this.rowSelection, this.columns, 'thead');
    },
    fixColumns() {
      return this.fixed
        ? this.columns.filter(colItem => colItem.fixed === this.fixed)
        : this.columns;
    },
    scrollStyle() {
      const style = {};
      const { x } = this.scroll || {};

      if (!this.fixed && typeof x === 'number') {
        style.width = `${x}px`;
        style.overflowX = 'scroll';
      }
      return style;
    },
  },
  mounted() {
    this.copyData();
    this.sortType();
    this.initSort();
  },
  methods: {
    initSort() {
      const defSortIndex = this.columns.findIndex(col => hasOwn(col, 'defaultSortOrder') && !!col.defaultSortOrder && typeof col.defaultSortOrder === 'string');

      if (defSortIndex > -1) {
        this.sortCol(this.columns[defSortIndex], defSortIndex);
      }
    },
    copyData() {
      this.oldData = this.data.slice();
    },
    // 设置筛选切换
    sortType(ignoreIndex = -1) {
      this.colSort = this.columns.map((col, colIndex) => (ignoreIndex === colIndex ? this.colSort[colIndex] : 'all'));
    },
    checkboxChange(ev, status) {
      this.$emit('checkboxChange', ev, status, this.checkbox);
    },
    sortCol(col, colIdx, ev) {
      // 重置其他筛选
      this.sortType(colIdx);
      // 如果限制条件
      const { sortDirections = [] } = col;
      if (this.colSort[colIdx] === 'all') {
        const descend = sortDirections.indexOf('descend') > -1;
        if (isFunction(col.sorter)) {
          this.data = this.data.sort(col.sorter);
        }
        this.colSort.splice(colIdx, 1, descend ? 'descend' : 'ascend');
      } else if (this.colSort[colIdx] === 'ascend') {
        const ascend = sortDirections.indexOf('ascend') > -1;
        if (isFunction(col.sorter)) {
          this.data = this.data.sort(col.sorter);
          this.data.reverse();
        }
        this.colSort.splice(colIdx, 1, ascend ? 'ascend' : 'descend');
      } else {
        if (isFunction(col.sorter)) {
          this.resetData();
        }
        this.colSort.splice(colIdx, 1, 'all');
      }

      if (col.sorter) {
        this.$emit('change', col, this.colSort[colIdx], ev);
      }
    },
    resetData() {
      let oldIdx = 0;
      while (this.data.length) {
        this.data.pop();
      }
      while (oldIdx < this.oldData.length) {
        this.data.push(this.oldData[oldIdx]);
        oldIdx++;
      }
    },
  },
  components: {
    WCheckbox,
  },
};
</script>
