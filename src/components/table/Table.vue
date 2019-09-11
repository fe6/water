<template>
  <WSpin
    v-model="loading"
  >
    <div class="w-table-wrap">
      <div
        class="w-table-header"
        v-if="isFunction(header)"
        :class="{
          [`w-table-header-${size}`]: size,
          ['w-table-header-border']: border,
        }"
      >
        <w-render
          :render="header"
        ></w-render>
      </div>
      <div
        class="w-table-core"
        :class="{
          ['w-table-core-border']: border,
        }"
      >
        <div
          :style="scrollHeightStyle"
          ref="thead"
          @scroll="scrollingTHeadFn($event)"
          v-if="showHeader"
        >
          <w-thead
            ref="theadCpt"
            :col="theadCol"
            :colIndex="dataIndexCol"
            :showSort="showSort"
            :options="options"
            :border="border"
            :size="size"
            @change="theadChange"
            :style="scrollWidthStyle"
          >
            <template
              v-for="slotItem in Object.keys($scopedSlots)"
              v-slot:[`header-${slotItem}`]="{
                optItem,
                optIndex,
                options,
                colItem,
              }"
            >
              <slot
                :name="`header-${slotItem}`"
                :colItem="colItem"
                :col="dataIndexCol"
                :optItem="optItem"
                :optIndex="optIndex"
                :options="options"
              ></slot>
            </template>
          </w-thead>
        </div>
        <div
          :class="{
            ['w-table-border-top']: !border
          }"
          ref="tbody"
          :style="scrollHeightStyle"
          @scroll="scrollingTBodyFn($event)"
        >
          <w-tbody
            :col="dataIndexCol"
            :options="options"
            :border="border"
            :size="size"
            :style="scrollWidthStyle"
            @changeHover="getHoverIndex"
            :hoverIndex="hoverIndex"
          >
            <template
              v-for="slotItem in Object.keys($scopedSlots)"
              v-slot:[slotItem]="{
                optItem,
                optIndex,
                options,
              }"
            >
              <slot
                :name="slotItem"
                :col="dataIndexCol"
                :optItem="optItem"
                :optIndex="optIndex"
                :options="options"
              ></slot>
            </template>
          </w-tbody>
        </div>
        <!-- fix left start -->
        <div
          class="w-table-fix-wrap w-table-fix-left"
          :class="{
            ['w-table-fix-left-shadow']: scrollLeft,
          }"
          v-if="leftCol.length"
        >
          <div
            ref="theadLeft"
            v-if="showHeader"
            @scroll="scrollingTHeadFn($event)"
          >
            <w-thead
              ref="theadCptLeft"
              :col="leftHeadCol"
              :colIndex="leftCol"
              fixed
              :showSort="showSort"
              :options="options"
              :border="border"
              :size="size"
              @change="theadChange"
            >
              <template
                v-for="slotItem in Object.keys($scopedSlots)"
                v-slot:[`header-${slotItem}`]="{
                  optItem,
                  optIndex,
                  options,
                  colItem,
                }"
              >
                <slot
                  :name="`header-${slotItem}`"
                  :colItem="colItem"
                  :col="dataIndexCol"
                  :optItem="optItem"
                  :optIndex="optIndex"
                  :options="options"
                ></slot>
              </template>
            </w-thead>
          </div>
          <div
            :class="{
              ['w-table-border-top']: !border
            }"
            ref="tbodyLeft"
            :style="scrollHeightStyle"
            @scroll="scrollingTBodyLeftFn($event)"
          >
            <w-tbody
              :col="leftCol"
              :options="options"
              :border="border"
              :size="size"
              @changeHover="getHoverIndex"
              :hoverIndex="hoverIndex"
            >
              <template
                v-for="slotItem in Object.keys($scopedSlots)"
                v-slot:[slotItem]="{
                  optItem,
                  optIndex,
                  options,
                }"
              >
                <slot
                  :name="slotItem"
                  :col="dataIndexCol"
                  :optItem="optItem"
                  :optIndex="optIndex"
                  :options="options"
                ></slot>
              </template>
            </w-tbody>
          </div>
        </div>
        <!-- fix left end -->
        <!-- fix right start -->
        <div
          class="w-table-fix-wrap w-table-fix-right"
          :class="{
            ['w-table-fix-right-shadow']: scrollRight,
          }"
          v-if="rightCol.length"
        >
          <div
            ref="theadRight"
            v-if="showHeader"
            @scroll="scrollingTHeadFn($event)"
          >
            <w-thead
              ref="theadCptRight"
              :col="rightHeadCol"
              :colIndex="rightCol"
              fixed
              :showSort="showSort"
              :options="options"
              :border="border"
              :size="size"
              @change="theadChange"
            >
              <template
                v-for="slotItem in Object.keys($scopedSlots)"
                v-slot:[`header-${slotItem}`]="{
                  optItem,
                  optIndex,
                  options,
                  colItem,
                }"
              >
                <slot
                  :name="`header-${slotItem}`"
                  :colItem="colItem"
                  :col="dataIndexCol"
                  :optItem="optItem"
                  :optIndex="optIndex"
                  :options="options"
                ></slot>
              </template>
            </w-thead>
          </div>
          <div
            :class="{
              ['w-table-border-top']: !border
            }"
            ref="tbodyRight"
            :style="scrollHeightStyle"
            @scroll="scrollingTBodyRightFn($event)"
          >
            <w-tbody
              :col="rightCol"
              :options="options"
              :border="border"
              :size="size"
              @changeHover="getHoverIndex"
              :hoverIndex="hoverIndex"
            >
              <template
                v-for="slotItem in Object.keys($scopedSlots)"
                v-slot:[slotItem]="{
                  optItem,
                  optIndex,
                  options,
                }"
              >
                <slot
                  :name="slotItem"
                  :col="dataIndexCol"
                  :optItem="optItem"
                  :optIndex="optIndex"
                  :options="options"
                ></slot>
              </template>
            </w-tbody>
          </div>
        </div>
        <!-- fix right end -->
      </div>
      <div
        class="w-table-footer"
        v-if="isFunction(footer)"
        :class="{
          [`w-table-footer-${size}`]: size,
          ['w-table-footer-border']: border,
        }"
      >
        <w-render
          :render="footer"
        ></w-render>
      </div>
    </div>
  </WSpin>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import cloneDeep from 'lodash/cloneDeep';
