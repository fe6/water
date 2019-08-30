<template>
  <table
    class="w-table"
    :class="{
      ['w-table-border']: border,
    }"
    v-if="options.length"
  >
    <colgroup>
      <col
        :key="colIdx"
        v-for="
        (colItem, colIdx) in col"
        :style="{ width: getValue(colItem.width), minWidth: getValue(colItem.width) }"
      >
    </colgroup>
    <tbody class="w-table-tbody">
      <template
        v-for="(optItem, optIndex) in options"
      >
        <tr
          class="w-table-tr w-table-tr-border"
          :key="`text${optIndex}`"
          @mouseover="trOver(optIndex)"
          @mouseout="trOut"
        >
          <template
            v-for="( colItem, colIndex ) in col"
          >
            <td
              class="w-table-td"
              :class="{
                ['w-table-border-td']: border,
                [`w-table-td-${size}`]: size,
                ['w-table-td-hover']: hoverIndex === optIndex,
              }"
              :rowSpan="(typeof colItem.row === 'function' && colItem.row({optIndex}))"
              :colSpan="(typeof colItem.col === 'function' && colItem.col({optIndex}))"
              v-if="
                ((
                    typeof colItem.row === 'function' && colItem.row({optIndex}) !== 0
                  ) || !colItem.row)
                && ((
                    typeof colItem.col === 'function' && colItem.col({optIndex}) !== 0
                  ) || !colItem.col)
              "
              :key="colIndex"
            >
              <w-render :render="colItem.render" v-if="isFunction(colItem.render)" :data="{
                text: optItem[colItem.dataIndex],
                col: colItem,
                optItem,
                optIndex,
                options,
              }"></w-render>
              <slot
                :optItem="optItem"
                :optIndex="optIndex"
                :options="options"
                :name="colItem.dataIndex"
                v-else-if="$scopedSlots[colItem.dataIndex]"
              ></slot>
              <template v-else>{{ optItem[colItem.dataIndex] }}</template>
            </td>
          </template>
        </tr>
        <tr
          class="w-table-tr w-table-tr-extend"
          :key="`extend${optIndex}`"
          v-if="colExtendRowRender.length"
        >
          <td
            class="w-table-td"
            :class="{
              ['w-table-border-td']: border,
                [`w-table-td-${size}`]: size,
            }"
            :colspan="col.length"
            v-for="( colItem, colIdx ) in colExtendRowRender"
            :key="`${colIdx}`"
          >
            <w-render
              v-if="isFunction(colItem.extendRowRender)"
              :render="colItem.extendRowRender"
              :data="{
                col: colItem,
                optItem,
                optIndex,
                options,
              }"
            ></w-render>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <WEmpty
    v-else
    class="w-table-empty"
    :class="{
      ['w-table-empty-border']: border,
    }"
  >
    <slot name="empty"></slot>
  </WEmpty>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { noopArray } from '@/helper/noop';
import { isFunction } from '@/helper/type';
import WRender from '@/helper/render';
import getValue from '@/helper/getvalue';
import WEmpty from '@/components/empty/Empty.vue';

@Component({
  components: {
    WEmpty,
    WRender,
  },
})
export default class Tbody extends Vue {
  isFunction: Function = isFunction;

  getValue: Function = getValue;

  @Prop({
    type: Array,
    default: noopArray,
  }) private col!: any[];

  @Prop({
    type: Array,
    default: noopArray,
  }) private options!: any[];

  @Prop({
    type: Number,
    default: -1,
  }) private hoverIndex!: number;

  @Prop(Boolean) private border!: boolean;

  @Prop(String) private size!: string;

  get colExtendRowRender() {
    return this.col.filter(colItem => isFunction(colItem.extendRowRender));
  }

  trOver(idx: number) {
    this.$emit('changeHover', idx);
  }

  trOut() {
    this.$emit('changeHover', -1);
  }
}
</script>
