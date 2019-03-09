<template>
  <div :style="scrollStyle" ref="scroll" @scroll="scrollingFn($event)">
    <table class="w-table" :class="{
      ['w-table-fix']: fixed,
      }">
      <colgroup>
        <col key="colKey" :style="{ width: '62px', minWidth: '62px' }" v-if="!!rowSelection">
        <col key="colKey" :style="{ width: '62px', minWidth: '62px' }" v-if="!!expandedRowRender">
        <col :key="colKey" v-for="(col, colKey) in (fixed ? columns.filter(colItem => colItem.fixed === fixed): columns)" :style="{ width: col.width, minWidth: col.width }">
      </colgroup>
      <tbody class="w-table-tbody">
        <template v-for="(dataItem, dataIdx) in data">
          <tr class="w-table-tr" :key="`tr_${dataIdx}`" @mouseover="trOver(dataIdx)" @mouseout="trOut">
            <!-- 选择 -->
            <td class="w-table-td" :class="{
              ['w-table-bordered-td']: bordered,
            }" v-if="!!rowSelection">
              <w-checkbox :disabled="checkbox[dataIdx].disabled" :mode="checkbox[dataIdx].mode" :prefix="checkbox[dataIdx].prefix" :change="checkboxChange.bind(this, dataItem, dataIdx)" :on="checkbox[dataIdx].on || checked.indexOf(dataItem) > -1"></w-checkbox>
            </td>
            <!-- 展开 -->
            <td class="w-table-td" :class="{
              ['w-table-bordered-td']: bordered,
            }" v-if="!!expandedRowRender">
              <i class="w-table-expand-icon" :class="{
                ['w-table-expand-icon-on']: expandStatus[dataIdx],
              }" @click="expandClick(dataIdx)"></i>
            </td>
            <!-- 普通 -->
            <td class="w-table-td" :class="{
              ['w-table-bordered-td']: bordered,
              ['w-table-td-hover']: hoverIndex === dataIdx,
            }" :key="`td_${dataIdx}_${sonIdx}`" v-for="(son, sonIdx) in (fixed ? columns.filter(colItem => colItem.fixed === fixed): columns)" :rowSpan="(typeof son.row === 'function' && son.row({dataIdx}))"
            :colSpan="(typeof son.col === 'function' && son.col({dataIdx}))" v-if="
              ((typeof son.row === 'function' && son.row({dataIdx}) !== 0) || !son.row) &&
              (typeof son.col === 'function' && son.col({dataIdx}) !== 0) || !son.col"
            >
              <w-render-cell :render="son.render" v-if="son.render" :data="{
                text: dataItem[son.dataIndex],
                col: son,
                dataItem,
                dataIdx,
                data,
              }"></w-render-cell>
              <template v-else>{{dataItem[son.dataIndex]}}</template>
            </td>
          </tr>
          <tr class="w-table-tr w-table-expand" v-show="expandStatus[dataIdx]" v-if="!!expandedRowRender">
            <td class="w-table-td w-table-expand-td"></td>
            <td class="w-table-td w-table-expand-td" :colspan="columns.length">
              <w-render-cell :render="expandedRowRender" :data="{
                dataItem,
                dataIdx,
                data,
                expandStatus,
              }"></w-render-cell>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script>
import props from './props/tbody';
import checkboxProps from './props/checkbox';
import WCheckbox from '../checkbox/Checkbox';
import WRenderCell from '../utils/render';
import { hasOwn } from '../utils/o';

export default {
  name: 'TBody',
  data() {
    return {
      hasOwn,
      expandStatus: [],
    };
  },
  props,
  computed: {
    checkbox() {
      return this.data.map(dataItem => checkboxProps(this.rowSelection || {}, dataItem, 'tbody'));
    },
  },
  mounted() {
    this.initExpand();
  },
  methods: {
    checkboxChange(item, itemIdx, ev, status) {
      this.$emit('checkboxChange', item, itemIdx, ev, status);
    },
    initExpand() {
      if (this.expandedRowRender) {
        this.expandStatus = this.data.map(() => false);
      }
    },
    expandClick(dataIdx) {
      this.expandStatus.splice(dataIdx, 1, !this.expandStatus[dataIdx]);
    },
    trOver(idx) {
      this.$emit('changeHover', idx);
    },
    trOut() {
      this.$emit('changeHover', -1);
    },
    scrollingFn(ev) {
      const { target } = ev;
      if (ev.currentTarget !== target) {
        return;
      }
      this.$emit('changeScroll', target.scrollTop);
    },
  },
  components: {
    WCheckbox,
    WRenderCell,
  },
  watch: {
    scrollTop(val) {
      this.$refs.scroll.scrollTop = val;
    },
  },
};
</script>
