<template>
  <div
    class="w-datepicker"
    v-doc-click="bodyClick"
    ref="picker"
  >
    <div
      @mouseover="handleMouseOver"
      @mouseout="handleMouseOut"
      @click="openPicker"
    >
      <WInput
        v-model="inputValue"
        :readonly="editable"
        @change="inputChange"
        :disabled="disabled"
        :placeholder="placeholder"
        :size="size"
      >
        <WIcon
          slot="suffix"
          aria-label="关闭"
          v-if="inputValue"
        >
          <span
            class="w-picker-clear"
            :class="{
              'w-picker-clear-show': clearDisplayStatus,
            }"
            v-if="!disabled && clearable"
            @click="clearValue($event)"
          >
            <slot name="clear">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                width="1em"
                fill="#B4BAC3"
                height="1em"
                aria-hidden="true">
                  <path :d="pickerSvg.closePath"></path>
              </svg>
            </slot>
          </span>
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            width="1em"
            :fill="clearable && !disabled && clearDisplayStatus ? '#fff': '#B4BAC3'"
            height="1em"
            aria-hidden="true">
              <path :d="pickerSvg.calendarPath"></path>
          </svg>
        </WIcon>
        <WIcon
          slot="suffix"
          aria-label="关闭"
          v-else
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            width="1em"
            fill="#B4BAC3"
            height="1em"
            aria-hidden="true">
              <path :d="pickerSvg.calendarPath"></path>
          </svg>
        </WIcon>
      </WInput>
    </div>
    <div
      class="w-picker"
      :class="pickerClass"
      v-show="pickerStatus"
      ref="popElem"
      v-transfer-dom="getContainer && getContainer()"
      :data-transfer="transfer"
      @click="popoverClick($event)"
    >
      <i class="w-picker-arrow" :class="arrowClass"></i>
      <div class="w-picker-header">
        <button
          class="w-picker-year-prev"
          @click="handlePrevYear"
        ></button>
        <button
          class="w-picker-month-prev"
          @click="handlePrevMonth"
          v-if="isWeekOrDate"
        ></button>
        <button
          class="w-picker-month-next"
          @click="handleNextMonth"
          v-if="isWeekOrDate"
        ></button>
        <button
          class="w-picker-year-next"
          @click="handleNextYear"
        ></button>
        <span
          v-if="tableType === 'age'"
        >{{ nowRangeAge }}</span>
        <span
          class="w-picker-header-text"
          @click="handleAge"
          v-if="tableType === 'year'"
        >{{ nowRangeYear }}</span>
        <span
          class="w-picker-header-text"
          @click="handleYear"
          v-if="tableType === 'date' || tableType === 'month'"
        >{{ nowYear }}{{ DATE_UNIT_TEXT[0] }}</span>
        <span
          class="w-picker-header-text"
          @click="handleMonth"
          v-if="tableType === 'date' || tableType === 'month'"
        >{{ nowMonth }}{{ DATE_UNIT_TEXT[1] }}</span>
      </div>
      <div class="w-picker-body">
        <DatePcikerTable
          :type="tableType"
          :textValue="tableTextValue"
          :nowValue="tableNowValue"
          :col="tableCol"
          :options="tableOptions"
          :chunkNumber="tableChunkNumber"
          :pickerRender="pickerRender"
          v-model="tableValue"
          @pickerTableChange="pickerTableChange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import moment, { Moment } from 'moment';
