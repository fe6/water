<!-- @format -->

<template>
  <div>
    <!-- <Timepicker disabled @change="change" /> -->
    {{ value1 }}-
    <Timepicker v-model="value1" @change="change" open />
    <!-- {{ valueDisabled }}-
    <Timepicker
      v-model="valueDisabled"
      :disabledHourRender="disabledHourRender"
      :disabledMinuteRender="disabledMinuteRender"
      :disabledSecondRender="disabledSecondRender"
    /> -->
  </div>
</template>

<script lang="ts">
  import moment from 'moment';
  import { Component, Vue } from 'vue-property-decorator';
  import Timepicker from '@/components/timepicker/src/Timepicker.vue';
  import { DisabledRenderEntity } from '@/components/timepicker/src/TimePanel.vue';
  import { TIME_VALUE_FORMAT_DEFAULT } from '@/helper/time';

  @Component({
    components: {
      Timepicker,
    },
  })
  export default class TimepickerView extends Vue {
    name: string = '';

    value1: string = '12:12:12';

    valueDisabled: string = '13:13:13';

    disabledHourRender({
      time,
      minute,
      second,
    }: DisabledRenderEntity): boolean {
      this.name = '';
      console.log(
        minute,
        second,
        moment(
          `${time}:${minute}:${second}`,
          TIME_VALUE_FORMAT_DEFAULT,
        ).isBefore(moment('12:12:12', TIME_VALUE_FORMAT_DEFAULT)),
        'params disabled render',
      );
      return moment(
        `${time}:${minute}:${second}`,
        TIME_VALUE_FORMAT_DEFAULT,
      ).isBefore(moment('12:12:12', TIME_VALUE_FORMAT_DEFAULT));
    }

    disabledMinuteRender({
      time,
      hour,
      second,
    }: DisabledRenderEntity): boolean {
      this.name = '';
      // console.log(
      //   hour,
      //   minute,
      //   second,
      //   // moment(
      //   //   `${hour}:${minute}:${second}`,
      //   //   TIME_VALUE_FORMAT_DEFAULT
      //   // ).format(TIME_VALUE_FORMAT_DEFAULT),
      //   'params disabled render'
      // );
      return moment(
        `${hour}:${time}:${second}`,
        TIME_VALUE_FORMAT_DEFAULT,
      ).isBefore(moment('12:12:12', TIME_VALUE_FORMAT_DEFAULT));
    }

    disabledSecondRender({
      time,
      hour,
      minute,
    }: DisabledRenderEntity): boolean {
      this.name = '';
      // console.log(
      //   hour,
      //   minute,
      //   second,
      //   // moment(
      //   //   `${hour}:${minute}:${second}`,
      //   //   TIME_VALUE_FORMAT_DEFAULT
      //   // ).format(TIME_VALUE_FORMAT_DEFAULT),
      //   'params disabled render'
      // );
      return moment(
        `${hour}:${minute}:${time}`,
        TIME_VALUE_FORMAT_DEFAULT,
      ).isBefore(moment('12:12:12', TIME_VALUE_FORMAT_DEFAULT));
    }

    change(params: any) {
      console.log(params, 'params change');
    }
  }
</script>
