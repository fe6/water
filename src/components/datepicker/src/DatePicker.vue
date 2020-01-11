<!-- @format -->

<template>
  <div ref="picker" v-doc-click="bodyClick" class="w-datepicker">
    <div
      @mouseover="handleMouseOver"
      @mouseout="handleMouseOut"
      @click="openPicker"
      v-if="!calendar"
    >
      <slot v-if="$slots.default"></slot>
      <WInput
        v-else
        v-model="inputValue"
        :readonly="editable"
        :disabled="disabled"
        :placeholder="placeholder"
        :size="size"
        @change="inputChange"
      >
        <WIcon v-if="inputValue" slot="suffix" aria-label="关闭">
          <span
            v-if="!disabled && clearable"
            class="w-picker-clear"
            :class="{
              'w-picker-clear-show': clearDisplayStatus,
            }"
            @click="clearValue($event)"
          >
            <slot name="clear">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                width="1em"
                fill="#B4BAC3"
                height="1em"
                aria-hidden="true"
              >
                <path :d="pickerSvg.closePath"></path>
              </svg>
            </slot>
          </span>
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            width="1em"
            :fill="
              clearable && !disabled && clearDisplayStatus ? '#fff' : '#B4BAC3'
            "
            height="1em"
            aria-hidden="true"
          >
            <path :d="pickerSvg.calendarPath"></path>
          </svg>
        </WIcon>
        <WIcon v-else slot="suffix" aria-label="关闭">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            width="1em"
            fill="#B4BAC3"
            height="1em"
            aria-hidden="true"
          >
            <path :d="pickerSvg.calendarPath"></path>
          </svg>
        </WIcon>
      </WInput>
    </div>
    <div
      v-show="pickerStatus"
      ref="popElem"
      v-transfer-dom="getContainer && getContainer()"
      class="w-picker"
      :class="pickerClass"
      :data-transfer="transfer"
      @click="popoverClick($event)"
    >
      <i class="w-picker-arrow" :class="arrowClass" v-if="!calendar"></i>
      <div v-if="isSelectTime">
        <div class="w-picker-time" @click="selectDate">{{ panelValue }}</div>
        <TimePanel v-model="timeValue" @change="timeChange" />
      </div>
      <div class="w-picker-header" v-if="!isSelectTime">
        <button class="w-picker-year-prev" @click="handlePrevYear"></button>
        <button
          v-if="isWeekOrDate"
          class="w-picker-month-prev"
          @click="handlePrevMonth"
        ></button>
        <button
          v-if="isWeekOrDate"
          class="w-picker-month-next"
          @click="handleNextMonth"
        ></button>
        <button class="w-picker-year-next" @click="handleNextYear"></button>
        <span class="w-picker-header-text" v-if="tableType === 'age'">{{
          nowRangeAge
        }}</span>
        <span
          v-if="tableType === 'year'"
          class="w-picker-header-text"
          @click="handleAge"
          >{{ nowRangeYear }}</span
        >
        <span
          v-if="
            tableType === 'date' ||
              tableType === 'week' ||
              tableType === 'month'
          "
          class="w-picker-header-text"
          @click="handleYear"
          >{{ nowYear }} {{ DATE_UNIT_TEXT[DATE_UNIT_ENUM.YEAR_ENUM] }}</span
        >
        <span
          v-if="tableType === 'date' || tableType === 'week'"
          class="w-picker-header-text"
          @click="handleMonth"
          >{{ nowMonth }}{{ DATE_UNIT_TEXT[DATE_UNIT_ENUM.MONTH_ENUM] }}</span
        >
      </div>
      <div class="w-picker-body" v-if="!isSelectTime">
        <DatePcikerTable
          v-model="tableValue"
          :type="tableType"
          :text-value="tableTextValue"
          :now-value="tableNowValue"
          :col="tableCol"
          :options="tableOptions"
          :chunk-number="tableChunkNumber"
          :picker-render="pickerRender"
          @pickerTableChange="pickerTableChange"
        >
          <template
            v-if="$scopedSlots.picker"
            v-slot:picker="{
              dateItem,
              dateIndex,
              dateWeekIndex,
              dateWeek,
              type,
            }"
          >
            <slot
              :dateItem="dateItem"
              :dateIndex="dateIndex"
              :dateWeekIndex="dateWeekIndex"
              :dateWeek="dateWeek"
              :type="type"
              :headerDate="headerDate"
              :pickerValue="pickerValue(dateItem.date)"
              name="picker"
            ></slot>
          </template>
        </DatePcikerTable>
      </div>
      <div class="w-picker-footer" v-if="type === 'datetime'">
        <WLink
          @click.native="selectTimeFn"
          :disabled="!panelValue"
          v-if="!isSelectTime"
          >选择时间</WLink
        >
        <WLink @click.native="selectDate" v-else>选择日期</WLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import moment, { Moment } from 'moment';
  import cloneDeep from 'lodash/cloneDeep';
  import concat from 'lodash/concat';
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
    DATE_UNIT_TEXT,
    DATE_UNIT_ENUM,
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
  import { TIME_FORMAT_DEFAULT } from '@/helper/time';
  import docClick from '@/directives/doclick';
  import TransferDom from '@/directives/transfer-dom';
  import WLink from '@/components/link/src/Link.vue';
  import DatePcikerTable, {
    PickerTableChangeEntity,
  } from '@/components/datepicker/src/DatePickerTable.vue';
  import TimePanel, {
    PanelChangeEntity,
  } from '@/components/timepicker/src/TimePanel.vue';
  import WInput from '@/components/input/src/Input.vue';
  import WIcon from '@/components/icon/src/Icon.vue';
  import { pickerSvg, PickerSvgEntity } from '@/helper/pickersvg';
  import { hasOwn } from '@/helper/o';
  import poperMixin from '@/helper/popermixin';
  import { isString, isUndefined } from '@/helper/type';
  import { setPostion } from '@/helper/poper';
  import { noop } from '@/helper/noop';

  Vue.directive('transfer-dom', TransferDom as any);

  Vue.directive('doc-click', docClick as any);

  export interface ChangeEntity extends PickerTableChangeEntity {
    tableType: string;
  }

  export interface TablePanelChangeEntity {
    tableType: String;
    tableOptions:
      | DateEntity[]
      | MonthInMonthsEntity[]
      | AgesInAgesEntity[]
      | YearInYearsEntity[];
    nowRangeYear: string;
    nowRangeAge: string;
    value: string;
    nowYear: number;
    nowMonth: number;
  }

  @Component({
    components: {
      DatePcikerTable,
      WInput,
      WIcon,
      TimePanel,
      WLink,
    },
  })
  export default class DatePicker extends mixins(poperMixin) {
    pickerSvg: PickerSvgEntity = pickerSvg;

    TIME_FORMAT_DEFAULT: string = TIME_FORMAT_DEFAULT;

    inputChangeTimer = -1;

    inputValue: string = '';

    panelValue: string = '';

    timeValue: string = '';

    isSelectTime: boolean = false;

    oldValue: string = ''; // 点击空白处，日期校验失败恢复之前的value

    trueFormat: string = ''; // 显示的格式

    trueValueFormat: string = ''; // 数据的格式

    mNowObject: Moment = moment(); // 此刻 moment 的对象

    mNowJson: DateEntity = this.mNowObject.toObject(); // 此刻 moment 的 json 对象

    dates: DateEntity[] = [];

    nowRangeYear: string = ''; // 年份区间

    nowRangeAge: string = ''; // 年代区间

    nowYear: number = 0;

    nowMonth: number = 0;

    WEEK_TEXT: string[] = WEEK_TEXT;

    DATE_UNIT_TEXT: string[] = DATE_UNIT_TEXT;

    DATE_UNIT_ENUM: any = DATE_UNIT_ENUM;

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

    tableOptions:
      | DateEntity[]
      | MonthInMonthsEntity[]
      | AgesInAgesEntity[]
      | YearInYearsEntity[] = [];

    clearDisplayStatus = false;

    pickerStatus = false;

    resizeEvent: any = null;

    @Model('model', { type: String, default: undefined })
    readonly value!: string;

    @Prop({
      type: String,
      default: 'date',
    })
    private type!: string;

    @Prop(String) private defaultPickerValue!: string;

    @Prop(String) private placeholder!: string;

    @Prop(String) private size!: string;

    @Prop(String) private format!: string;

    @Prop(String) private valueFormat!: string;

    @Prop({
      type: String,
      default: 'bottom', // 不支持左右
    })
    private placement!: string;

    @Prop({
      type: Number,
      default: 8,
    })
    private interval!: number;

    @Prop({
      type: Number,
      default: 0,
    })
    private firstDayOfWeek!: number; // 0-6

    @Prop(Function) private pickerRender!: Function;

    @Prop(Function) private disabledRender!: Function;

    @Prop(Function) private getContainer!: Function;

    @Prop({
      type: Function,
      default: noop,
    })
    private change!: Function;

    @Prop({
      type: Function,
      default: noop,
    })
    private panelChange!: Function;

    @Prop({
      type: Boolean,
      default: true,
    })
    private transfer!: boolean;

    @Prop(Boolean) private editable!: boolean;

    @Prop(Boolean) private disabled!: boolean;

    @Prop(Boolean) private open!: boolean;

    @Prop({
      type: Boolean,
      default: true,
    })
    private clearable!: boolean;

    @Prop(Boolean) private calendar!: boolean;

    get isWeekOrDate() {
      return this.tableType === 'date' || this.tableType === 'week';
    }

    get pickerClass(): any[] {
      return [
        {
          'w-picker-horbottom': this.isHorBottom,
          'w-picker-hortop': this.isHorTop,
          'w-picker-horleft': this.isVerLeft,
          'w-picker-horright': this.isVerRight,
        },
        {
          'w-picker-calendar': this.calendar,
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

    get headerDate(): string {
      let value: string = '';

      if (this.tableType === 'age') {
        value = this.nowRangeAge;
      }

      if (this.tableType === 'year') {
        value = this.nowRangeYear;
      }

      if (this.tableType === 'month') {
        value = `${this.nowYear} ${DATE_UNIT_TEXT[DATE_UNIT_ENUM.YEAR_ENUM]}`;
      }

      if (this.tableType === 'date') {
        value = `${this.nowYear} ${DATE_UNIT_TEXT[DATE_UNIT_ENUM.YEAR_ENUM]} ${
          this.nowMonth
        } ${DATE_UNIT_TEXT[DATE_UNIT_ENUM.MONTH_ENUM]}`;
      }

      return value;
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
      this.resizeEvent = addDOMEventListener(
        window,
        'resize',
        this.resizeChange,
      );
      this.resizeChange();
    }

    beforeDestroy() {
      this.resizeEvent.remove();
    }

    pickerValue(date: number): string {
      let value: string = '';

      if (this.tableType === 'age') {
        value = this.nowRangeAge;
      }

      if (this.tableType === 'year') {
        value = this.nowRangeYear;
      }

      if (this.tableType === 'month') {
        value = String(this.nowYear);
      }

      if (this.tableType === 'date') {
        value = String(date);
      }

      return value;
    }

    @Watch('value', {
      immediate: true,
    })
    copyValue() {
      this.oldValue = this.value || this.oldValue;
    }

    resizeChange() {
      if (!this.calendar) {
        setPostion(this, 'picker');
      }
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
      this.setTableNowValue(this.mNowJson.value as string);
    }

    initPanel() {
      const momentValue = this.inputValue || this.defaultPickerValue;
      const tableMoment = moment(
        momentValue,
        momentValue ? this.trueFormat : '',
      );
      this.initTable(tableMoment);
    }

    // 类型不一样，渲染的面板也不一样
    initTable(tableMoment: moment.Moment) {
      const mValueJson = handleMomentObject({
        mObject: tableMoment,
        status: 'value',
        format: this.type === 'datetime' ? formatDateDefault : this.trueFormat,
        valueFormat:
          this.type === 'datetime' ? formatDateDefault : this.trueValueFormat,
      });
      this.nowYear = mValueJson.years;
      this.nowMonth = Number(mValueJson.trueMonths);
      this.panelValue = mValueJson.value as string;

      this.setTableValue(mValueJson.value as string);

      if (
        this.type === 'date' ||
        this.type === 'datetime' ||
        this.type === 'week'
      ) {
        this.setTableDate(
          renderDates({
            mObject: tableMoment,
            firstDayOfWeek: this.firstDayOfWeek,
            format:
              this.type === 'datetime' ? formatDateDefault : this.trueFormat,
            valueFormat:
              this.type === 'datetime'
                ? formatDateDefault
                : this.trueValueFormat,
            disabledRender: this.disabledRender,
          }),
        );
        this.tableType = this.type;
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
            const dateMoment: string = moment(
              this.value,
              this.trueValueFormat,
            ).format(formatDateDefault);
            this.inputValue = moment(dateMoment, formatDateDefault).format(
              this.trueFormat,
            );
          } else {
            this.inputValue = moment(value, this.trueFormat).format(
              this.trueFormat,
            );
          }

          if (this.type === 'datetime') {
            this.timeValue = moment(value, this.trueFormat).format(
              TIME_FORMAT_DEFAULT,
            );
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

    tablePanelChange() {
      const params: TablePanelChangeEntity = {
        tableType: this.tableType,
        tableOptions: this.tableOptions,
        nowMonth: this.nowMonth,
        nowYear: this.nowYear,
        nowRangeYear: this.nowRangeYear,
        nowRangeAge: this.nowRangeAge,
        value: this.headerDate,
      };
      this.panelChange(params);
      this.$emit('panelChange', params);
    }

    setTableDate(dates: DateEntity[]) {
      this.tableType = 'date';
      this.tableOptions = cloneDeep(dates);
      this.tableChunkNumber = WEEK_TEXT.length;
      this.tableCol = concat(
        WEEK_TEXT.slice(this.firstDayOfWeek, WEEK_TEXT.length),
        WEEK_TEXT.slice(0, this.firstDayOfWeek),
      );
      this.tableTextValue = 'trueValue';
      this.tablePanelChange();
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
      this.tablePanelChange();
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
      this.setTableValue(
        moment(this.nowYear, this.trueFormat).format(this.trueValueFormat),
      );
      this.tablePanelChange();
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
      this.tablePanelChange();
    }

    // 面板设置年代
    setTableAges() {
      this.tableType = 'age';
      const { ages, range } = renderAges({
        range: this.nowRangeYear,
        format: this.trueFormat,
        valueFormat: valueFormatDateDefault, // 当 type = year 的时候切换头部显示有问题
        disabledRender: this.disabledRender,
      });
      this.tableOptions = ages;
      this.nowRangeAge = range;
      this.setTableNoTh();
      // this.setTableValue(this.nowRangeYear);
      this.tableTextValue = 'trueValue';

      this.tablePanelChange();
    }

    timeChange(params: PanelChangeEntity) {
      this.timeValue = params.value;
      this.change(params);
      // this.$emit('change', params);
      this.$emit('model', this.getDateTimeValue(this.panelValue, params.value));
    }

    getDateTimeValue(panelValue: string, timeValue: string) {
      return moment(`${panelValue} ${timeValue}`, this.trueValueFormat).format(
        this.trueValueFormat,
      );
    }

    pickerTableChange({
      item,
      value,
      type,
      trueValue,
      dateWeek,
      ev,
    }: PickerTableChangeEntity): void {
      if (item.disabled || this.calendar) {
        return;
      }
      // 如果点击的是月份
      if (
        (type === 'month' && this.isWeekOrDate) ||
        (type === 'month' && this.type === 'datetime')
      ) {
        this.nowMonth = Number(trueValue);
        this.renderTableDateInMonth();
      } else if (type === 'year') {
        // 如果点击的是年份
        this.nowYear = Number(trueValue);
        if (this.type === 'month') {
          // 当月份的时候去月份
          this.setTableMonths();
        } else if (
          this.type === 'date' ||
          this.type === 'datetime' ||
          this.type === 'week'
        ) {
          // 当日期的时候去日期
          this.renderTableDateInMonth();
        }
      } else if (type === 'age' && this.type !== 'age') {
        // 如果点击的是年份区间
        this.nowRangeYear = String(trueValue);
        this.setTableYearsByRangeYear();
      }

      const params: ChangeEntity = {
        type,
        value,
        trueValue,
        item,
        dateWeek,
        ev,
        tableType: this.tableType,
      };

      if (
        !isUndefined(this.value) &&
        (this.type === type || (this.type === 'datetime' && type === 'date'))
      ) {
        this.returnModel(params);
      }

      this.$emit('change', params);
      this.change(params);

      // 非当前页面自动跳转到当前页面
      this.$nextTick(() => {
        const { status } = item;
        const isPrev = (dateWeek as []).find(
          (weekItem: any) => weekItem.status === 'prev',
        );
        const isNext = (dateWeek as []).find(
          (weekItem: any) => weekItem.status === 'next',
        );

        if (
          (this.type === 'date' && status === 'next') ||
          (this.type === 'week' && isNext)
        ) {
          this.handleNextMonth();
        }
        if (
          (this.type === 'date' && status === 'prev') ||
          (this.type === 'week' && isPrev)
        ) {
          this.handlePrevMonth();
        }
        this.tableType = type;
      });
    }

    @Emit('model')
    returnModel({ value }: PickerTableChangeEntity): string {
      let newValue = value;
      this.panelValue = moment(value, this.trueValueFormat).format(
        formatDateDefault,
      );

      if (this.type === 'datetime') {
        newValue = this.getDateTimeValue(this.panelValue, this.timeValue);
      }

      this.setTableValue(value);
      this.closePicker();
      return newValue;
    }

    renderTableDateInMonth() {
      this.setTableDate(
        renderDates({
          mObject: moment(
            `${this.nowYear}-${this.nowMonth}`,
            this.type === 'week' ? formatDateDefault : this.trueFormat,
          ),
          firstDayOfWeek: this.firstDayOfWeek,
          format: this.trueFormat,
          valueFormat: this.trueValueFormat,
          disabledRender: this.disabledRender,
        }),
      );
    }

    handleMonth() {
      this.setTableValue(`${String(this.nowYear)}-${String(this.nowMonth)}-01`);
      this.setTableMonths();
    }

    handleYear() {
      this.setTableValue(`${String(this.nowYear)}-${String(this.nowMonth)}-01`);
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
      if (this.tableType === 'month' || this.isWeekOrDate) {
        this.nowYear += 1 * dirNumber;
        if (this.isWeekOrDate) {
          this.renderTableDateInMonth();
        } else {
          this.setTableMonths();
        }
      }
      if (this.tableType === 'year') {
        this.nowYear += 10 * dirNumber;
        this.setTableYearsByYear();
      }

      if (this.tableType === 'age') {
        this.nowYear += 100 * dirNumber;
        this.nowRangeYear = getRangeYear(this.nowYear).range;
        this.setTableAges();
      }
    }

    handleNextYear() {
      this.handleHeaderYear(1);
    }

    handlePrevYear() {
      this.handleHeaderYear(-1);
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
      this.timeValue = '';
      this.panelValue = '';
      this.oldValue = '';
      this.initInput(emptyValue);
      this.setTableValue(emptyValue);
      // 在 datatime 的时候时间重置滚动
      this.$nextTick(() => {
        this.selectDate();
        this.closePicker();
      });

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
      this.pickerStatus = this.open || this.calendar;

      if (this.pickerStatus) {
        // 当一开始的时候有可能位置跑偏，所以 nextTick 一下
        this.$nextTick(() => {
          this.resizeChange();
        });
      }
    }

    openPicker() {
      if (!this.disabled) {
        this.pickerStatus = true;
        this.resizeChange();
      }
    }

    closePicker() {
      this.pickerStatus = this.calendar;
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

    selectTimeFn() {
      this.isSelectTime = !!this.panelValue;
    }

    selectDate() {
      this.isSelectTime = false;
    }
  }
</script>

<style lang="scss">
  @import 'datepicker.scss';
</style>
