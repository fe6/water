<template>
  <div>
    <!-- <WCountdown v-model="value1" />
    <WCountdown v-model="value1" /> -->
    {{ value1.format(TIME_VALUE_FORMAT_DEFAULT) }}
    <WCountdown v-model="value1" format="HH:mm:ss:SSS" />
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

    value1: Moment = moment().add(5, 'second');

    value2: number = 12345.29;
  }
</script>
