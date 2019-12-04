<template>
  <div>
    -{{ value1 }}-
    <WCountdown v-model="value1" />
    <WCountdown title="倒计时" v-model="value1" format="HH:mm:ss:SSS" />
    <WCountdown
      v-model="value1"
      format="D 天 HH:mm:ss:SSS"
      valueStyle="color: red"
    />
    <WCountdown title="国安主场夺冠" v-model="value1" valueStyle="color: red">
      <template slot="prefix">
        <span style="padding-top: 4px; display: block;">预计</span>
      </template>
      <template slot="suffix">之后开始</template>
    </WCountdown>
  </div>
</template>

<script lang="ts">
  import moment, { Moment } from 'moment';
  import { Component, Vue } from 'vue-property-decorator';
  import WCountdown from '@/components/countdown/src/Countdown.vue';
  import WIcon from '@/components/icon/src/Icon.vue';
  import { TIME_VALUE_FORMAT_DEFAULT } from '@/helper/time';

  @Component({
    components: {
      WCountdown,
      WIcon,
    },
  })
  export default class CountdownView extends Vue {
    TIME_VALUE_FORMAT_DEFAULT: string = TIME_VALUE_FORMAT_DEFAULT;

    value1: number = moment('16:44:00', 'HH:mm:ss').valueOf();
    // value1: number = moment('16:44:00', 'HH:mm:ss');
    // value1: number = Date.now() + 1000 * 5;
    // value1: number = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

    // value1: Moment = moment().add(5, 'second');

    value2: Moment = moment().add(5, 'second');
  }
</script>
