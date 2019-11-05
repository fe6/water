<template>
  <!-- 使用 -->
  <!-- <DatePcikerTable
    type="date"
    textValue="trueValue"
    :col="WEEK_TEXT"
    :options="dates"
    :chunkNumber="WEEK_TEXT.length"
    @pickerTableChange="pickerTableChange"
  /> -->
  <!-- <DatePcikerTable
    type="month"
    :options="MONTH_TEXT"
    :chunkNumber="3"
  /> -->
  <!-- <DatePcikerTable
    type="year"
    textValue="value"
    :options="particularYears.years"
    :chunkNumber="3"
  /> -->
  <!-- <DatePcikerTable
    type="age"
    textValue="value"
    :options="ages.ages"
    :chunkNumber="3"
  /> -->
  <!-- --{{ages.range}}-- -->
  <!-- --{{particularYears.range}}-- -->
  <!-- --{{monthList}}-- -->
  <table class="w-picker-table">
    <tr v-if="col">
      <th
        class="w-picker-table-th"
        :class="{
          ['w-picker-table-th-date']: type === 'date'
        }"
        v-for="(weekTextItem, weekTextIndex) in col"
        :key="weekTextIndex"
      >{{ weekTextItem }}</th>
    </tr>
    <tr
      v-for="(dateWeek, dateWeekIndex) in cyclicData"
      :key="dateWeekIndex"
      :class="{
        'w-picker-table-tr-week': isWeek,
        'w-picker-table-tr-week-active': isWeekActive(dateWeek),
      }"
    >
      <td
        class="w-picker-table-td"
        :class="[`w-picker-table-td-${type}`, {
          ['w-picker-table-td-current']: dateItem.status === 'current',
        }]"
        v-for="(dateItem, dateIndex) in dateWeek"
        :key="`tr${dateWeekIndex}${dateIndex}`"
        @click="itemClick(dateItem, dateWeek, $event)"
      >
        <WRender
          v-if="isFunction(pickerRender)"
          :render="pickerRender"
          :data="{
            dateItem,
            dateIndex,
            dateWeekIndex,
            dateWeek,
            type,
          }"
        ></WRender>
        <div
          :class="[`w-picker-${type}`, {
            ['w-picker-active']: !isWeek && dateItem.value === value,
            ['w-picker-today']: dateItem.value === nowValue,
            ['w-picker-disabled']: dateItem.disabled,
          }]"
          :title="isWeek ? dateItem.isoWeekTitle : dateItem.title"
          v-else
        >{{ dateItem[textValue] }}</div>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import {
  Component,
  Model,
  Prop,
  Emit,
  Watch,
  Vue,
} from 'vue-property-decorator';
import chunk from 'lodash/chunk';
import {
  DateEntity,
  AgesInAgesEntity,
  MonthInMonthsEntity,
  YearInYearsEntity,
} from '@/helper/date';
import WRender from '@/helper/render';
import { isFunction } from '@/helper/type';

export interface PickerTableChangeEntity {
  value: string;
  trueValue: string | number;
  item: DateEntity
  | MonthInMonthsEntity
  | AgesInAgesEntity
  | YearInYearsEntity;
  type: string;
  dateWeek: DateEntity[]
    | MonthInMonthsEntity[]
    | AgesInAgesEntity[]
    | YearInYearsEntity[];
  ev: Event;
}

@Component({
  components: {
    WRender,
  },
})
export default class DatePickerTable extends Vue {
  cyclicData: any[][] = [[]];

  isFunction: Function = isFunction;

  @Model('model', { type: [String, Number], default: undefined }) readonly value!: string | number;

  @Prop(Array) private options!: [];

  @Prop(Array) private col!: string[];

  @Prop(Number) private chunkNumber!: number;

  @Prop(String) private type!: string;

  @Prop(String) private textValue!: string;

  @Prop(String) private nowValue!: string;

  // 没用 render 是 因为 test 的时候与自带 函数 重名
  @Prop(Function) private pickerRender!: Function;

  get isWeek(): boolean {
    return this.type === 'week';
  }

  isWeekActive(weekLine: DateEntity[]): boolean {
    if (this.isWeek) {
      return !!weekLine.find(
        (lineItem: DateEntity) => Boolean(
          lineItem.day && lineItem.day > 0 && lineItem.value === this.value,
        ),
      );
    }

    return false;
  }

  @Watch('options', {
    immediate: true,
  })
  init() {
    this.cyclicData = chunk(this.options, this.chunkNumber);
  }

  @Emit('pickerTableChange')
  itemClick(
    item: DateEntity
      | MonthInMonthsEntity
      | AgesInAgesEntity
      | YearInYearsEntity,
    dateWeek: DateEntity[]
      | MonthInMonthsEntity[]
      | AgesInAgesEntity[]
      | YearInYearsEntity[],
    ev: Event,
  ): PickerTableChangeEntity {
    const params: PickerTableChangeEntity = {
      value: item.value || '',
      trueValue: item.trueValue || 0,
      item,
      type: this.type,
      dateWeek,
      ev,
    };

    return params;
  }
}
</script>

<style lang="scss">
  @import "../../helper/picker.scss";
</style>
