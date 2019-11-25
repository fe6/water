<template>
  <div class="w-calendar">
    <div class="w-calendar-header">
      <div class="w-calendar-header-date">
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
          v-if="tableType === 'date' || tableType === 'month'"
          class="w-picker-header-text"
          @click="handleYear"
          >{{ nowYear }} {{ DATE_UNIT_TEXT[0] }}</span
        >
        <span
          v-if="tableType === 'date'"
          class="w-picker-header-text"
          @click="handleMonth"
          >{{ nowMonth }} {{ DATE_UNIT_TEXT[1] }}</span
        >
      </div>
      <div class="w-calendar-header-handle">
        <WButtonGroup
          class="w-calendar-header-group"
          v-if="tableType === 'date' && newShowDate"
        >
          <WButton type="border" @click="handlePrevMonth">上个月</WButton>
          <WButton type="border" @click="handleNextMonth">下个月</WButton>
        </WButtonGroup>
        <WButtonGroup
          class="w-calendar-header-group"
          v-if="tableType === 'month' && newShowMonth"
        >
          <WButton type="border" @click="handlePrevYear">上一年</WButton>
          <WButton type="border" @click="handleNextYear">下一年</WButton>
        </WButtonGroup>
        <WButtonGroup
          class="w-calendar-header-group"
          v-if="tableType === 'year' && newShowYear"
        >
          <WButton type="border" @click="handlePrevYear">上十年</WButton>
          <WButton type="border" @click="handleNextYear">下十年</WButton>
        </WButtonGroup>
        <WButtonGroup
          class="w-calendar-header-group"
          v-if="tableType === 'age' && newShowAge"
        >
          <WButton type="border" @click="handlePrevYear">上世纪</WButton>
          <WButton type="border" @click="handleNextYear">下世纪</WButton>
        </WButtonGroup>
        <WButtonGroup class="w-calendar-header-group" v-model="tableType">
          <WButton
            type="border"
            value="date"
            v-if="newShowDate"
            @click="handleDate"
            >月</WButton
          >
          <WButton
            type="border"
            :class="{
              ['w-btn-wrap-on']: tableType === 'month',
            }"
            v-if="newShowMonth"
            @click="handleMonth"
            >年</WButton
          >
          <WButton
            type="border"
            :class="{
              ['w-btn-wrap-on']: tableType === 'year',
            }"
            v-if="newShowYear"
            @click="handleYear"
            >年代</WButton
          >
          <WButton
            type="border"
            :class="{
              ['w-btn-wrap-on']: tableType === 'age',
            }"
            v-if="newShowAge"
            @click="handleAge"
            >世纪</WButton
          >
        </WButtonGroup>
      </div>
    </div>
    <WDatePicker
      ref="picker"
      calendar
      :type="type"
      :defaultPickerValue="defaultPickerValue"
      :firstDayOfWeek="firstDayOfWeek"
      :pickerRender="pickerRender"
      :transfer="false"
      @panelChange="panelChange"
    >
      <template
        v-slot:picker="{
          dateItem,
          dateIndex,
          dateWeekIndex,
          dateWeek,
          type,
          headerDate,
          pickerValue,
        }"
      >
        <slot
          :dateItem="dateItem"
          :dateIndex="dateIndex"
          :dateWeekIndex="dateWeekIndex"
          :dateWeek="dateWeek"
          :type="type"
          :headerDate="headerDate"
          :pickerValue="pickerValue"
          name="picker"
        ></slot>
      </template>
    </WDatePicker>
  </div>
</template>

<script lang="ts">
  import moment from 'moment';
  import {
    Component,
    Model,
    Prop,
    // Emit,
    Watch,
    Vue,
  } from 'vue-property-decorator';
  import WDatePicker, {
    PanelChangeEntity,
  } from '@/components/datepicker/src/DatePicker.vue';
  import WButton from '@/components/button/src/Button.vue';
  import WButtonGroup from '@/components/button/src/ButtonGroup.vue';
  import { noop } from '@/helper/noop';
  import { DATE_UNIT_TEXT, formatDateDefault } from '@/helper/date';

  @Component({
    components: {
      WDatePicker,
      WButton,
      WButtonGroup,
    },
  })
  export default class Calendar extends Vue {
    DATE_UNIT_TEXT: string[] = DATE_UNIT_TEXT;

    tableType: string = '';

    nowRangeYear: string = ''; // 年份区间

    nowRangeAge: string = ''; // 年代区间

    nowYear: number = 0;

    nowMonth: number = 0;

    newShowDate: boolean = true;

    newShowMonth: boolean = true;

    newShowYear: boolean = true;

    newShowAge: boolean = true;

    @Model('model', { type: String, default: undefined })
    readonly value!: string;

    @Prop({
      type: String,
      default: 'date', // date month year age
    })
    private type!: string;

    @Prop(String) private defaultPickerValue!: string;

    @Prop({
      type: Boolean,
      default: true,
    })
    private showDate!: boolean;

    @Prop({
      type: Boolean,
      default: true,
    })
    private showMonth!: boolean;

    @Prop({
      type: Boolean,
      default: true,
    })
    private showYear!: boolean;

    @Prop({
      type: Boolean,
      default: true,
    })
    private showAge!: boolean;

    @Prop({
      type: Number,
      default: 0,
    })
    private firstDayOfWeek!: number; // 0-6

    @Prop(Function) private pickerRender!: Function;

    @Prop({
      type: Function,
      default: noop,
    })
    private change!: Function;

    get picker(): any {
      return (this.$refs.picker as any) || null;
    }

    @Watch('type', {
      immediate: true,
    })
    getTableType() {
      this.newShowDate = this.showDate || this.type === 'date';

      this.newShowMonth = this.showMonth || this.type === 'month';

      this.newShowYear = this.showYear || this.type === 'year';

      this.newShowAge = this.showAge || this.type === 'age';
    }

    handleDate() {
      const picker = this.$refs.picker as any;
      picker.setTableValue(moment().format(formatDateDefault));
      picker.renderTableDateInMonth();
    }

    handleMonth() {
      const picker = this.$refs.picker as any;
      picker.handleMonth();
    }

    handleYear() {
      const picker = this.$refs.picker as any;
      picker.handleYear();
    }

    handleAge() {
      const picker = this.$refs.picker as any;
      picker.handleYear();
      picker.handleAge();
    }

    handlePrevMonth() {
      const picker = this.$refs.picker as any;
      picker.handlePrevMonth();
    }

    handleNextMonth() {
      const picker = this.$refs.picker as any;
      picker.handleNextMonth();
    }

    handlePrevYear() {
      const picker = this.$refs.picker as any;
      picker.handlePrevYear();
    }

    handleNextYear() {
      const picker = this.$refs.picker as any;
      picker.handleNextYear();
    }

    panelChange(params: PanelChangeEntity) {
      const {
        nowRangeAge,
        nowRangeYear,
        nowYear,
        nowMonth,
        tableType,
      } = params;

      this.nowRangeAge = nowRangeAge;
      this.nowRangeYear = nowRangeYear;
      this.nowYear = nowYear;
      this.nowMonth = nowMonth;
      this.tableType = String(tableType);

      this.change(params);
      this.$emit('change', params);
    }
  }
</script>

<style lang="scss">
  @import 'calendar.scss';
</style>