import WRender from '@/helper/render';
import { noopArray } from '@/helper/noop';
import WSpin from '@/components/spin/Spin.vue';
import WThead from '@/components/table/Thead.vue';
import WTbody from '@/components/table/Tbody.vue';
import getValue from '@/helper/getvalue';
import { isFunction } from '@/helper/type';
import {
  hasOwn,
} from '@/helper/o';
import {
  getMaxLevel,
  getAllChildrenLength,
  ChildEntity,
  getCol,
  handleCol,
} from '@/components/table/helper';

interface StyleEntity {
  overflowX?: string;
  width?: string | number;
  maxHeight?: string | number;
  overflowY?: string;
}

interface ScrollEntity {
  x?: number;
  y?: number;
}

@Component({
  components: {
    WSpin,
    WThead,
    WTbody,
    WRender,
  },
})
export default class Table extends Vue {
  hoverIndex: number = -1;

  scrollLeft: boolean = false;

  scrollRight: boolean = true;

  isFunction: Function = isFunction;

  @Prop({
    type: Array,
    default: noopArray,
  }) private col!: any[];

  @Prop({
    type: Array,
    default: noopArray,
  }) private options!: any[];

  @Prop(Boolean) private showSort!: boolean;

  @Prop(Boolean) private border!: boolean;

