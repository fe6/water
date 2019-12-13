<template>
  <WStatistic
    :title="title"
    :valueStyle="valueStyle"
    v-model="content"
    ref="statistic"
    :valueRender="formatCountdown"
  >
    <template slot="prefix" v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </template>
    <template slot="suffix" v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </template>
  </WStatistic>
</template>

<script lang="ts">
  import moment, { Moment } from 'moment';
  import { Component, Model, Prop, Vue } from 'vue-property-decorator';
  import WStatistic from '@/components/statistic/src/Statistic.vue';
  import {
    getTime,
    REFRESH_INTERVAL,
    formatCountdown,
    MS_FORMAT,
  } from '@/components/countdown/src/utils';
  import { TIME_VALUE_FORMAT_DEFAULT } from '@/helper/time';
  import { isString, isNumber } from '@/helper/type';
  import { noop } from '@/helper/noop';

  @Component({
    components: {
      WStatistic,
    },
  })
  export default class Countdown extends Vue {
    name: string = 'WCountdown';

    countdownId: number | undefined = undefined;

    content: string | number | Moment = '';

    @Model('model', {
      type: [String, Object, Number],
      default: '',
    })
    readonly value!: string | Moment | number;

    @Prop([String, Object]) private valueStyle!: string | object;

    @Prop(String) private title!: string;

    @Prop({
      type: String,
      default: TIME_VALUE_FORMAT_DEFAULT,
    })
    private format!: string;

    @Prop({
      type: Function,
      default: noop,
    })
    private finish!: Function;

    created() {
      this.initContent();
    }

    mounted() {
      this.syncTimer();
    }

    beforeDestroy() {
      this.stopTimer();
    }

    syncTimer() {
      const { value } = this.$props;
      const timestamp = getTime(value, this.format);

      if (timestamp >= Date.now()) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }

    startTimer() {
      if (this.countdownId) return;
      this.countdownId = window.setInterval(() => {
        (this.$refs.statistic as any).$forceUpdate();
      }, REFRESH_INTERVAL);
    }

    stopTimer() {
      const { value } = this.$props;
      if (this.countdownId) {
        clearInterval(this.countdownId);
        this.countdownId = undefined;

        const timestamp = getTime(value, this.format);
        if (timestamp < Date.now()) {
          this.$emit('finish');
          this.finish();
        }
      }
    }

    formatCountdown(createdElement: any) {
      const { value, isGo } = formatCountdown(this.value, this.format);
      if (!isGo) {
        this.stopTimer();
      }
      return createdElement(
        'span',
        {
          class: 'w-statistic-int',
        },
        value
      );
    }

    initContent() {
      const valueMoment =
        isString(this.value) || isNumber(this.value)
          ? moment(this.value, MS_FORMAT)
          : (this.value as Moment);
      this.content = valueMoment.isValid()
        ? valueMoment.format(MS_FORMAT)
        : moment(this.value).format(MS_FORMAT);
    }
  }
</script>

<style lang="scss">
  @import 'countdown.scss';
</style>