import cloneDeep from 'lodash/cloneDeep';
import {
  Component,
  Model,
  Prop,
  Emit,
  Watch,
  Vue,
} from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import addDOMEventListener from 'add-dom-event-listener';
import {
  DateEntity,
  handleMomentObject,
  renderDates,
  formatDateDefault,
  formatDefault,
  valueFormatDateDefault,
  valueFormatDefault,
  WEEK_TEXT,
  MONTH_TEXT,
  DATE_UNIT_TEXT,
  renderYearsByYear,
  renderYearsByRangeYear,
  YearsEntity,
  YearInYearsEntity,
  renderAges,
  AgesEntity,
  AgesInAgesEntity,
  renderMonths,
  MonthInMonthsEntity,
  getRangeYear,
} from '@/helper/date';
import docClick from '@/directives/doclick';
import TransferDom from '@/directives/transfer-dom';
import DatePcikerTable, { PickerTableChangeEntity } from '@/components/datepicker/DatePickerTable.vue';
import WInput from '@/components/input/Input.vue';
import WIcon from '@/components/icon/Icon.vue';
import { pickerSvg, PickerSvgEntity } from '@/helper/pickersvg';
import { hasOwn } from '@/helper/o';
import poperMixin from '@/helper/popermixin';
import { isString, isUndefined } from '@/helper/type';
import {
  setPostion,
} from '@/helper/poper';

Vue.directive('transfer-dom', (TransferDom as any));

Vue.directive('doc-click', (docClick as any));

@Component({
  components: {
    DatePcikerTable,
    WInput,
    WIcon,
  },
})
export default class DatePicker extends mixins(poperMixin) {
  pickerSvg: PickerSvgEntity = pickerSvg;

  inputChangeTimer: number = -1;

  inputValue: string = '';

  oldValue: string = ''; // 点击空白处，日期校验失败恢复之前的value

  updateTable: string | undefined;

  trueFormat: string = ''; // 显示的格式

  trueValueFormat: string = ''; // 数据的格式

  mNowObject: Moment = moment(); // 此刻 moment 的对象

  mNowJson: DateEntity = this.mNowObject.toObject(); // 此刻 moment 的 json 对象

  dates: DateEntity[] = [];

  nowYear: number = 0;

  nowRangeYear: string = ''; // 年份区间

  nowRangeAge: string = ''; // 年代区间

  nowMonth: number = 0;

  WEEK_TEXT: string[] = WEEK_TEXT;

  DATE_UNIT_TEXT: string[] = DATE_UNIT_TEXT;

  MONTH_TEXT: string[] = MONTH_TEXT;

  particularYears: YearsEntity = {
    years: [],
    range: '',
  };

  ages: AgesEntity = {
    ages: [],
    range: '',
  };

  tableCol: string[] = [];

  tableChunkNumber: number = 0;

  tableTextValue: string = '';

  tableNowValue: string = '';

  tableType: string = 'date';

  tableValue: string = '';

  tableOptions: DateEntity[]
    | MonthInMonthsEntity[]
    | AgesInAgesEntity[]
    | YearInYearsEntity[] = [];

  clearDisplayStatus: boolean = false;

  pickerStatus: boolean = false;

  resizeEvent: any = null;

  @Model('model', { type: String, default: undefined }) readonly value!: string;

  @Prop({
    type: String,
    default: 'date',
  }) private type!: string;

  @Prop(String) private defaultPickerValue!: string;

  @Prop(String) private placeholder!: string;

  @Prop(String) private size!: string;

  @Prop(String) private format!: string;

  @Prop(String) private valueFormat!: string;

  @Prop({
    type: String,
    default: 'bottom', // 不支持左右
  }) private placement!: string;

  @Prop({
    type: Number,
    default: 8,
  }) private interval!: number;

  @Prop({
    type: Number,
    default: 0,
  }) private firstDayOfWeek!: number; // 0-6

  @Prop(Function) private pickerRender!: Function;

  @Prop(Function) private disabledRender!: Function;

  @Prop(Function) private getContainer!: Function;

  @Prop({
    type: Boolean,
    default: true,
  }) private transfer!: boolean;

  @Prop(Boolean) private editable!: boolean;

  @Prop(Boolean) private disabled!: boolean;