  @Prop(Boolean) private loading!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  }) private showHeader!: boolean;

  @Prop(Object) private scroll!: object;

  @Prop(String) private size!: string;

  @Prop(Function) private header!: Function;

  @Prop(Function) private footer!: Function;

  get theadCol() {
    const copyCol: any[] = cloneDeep(this.col);
    const maxLevel: number = getMaxLevel(copyCol);
    const childLength: ChildEntity = getAllChildrenLength(copyCol);
    const newCol: any[] = [];

    copyCol.forEach((item: any, itemIndex: number) => {
      getCol(item, String(itemIndex), maxLevel, childLength);
    });

    handleCol(copyCol, newCol);

    return newCol;
  }

  get dataIndexCol() {
    const newCol: any[] = [];
    // 递归累加所有权限输出
    const handleReduce = (item: any, kids: any) => {
      if (hasOwn(kids, 'children') && kids.children.length > 0) {
        kids.children.reduce((kidKeys: any, kid: number) => {
          handleReduce(item, kid);
          return kidKeys;
        }, {});
      } else if (hasOwn(kids, 'dataIndex') && kids.dataIndex.length > 0) {
        newCol.push(kids);
      }
    };

    this.col.forEach((item: any) => {
      handleReduce(item, item);
    });

    return newCol;
  }

  get leftHeadCol() {
    return [this.leftCol];
  }

  get leftCol() {
    return this.theadCol[0].filter((colItem: any) => colItem.fixed === 'left');
  }

  get rightHeadCol() {
    return [this.rightCol];
  }

  get rightCol() {
    return this.theadCol[0].filter((colItem: any) => colItem.fixed === 'right');
  }

  get scrollWidthStyle() {
    const style: StyleEntity = {};
    const { x }: ScrollEntity = this.scroll || { x: 0, y: 0 };

    if (x && getValue(x)) {
      style.width = getValue(x);
      style.overflowX = 'auto';
    }
    return style;
  }

  get scrollHeightStyle() {
    const style: StyleEntity = {};
    const { y }: ScrollEntity = this.scroll || { x: 0, y: 0 };

    if (y && getValue(y)) {
      style.maxHeight = getValue(y);
      style.overflowY = 'auto';
    }
    return style;
  }

  clearSort() {
    // 调用子组件方法
    (this.$refs.theadCpt as any).$emit('clearAllSort');
    if (hasOwn(this.$refs, 'theadCptLeft')) {
      (this.$refs.theadCptLeft as any).$emit('clearAllSort');
    }
    if (hasOwn(this.$refs, 'theadCptRight')) {
      (this.$refs.theadCptRight as any).$emit('clearAllSort');
    }
  }

  scrollingLeft(ev: MouseEvent, targetName: string) {
    const target = ev.target as any;

    if (ev.currentTarget !== target) {
      return;
    }

    const { scrollLeft, offsetWidth } = target;

    this.scrollRight = scrollLeft < target.children[0].offsetWidth - offsetWidth;
    this.scrollLeft = scrollLeft > 0;

    (this.$refs[targetName] as any).scrollLeft = scrollLeft;
  }

  scrollingTop(ev: MouseEvent, targetName: string) {
    const target = ev.target as any;

    if (ev.currentTarget !== target) {
      return;
    }

    const { scrollTop } = target;
    const scrollElement = this.$refs[targetName] as any;

    if (scrollElement) {
      scrollElement.scrollTop = scrollTop;
    }
  }

  scrollingTHeadFn(ev: MouseEvent) {
    this.scrollingLeft(ev, 'tbody');
  }

  scrollingTBodyFn(ev: MouseEvent) {
    this.scrollingLeft(ev, 'thead');
    this.scrollingTop(ev, 'tbodyLeft');
    this.scrollingTop(ev, 'tbodyRight');
  }

  scrollingTBodyRightFn(ev: MouseEvent) {
    this.scrollingTop(ev, 'tbodyLeft');
    this.scrollingTop(ev, 'tbody');
  }

  scrollingTBodyLeftFn(ev: MouseEvent) {
    this.scrollingTop(ev, 'tbodyRight');
    this.scrollingTop(ev, 'tbody');
  }

  theadChange(params: any) {
    this.$emit('change', params);
  }

  getHoverIndex(idx = -1) {
    if (this.leftCol.length || this.rightCol.length) {
      this.hoverIndex = idx;
    }
  }
}
</script>

<style lang="scss">
  @import './table.scss';
</style>
