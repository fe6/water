<template>
  <div>
    <!-- --{{value3}}
    <WDatePicker
      v-model="value3"
      valueFormat="YYYY++MM++DD++"
      format="YYYY年MM月DD日"
    ></WDatePicker> -->

    <!-- --{{value33}}
    <WDatePicker
      type="month"
      v-model="value33"
      valueFormat="YYYY++MM++"
      format="YYYY年MM月"
    ></WDatePicker> -->

    <!-- --{{value333}}
    <WDatePicker
      type="year"
      v-model="value333"
      valueFormat="YYYY年"
      format="YYYY++"
      open
    ></WDatePicker> -->

    <!-- --{{value3333}}
    <WDatePicker
      type="age"
      v-model="value3333"
      valueFormat="YYYY||YYYY"
      format="YYYY++YYYY"
      open
    ></WDatePicker> -->

    <!-- <WDatePicker v-model="value1" size="large"></WDatePicker>
    <WDatePicker v-model="value1"></WDatePicker>
    <WDatePicker v-model="value1" size="small"></WDatePicker> -->
    <!-- <WDatePicker placeholder="sadf"></WDatePicker> -->
    <!-- <WDatePicker v-model="value1" :clearable="false"></WDatePicker> -->
    <!-- <WDatePicker v-model="value1" disabled></WDatePicker> -->
    <!-- <WDatePicker v-model="value1">
      <svg
        slot="clear"
        viewBox="64 64 896 896"
        focusable="false"
        width="1em"
        fill="#f00"
        height="1em"
        aria-hidden="true">
          <path :d="pickerSvg.calendarPath"></path>
      </svg>
    </WDatePicker> -->
    <!-- <WDatePicker type="month" v-model="value2" /> -->

    <!-- --{{value44}}-<br>
    ==== -->
    <!-- <WDatePicker type="week" v-model="value44" open></WDatePicker> -->
    <!-- --{{value4}}-<br>
    <WDatePicker
      type="week"
      v-model="value4"
      format="YYYY 第 WW 周"
      valueFormat="YYYY||WW++"
    ></WDatePicker> -->

    <!-- ---{{value1}}___
    <WDatePicker></WDatePicker> -->

    <!-- <WDatePicker type="date" :pickerRender="renderDate" /> -->

    <!-- <WDatePicker type="date" :disabledRender="disabledRenderDate" />
    <WDatePicker type="month" :disabledRender="disabledRenderMonth" />
    <WDatePicker type="year" :disabledRender="disabledRenderYear" />
    <WDatePicker type="age" :disabledRender="disabledRenderAge" /> -->

    <!-- <WDatePicker type="date" />
    <WDatePicker type="month" />
    <WDatePicker type="year" />
    <WDatePicker type="age" /> -->

    <!-- <WDatePicker v-model="value1" /> -->
    <!-- <WDatePicker defaultPickerValue="1997-12-12" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WDatePicker from '@/components/datepicker/DatePicker.vue';
import { pickerSvg, PickerSvgEntity } from '@/helper/pickersvg';

@Component({
  components: {
    WDatePicker,
  },
})
export default class DatePickerView extends Vue {
  pickerSvg: PickerSvgEntity = pickerSvg;

  value1: string = '1999-11-10';

  value2: string = '1999-11';

  value3: string = '1999++01++01++';

  value33: string = '1999++01++';

  value333: string = '1999++';

  value3333: string = '1999++2009';

  value4: string = '2019||41++';

  value44: string = '2019-41';

  renderDate(h: Function, a: any) {
    this.value3 = '123';
    const style: any = {};

    if (a.dateItem.date === 1) {
      style.border = '1px solid #1890ff';
      style.borderRadius = '50%';
    }

    if (a.dateItem.date === 3) {
      style.border = '1px solid #f00';
      style.borderRadius = '50%';
    }

    return h('div', {
      class: 'w-picker-date',
      style,
    }, a.dateItem.trueValue);
  }

  disabledRenderDate(a: any) {
    this.value3 = '1999++01++01++';
    return a.item.date < 25;
  }

  disabledRenderMonth(a: any) {
    this.value3 = '1999++01++01++';
    return a.item.months < 3;
  }

  disabledRenderYear(a: any) {
    this.value3 = '1999++01++01++';
    return a.item.years < 2017;
  }

  disabledRenderAge(a: any) {
    this.value3 = '1999++01++01++';
    const { start } = a.item;
    return start.years < 2050;
  }
}
</script>