  @Prop(Boolean) private open!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  }) private clearable!: boolean;

  get isWeekOrDate() {
    return this.type === 'date' || this.type === 'week';
  }

  get pickerClass(): any[] {
    return [
      {
        'w-picker-horbottom': this.isHorBottom,
        'w-picker-hortop': this.isHorTop,
        'w-picker-horleft': this.isVerLeft,
        'w-picker-horright': this.isVerRight,
      },
    ];
  }

  get arrowClass(): any[] {
    return [
      {
        'w-picker-arrow-hortop': this.isHorTop,
        'w-picker-arrow-horbottom': this.isHorBottom,
        'w-picker-arrow-verendright': this.isVerEndRight,
        'w-picker-arrow-verendleft': this.isVerEndLeft,
        'w-picker-arrow-vercenter': this.isVerCenter,
      },
    ];
  }

  created(): void {
    this.initToday();
    this.initFormat();
    // 因为周数的时候需要等待初始化 inputValue
    this.$nextTick(() => {
      this.initPanel();
    });
    this.setPickerStatus();
  }

  mounted() {
    this.resizeEvent = addDOMEventListener(window, 'resize', this.resizeChange);
    this.resizeChange();
  }

  beforeDestroy() {
    this.resizeEvent.remove();
  }

  @Watch('value', {
    immediate: true,
  })
  copyValue() {
    this.oldValue = this.value || this.oldValue;
  }

  resizeChange() {
    setPostion(this, 'picker');
  }

  initFormat() {
    if (this.type && !this.format) {
      this.trueFormat = hasOwn(formatDefault, this.type)
        ? (formatDefault as any)[this.type]
        : formatDateDefault;
    } else {
      this.trueFormat = this.format;
    }

    if (this.type && !this.valueFormat) {
      this.trueValueFormat = hasOwn(valueFormatDefault, this.type)
        ? (valueFormatDefault as any)[this.type]
        : valueFormatDateDefault;
    } else {
      this.trueValueFormat = this.valueFormat;
    }
  }

  initToday() {
    this.mNowJson = handleMomentObject({
      mObject: this.mNowObject,
      status: 'now',
      format: formatDateDefault,
      valueFormat: formatDateDefault,
    });
    this.setTableNowValue((this.mNowJson.value as string));
  }

  initPanel() {
    const momentValue = this.inputValue || this.defaultPickerValue;
    const tableMoment = moment(momentValue, momentValue ? this.trueFormat : '');
    this.initTable(tableMoment);
  }

  // 类型不一样，渲染的面板也不一样
  initTable(tableMoment: moment.Moment) {
    const mValueJson = handleMomentObject({
      mObject: tableMoment,
      status: 'value',
      format: this.trueFormat,
      valueFormat: this.trueValueFormat,
    });
    this.nowYear = mValueJson.years;
    this.nowMonth = Number(mValueJson.trueMonths);

    this.setTableValue((mValueJson.value as string));

    if (this.isWeekOrDate) {
      this.setTableDate(renderDates({
        mObject: tableMoment,
        firstDayOfWeek: this.firstDayOfWeek,
        format: this.trueFormat,
        valueFormat: this.trueValueFormat,
        disabledRender: this.disabledRender,
      }));
    }
    if (this.type === 'month') {
      this.setTableMonths();
    }
    if (this.type === 'year') {
      this.setTableYearsByYear();
    }

    if (this.type === 'age') {
      this.nowRangeYear = getRangeYear(this.nowYear).range;
      this.setTableNowValue(this.nowRangeYear);
      this.setTableAges();
    }
  }

  @Watch('value', {
    immediate: true,
  })
  initInput(value: string) {
    this.$nextTick(() => {
      if (value && isString(value)) {
        // 如果类型是周
        if (this.type === 'week') {
          const dateMoment: string = moment(this.value, this.trueValueFormat)
            .format(formatDateDefault);
          this.inputValue = moment(dateMoment, formatDateDefault).format(this.trueFormat);
        } else {
          this.inputValue = moment(value, this.trueFormat).format(this.trueFormat);
        }
      } else {
        this.inputValue = '';
      }
    });
  }

  setTableNowValue(value: string) {
    this.tableNowValue = value;
  }

  setTableValue(value: string) {
    this.tableValue = value;
  }

  setTableNoTh() {
    this.tableChunkNumber = 3;
    this.tableCol = [];
    this.tableTextValue = 'value';
  }

  setTableDate(dates: DateEntity[]) {
    this.tableType = this.type;
    this.tableOptions = cloneDeep(dates);
    this.tableChunkNumber = WEEK_TEXT.length;
    this.tableCol = WEEK_TEXT;
    this.tableTextValue = 'trueValue';
  }

  // 面板设置成月份
  setTableMonths() {
    this.tableType = 'month';
    this.tableOptions = renderMonths({
      year: this.nowYear,
      format: this.trueFormat,
      valueFormat: this.trueValueFormat,
      disabledRender: this.disabledRender,
    }).months;

    this.setTableNoTh();

    this.tableTextValue = 'inputValue';
    // this.setTableValue(this.value);
  }

  // 面板设置年份 通过某一年
  setTableYearsByYear() {
    this.tableType = 'year';
    const { years, range } = renderYearsByYear({
      nowYear: this.nowYear,
      format: this.trueFormat,
      valueFormat: this.trueValueFormat,
      disabledRender: this.disabledRender,
    });
    this.tableOptions = years;
    this.nowRangeYear = range;
    this.setTableNoTh();
    this.tableTextValue = 'trueValue';
    // this.setTableValue(String(this.nowYear));
  }

  // 面板设置年份 通过年份区间
  setTableYearsByRangeYear() {
    this.tableType = 'year';
    const [yearStart, yearEnd] = this.nowRangeYear.split('-');
    const { years, range } = renderYearsByRangeYear({
      yearStart: Number(yearStart),
      yearEnd: Number(yearEnd),
      format: this.trueFormat,
      valueFormat: this.trueValueFormat,
      disabledRender: this.disabledRender,
    });

    this.tableOptions = years;
    this.nowRangeYear = range;
    this.setTableNoTh();
    this.tableTextValue = 'trueValue';
  }

  // 面板设置年代
  setTableAges() {
    this.tableType = 'age';
    const { ages, range } = renderAges({
      range: this.nowRangeYear,
      format: this.trueFormat,
      valueFormat: this.trueValueFormat,
      disabledRender: this.disabledRender,
    });
    this.tableOptions = ages;
    this.nowRangeAge = range;
    this.setTableNoTh();
    // this.setTableValue(this.nowRangeYear);
    this.tableTextValue = 'trueValue';
  }

  pickerTableChange({
    item,
    value,
    type,
    trueValue,
    dateWeek,
    ev,
  }: PickerTableChangeEntity): void {
    if (item.disabled) {
      return;
    }
    // 如果点击的是月份
    if (type === 'month' && this.isWeekOrDate) {
      this.nowMonth = Number(trueValue);
      this.renderTableDateInMonth();
    } else if (type === 'year') { // 如果点击的是年份
      this.nowYear = Number(trueValue);
      if (this.type === 'month') { // 当月份的时候去月份
        this.setTableMonths();
      } else if (this.isWeekOrDate) { // 当日期的时候去日期
        this.renderTableDateInMonth();
      }
    } else if (type === 'age' && this.type !== 'age') { // 如果点击的是年份区间
      this.nowRangeYear = String(trueValue);
      this.setTableYearsByRangeYear();
    }

    if (!isUndefined(this.value)) {
      this.returnModel({
        type,
        value,
        trueValue,
        item,
        dateWeek,
        ev,
      });

      // 非当前页面自动跳转到当前页面
      this.$nextTick(() => {
        const { status } = item;
        const isPrev = (dateWeek as []).find((weekItem: any) => weekItem.status === 'prev');
        const isNext = (dateWeek as []).find((weekItem: any) => weekItem.status === 'next');

        if (
          (this.type === 'date' && status === 'next')
          || (this.type === 'week' && isNext)
        ) {
          this.handleNextMonth();
        }
        if (
          (this.type === 'date' && status === 'prev')
          || (this.type === 'week' && isPrev)
        ) {
          this.handlePrevMonth();
        }
      });
    }
  }

  @Emit('model')
  returnModel({ type, value }: PickerTableChangeEntity): string {
    if (this.type === type) {
      this.setTableValue(value);
      this.closePicker();
      return value;
    }

    return '';
  }

  renderTableDateInMonth() {
    this.setTableDate(renderDates({
      mObject: moment(`${this.nowYear}-${this.nowMonth}`, this.type === 'week' ? formatDateDefault : this.trueFormat),
      firstDayOfWeek: this.firstDayOfWeek,
      format: this.trueFormat,
      valueFormat: this.trueValueFormat,
      disabledRender: this.disabledRender,
    }));
  }

  handleMonth() {
    this.setTableValue(`${String(this.nowYear)}-${String(this.nowMonth)}-01`);
    this.setTableMonths();
  }

  handleYear() {
    this.setTableValue(String(this.nowYear));
    this.setTableYearsByYear();
  }

  handleAge() {
    this.setTableValue(String(this.nowRangeYear));
    this.setTableAges();
  }

  handlePrevMonth() {
    this.nowMonth--;
    if (this.nowMonth < 1) {
      this.nowMonth = 12;
      this.nowYear--;
    }
    this.renderTableDateInMonth();
  }

  handleNextMonth() {
    this.nowMonth++;
    if (this.nowMonth > 12) {
      this.nowMonth = 1;
      this.nowYear++;
    }
    this.renderTableDateInMonth();
  }

  handleHeaderYear(dirNumber: number) {
    if (this.type === 'month' || this.isWeekOrDate) {
      this.nowYear += 1 * dirNumber;
      if (this.isWeekOrDate) {
        this.renderTableDateInMonth();
      } else {
        this.setTableMonths();
      }
    }
    if (this.type === 'year') {
      this.nowYear += 10 * dirNumber;
      this.setTableYearsByYear();
    }

    if (this.type === 'age') {
      this.nowYear += 100 * dirNumber;
      this.nowRangeYear = getRangeYear(this.nowYear).range;
      this.setTableAges();
    }
  }

  handleNextYear() {
    const nextNumber = 1;
    this.handleHeaderYear(nextNumber);
  }

  handlePrevYear() {
    const prevNumber = -1;
    this.handleHeaderYear(prevNumber);
  }

  inputChange({ value }: any) {
    clearTimeout(this.inputChangeTimer);
    this.inputChangeTimer = setTimeout(() => {
      const momentValue = value;
      const tableMoment = moment(momentValue, this.trueFormat);
      if (tableMoment.isValid()) {
        this.initInput(value);
        this.initTable(tableMoment);
      }
    }, 500);
  }

  @Emit('model')
  clearValue(ev: Event): string {
    const emptyValue = '';
    this.initInput(emptyValue);
    this.setTableValue(emptyValue);
    this.closePicker();

    ev.stopPropagation();

    return emptyValue;
  }

  handleMouseOver() {
    this.clearDisplayStatus = true;
  }

  handleMouseOut() {
    this.clearDisplayStatus = false;
  }

  @Watch('open')
  setPickerStatus() {
    this.pickerStatus = this.open;
  }

  openPicker() {
    if (!this.disabled) {
      this.pickerStatus = true;
      this.resizeChange();
    }
  }

  closePicker() {
    this.pickerStatus = false;
  }

  @Emit('model')
  bodyClick() {
    let newValue = this.value;
    const tableMoment = moment(this.inputValue, this.trueValueFormat);

    if (tableMoment.isValid()) {
      newValue = tableMoment.format(this.trueValueFormat);
    } else {
      newValue = this.oldValue;
      this.initInput(this.oldValue);
    }

    this.closePicker();

    return newValue;
  }

  popoverClick(ev: Event) {
    ev.stopPropagation();
  }
}
</script>

<style lang="scss">
  @import "datepicker.scss";
</style>
