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

    <!-- --{{ valueYearFormat }}
    <WDatePicker
      type="year"
      v-model="valueYearFormat"
      valueFormat="YYYY年"
      format="YYYY++"
      open
    ></WDatePicker> -->

    <!-- --{{ valueAgeFormat }}
    <WDatePicker
      type="age"
      v-model="valueAgeFormat"
      valueFormat="YYYY||YYYY"
      format="YYYY++YYYY"
      open
    ></WDatePicker> -->

    <!-- <WDatePicker v-model="value1"></WDatePicker> -->
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
    --{{ value4 }}-<br />
    <WDatePicker
      type="week"
      v-model="value4"
      format="YYYY 第 WW 周"
      valueFormat="YYYY||WW++"
    ></WDatePicker>

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

    <!-- {{ valueYear }}
    <WDatePicker v-model="valueYear" type="year" format="YYYY年" /> -->

    <!-- <WDatePicker disabled type="month" v-model="value2" /> -->

    <!-- <WDatePicker @change="change" v-model="value1" /> -->
    <!-- <WDatePicker v-model="value1" /> -->
    <!-- <WDatePicker defaultPickerValue="1997-12-12" /> -->
    <!-- <WDatePicker v-model="value1" style="width: 1000px" @change="change">
      <div>123{{ value1 }}</div>
    </WDatePicker> -->

    <!-- <WDatePicker v-model="valueTime" type="datetime" open></WDatePicker> -->
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import WDatePicker from '@/components/datepicker/src/DatePicker.vue';
  import { pickerSvg, PickerSvgEntity } from '@/helper/pickersvg';

  @Component({
    components: {
      WDatePicker,
    },
  })
  export default class DatePickerView extends Vue {
    pickerSvg: PickerSvgEntity = pickerSvg;

    value1 = '1999-11-10';

    value2 = '1999-11';

    value3 = '1999++01++01++';

    value33 = '1999++01++';

    valueYearFormat = '1999年';

    valueAgeFormat = '1999||2009';

    value4 = '2019||41++';

    value44 = '2019-41';

    valueYear = '2000';

    valueTime = '2019-10-10 10:10:10';

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

      return h(
        'div',
        {
          class: 'w-picker-date',
          style,
        },
        a.dateItem.trueValue
      );
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

    change(params: any) {
      this.value3 = '1999++01++01++';
      console.log(params, 'params');
    }
  }
</script>
