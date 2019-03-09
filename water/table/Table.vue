<template>
  <div class="w-table-wrap">
    <w-spin v-model="loading">
      <div class="w-table-scroll" :class="{
        ['w-table-bordered']: bordered,
      }" @scroll="scrollingFn($event)">
        <t-head :columns="columns" :data="data" :expandedRowRender="expandedRowRender" :bordered="bordered" :rowSelection="rowSelection" :scroll="scroll" @checkboxChange="checkboxTHeadChange" :checked="bodyChecked" :optional="bodyOptional" @change="headerChange"></t-head>
        <t-body :columns="columns" :data="data" :expandedRowRender="expandedRowRender" :bordered="bordered" :rowSelection="rowSelection" :scrollStyle="scrollStyle" @checkboxChange="checkboxTBodyChange" :checked="bodyChecked" v-if="data.length" @changeHover="getHoverIndex" @changeScroll="getSrollTop" :scrollTop="scrollTop" :hoverIndex="hoverIndex"></t-body>
        <div class="w-table-empty" v-else>
          <p class="w-table-empty-text">{{emptyText}}</p>
        </div>
      </div>
      <div class="w-table-fix-wrap w-table-fix-left" :class="{
        ['w-table-fix-left-shadow']: !scrollLeft,
        }">
        <t-head :columns="columns" :data="data" :expandedRowRender="expandedRowRender" :bordered="bordered" :rowSelection="rowSelection" :scroll="scroll" @checkboxChange="checkboxTHeadChange" :checked="bodyChecked" :optional="bodyOptional" @change="headerChange" fixed="left"></t-head>
        <t-body :columns="columns" :data="data" :expandedRowRender="expandedRowRender" :bordered="bordered" :rowSelection="rowSelection" :scrollStyle="scrollHeight" @checkboxChange="checkboxTBodyChange" :checked="bodyChecked" v-if="data.length" @changeHover="getHoverIndex" fixed="left" :hoverIndex="hoverIndex" @changeScroll="getSrollTop" :scrollTop="scrollTop"></t-body>
      </div>
      <div class="w-table-fix-wrap w-table-fix-right" :class="{
        ['w-table-fix-right-shadow']: !scrollRight,
        }">
        <t-head :columns="columns" :data="data" :expandedRowRender="expandedRowRender" :bordered="bordered" :rowSelection="rowSelection" :scroll="scroll" @checkboxChange="checkboxTHeadChange" :checked="bodyChecked" :optional="bodyOptional" @change="headerChange" fixed="right"></t-head>
        <t-body :columns="columns" :data="data" :expandedRowRender="expandedRowRender" :bordered="bordered" :rowSelection="rowSelection" :scrollStyle="scrollHeight" @checkboxChange="checkboxTBodyChange" :checked="bodyChecked" v-if="data.length" @changeHover="getHoverIndex" fixed="right" :hoverIndex="hoverIndex" @changeScroll="getSrollTop" :scrollTop="scrollTop"></t-body>
      </div>
    </w-spin>
  </div>
</template>
<script>
import props from './props/table';
import THead from './THead';
import TBody from './TBody';
import WSpin from '../spin/Spin';
import checkboxProps from './props/checkbox';

export default {
  name: 'WTable',
  data() {
    return {
      scrollLeft: true,
      scrollRight: false,
      hoverIndex: -1,
      scrollTop: 0,
      bodyChecked: [], // 已经选择
    };
  },
  props,
  computed: {
    bodyOptional() {
      this.init();
      return this.rowSelection ? this.data.filter(dataItem => !checkboxProps(this.rowSelection, dataItem, 'tbody').disabled) : this.data;
    },
    scrollStyle() {
      const style = {};
      const { x, y } = this.scroll || {};

      if (!this.fixed && typeof x === 'number') {
        style.width = `${x}px`;
        style.overflowX = 'scroll';
      }
      if (!this.fixed && typeof y === 'number') {
        style.maxHeight = `${y}px`;
        style.overflowY = 'scroll';
      }
      return style;
    },
    scrollWidth() {
      const style = {};
      const { x } = this.scroll || {};

      if (!this.fixed && typeof x === 'number') {
        style.width = `${x}px`;
        style.overflowX = 'scroll';
      }
      return style;
    },
    scrollHeight() {
      const style = {};
      const { y } = this.scroll || {};

      if (!this.fixed && typeof y === 'number') {
        style.maxHeight = `${y}px`;
        style.overflowY = 'scroll';
      }
      return style;
    },
  },
  methods: {
    init() {
      this.bodyChecked = this.rowSelection ? this.data.filter(dataItem => checkboxProps(this.rowSelection, dataItem, 'tbody').on) : [];
    },
    checkboxTHeadChange(ev, status) {
      this.bodyChecked = status ? this.bodyOptional.slice() : [];
      const { change = () => {} } = this.rowSelection || { change: () => {} };
      change(ev, status, this.bodyChecked);
    },
    checkboxTBodyChange(item, itemIdx, ev, status) {
      if (status) {
        this.bodyChecked.push(item);
      } else {
        const index = this.bodyChecked.findIndex(check => check === item);
        this.bodyChecked.splice(index, 1);
      }
      const { change = () => {} } = this.rowSelection || { change: () => {} };
      change(ev, status, this.bodyChecked, item, itemIdx);
    },
    headerChange(sorter, sortOrder, ev) {
      this.$emit('change', sorter, sortOrder, ev);
    },
    scrollingFn(ev = window.event) {
      const { target } = ev;
      if (target) {
        const { scrollLeft, offsetLeft, offsetWidth } = target;
        this.scrollRight = scrollLeft > offsetWidth - offsetLeft;
        this.scrollLeft = scrollLeft === 0;
      }
    },
    getHoverIndex(idx = -1) {
      this.hoverIndex = idx;
    },
    getSrollTop(top) {
      this.scrollTop = top;
    },
  },
  components: {
    THead,
    TBody,
    WSpin,
  },
};
</script>
