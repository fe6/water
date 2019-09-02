<template>
  <table
    class="w-table"
    :class="{
      ['w-table-border']: border,
    }"
  >
    <colgroup>
      <col
        :key="colIdx"
        v-for="
        (colItem, colIdx) in colGroup"
        :style="{ width: getValue(colItem.width), minWidth: getValue(colItem.width) }"
      >
    </colgroup>
    <thead class="w-table-thead">
      <tr
        class="w-table-tr"
        v-for="( colLine, colLineIndex ) in col"
        :key="colLineIndex"
      >
        <template
          v-for="( colItem, colIndex ) in colLine"
        >
          <th
            :key="colIndex"
            class="w-table-th"
            :class="{
              ['w-table-sorter']: isFunction(colItem.sorter),
              ['w-table-sortered']: isFunction(colItem.sorter) && colSort[colIndex] !== 'all',
              ['w-table-border-th']: border,
              [`w-table-th-${size}`]: size,
            }"
            :style="{
              height: colItem.rowSpan > 1 && fixed
                ? `${colItem.rowSpan * height[size || 'default'] - lineHeight}px`
                : 'auto',
              textAlign: colItem.rowSpan > 0 ? 'left' : 'center'
            }"
            :rowspan="colItem.rowSpan"
            :colspan="colItem.colSpan"
            @click="sortCol(colItem, colIndex, $event)"
          >
            <span class="w-table-th-title" v-if="colItem.title">{{ colItem.title }}</span>
            <w-render
              :render="colItem.headRender"
              v-if="isFunction(colItem.headRender)"
              :data="{
                colItem,
                colIndex,
              }"
            ></w-render>
            <div class="w-table-sort" v-if="showSort || hasOwn(colItem, 'sorter')">
              <i
                class="w-table-sort-icon w-table-sort-up"
                :class="{
                  ['w-table-sort-on']: colSort[colIndex] === 'ascend',
                }"
                v-if="
                !hasOwn(colItem, 'sortDirections')
                || (
                    hasOwn(colItem, 'sortDirections')
                    && isArray(colItem.sortDirections)
                    && colItem.sortDirections.indexOf('ascend') > -1
                  )"
              ></i>
              <i
                class="w-table-sort-icon w-table-sort-down"
                :class="{
                  ['w-table-sort-on']: colSort[colIndex] === 'descend',
                }"
                v-if="
                !hasOwn(colItem, 'sortDirections')
                || (
                  hasOwn(colItem, 'sortDirections')
                  && isArray(colItem.sortDirections)
                  && colItem.sortDirections.indexOf('descend') > -1
                )"
              ></i>
            </div>
          </th>
        </template>
      </tr>
    </thead>
  </table>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import WRender from '@/helper/render';
import { noopArray } from '@/helper/noop';
import { isFunction, isArray } from '@/helper/type';
import getValue from '@/helper/getvalue';
import { hasOwn } from '@/helper/o';

interface HeightEnitiy {
  small: number
  default: number
}

@Component({
  components: {
    WRender,
  },
})
export default class Thead extends Vue {
  colSort: string[] = [];

  oldOptions: any[] = [];

  isFunction: Function = isFunction;

  getValue: Function = getValue;

  isArray: Function = isArray;

  hasOwn: Function = hasOwn;

  @Prop({
    type: Array,
    default: noopArray,
  }) private col!: any[];

  @Prop({
    type: Array,
    default: noopArray,
  }) private colIndex!: any[];

  @Prop({
    type: Array,
    default: noopArray,
  }) private options!: any[];

  @Prop(Boolean) private border!: boolean;

  @Prop(Boolean) private showSort!: boolean;

  @Prop(Boolean) private fixed!: boolean;

  @Prop(String) private size!: string;

  height: HeightEnitiy = {
    small: this.border ? 29 : 28,
    default: this.border ? 45 : 44,
  };

  get lineHeight() {
    return this.border ? 1 : 0;
  }

  get colGroup() {
    return this.colIndex.length ? this.colIndex : this.col;
  }

  mounted() {
    this.copyOptions();
    this.sortType();
    this.initSort();
    // 监听父组件的调用
    this.$nextTick(() => {
      this.$on('clearAllSort', () => {
        this.clearAllSort();
      });
    });
  }

  initSort() {
    const defSortIndex = this.colIndex.findIndex(col => hasOwn(col, 'defaultSortOrder') && !!col.defaultSortOrder && typeof col.defaultSortOrder === 'string');

    if (defSortIndex > -1) {
      this.sortCol(this.colIndex[defSortIndex], defSortIndex);
    }
  }

  copyOptions() {
    this.oldOptions = this.options.slice();
  }

  sortCol(colItem: any, colIndex: number, ev?: MouseEvent) {
    // 重置其他筛选
    this.sortType(colIndex);
    // 如果限制条件
    const { sortDirections = [] } = colItem;
    if (this.colSort[colIndex] === 'all') {
      const descend = sortDirections.indexOf('descend') > -1;
      if (isFunction(colItem.sorter)) {
        this.options = this.options.sort(colItem.sorter);
      }
      this.colSort.splice(colIndex, 1, descend ? 'descend' : 'ascend');
    } else if (this.colSort[colIndex] === 'ascend') {
      if (isFunction(colItem.sorter)) {
        this.options = this.options.sort(colItem.sorter);
        this.options.reverse();
      }
      this.colSort.splice(colIndex, 1, 'descend');
    } else {
      this.clearSort(colItem, colIndex);
    }

    if (colItem.sorter && ev) {
      this.$emit('change', {
        colItem,
        colIndex,
        sortType: this.colSort[colIndex],
        ev,
      });
    }
  }

  clearAllSort() {
    this.colIndex.forEach((colItem: any, colIndex: number) => {
      this.clearSort(colItem, colIndex);
    });
  }

  clearSort(colItem: any, colIndex: number) {
    if (isFunction(colItem.sorter)) {
      this.resetData();
    }
    this.colSort.splice(colIndex, 1, 'all');
  }

  resetData() {
    let oldIdx = 0;
    while (this.options.length) {
      this.options.pop();
    }
    while (oldIdx < this.oldOptions.length) {
      this.options.push(this.oldOptions[oldIdx]);
      oldIdx++;
    }
  }

  // 设置筛选切换
  sortType(ignoreIndex = -1) {
    this.colSort = this.colIndex.map((col, colIndex) => (ignoreIndex === colIndex ? this.colSort[colIndex] : 'all'));
  }
}
</script>
