<template>
  <WStatistic
    :title="title"
    v-model="content"
    ref="statistic"
    :valueRender="formatCountdown"
  ></WStatistic>
</template>

<script lang="ts">
  import moment, {
    Moment,
    MomentInput,
    MomentFormatSpecification,
  } from 'moment';
  import padStart from 'lodash/padStart';
  import { Component, Model, Prop, Vue } from 'vue-property-decorator';
  import WStatistic from '@/components/statistic/src/Statistic.vue';
  import { TIME_VALUE_FORMAT_DEFAULT } from '@/helper/time';
  import { isString } from '@/helper/type';

  export const interopDefault = (m: any) => m.default || m;

  const REFRESH_INTERVAL = 1000 / 30;

  // Countdown
  const timeUnits: [string, number, string][] = [
    ['Y', 1000 * 60 * 60 * 24 * 365, 'year'], // years
    ['M', 1000 * 60 * 60 * 24 * 30, 'month'], // months
    ['D', 1000 * 60 * 60 * 24, 'day'], // days
    ['H', 1000 * 60 * 60, 'hour'], // hours
    ['m', 1000 * 60, 'minute'], // minutes
    ['s', 1000, 'second'], // seconds
    ['S', 1, 'millisecond'], // million seconds
  ];

  enum COUNTDOWN_ENUM {
    TIME_ENUM = 1,
    TYPE_ENUM = 2,
  }

  export function formatTimeStr(duration: number, format: string) {
    let leftDuration: number = duration;

    const escapeRegex = /\[[^\]]*\]/g;
    const keepList: string[] = (format.match(escapeRegex) || []).map((str) =>
      str.slice(1, -1)
    );
    const templateText = format.replace(escapeRegex, '[]');

    const replacedText = timeUnits.reduce((current, [name, unit]) => {
      if (current.indexOf(name) !== -1) {
        const value = Math.floor(leftDuration / unit);
        leftDuration -= value * unit;
        return current.replace(new RegExp(`${name}+`, 'g'), (match: string) => {
          const len = match.length;
          return padStart(value.toString(), len, '0');
        });
      }
      return current;
    }, templateText);

    let index = 0;

    return replacedText.replace(escapeRegex, () => {
      const match = keepList[index];
      index += 1;
      return match;
    });
  }

  export function formatCountdown(value: any, format: string) {
    const target = interopDefault(moment)(value, format).valueOf();
    const current = interopDefault(moment)().valueOf();
    const diff = Math.max(target - current, 0);
    return {
      value: formatTimeStr(diff, format),
      isGo: diff > 0,
    };
  }

  export const getTime = (
    value: MomentInput,
    format: MomentFormatSpecification
  ) => moment(value, format).valueOf();

  @Component({
    components: {
      WStatistic,
    },
  })
  export default class Countdown extends Vue {
    name: string = 'WCountdown';

    countdownId: number | undefined = undefined;

    content: string = '';

    countdownTime: number = 0;

    countdownType: any = 'second';

    @Model('model', {
      type: [String, Object],
      default: '',
    })
    readonly value!: string | Moment;

    @Prop(String) private title!: string;

    @Prop({
      type: String,
      default: TIME_VALUE_FORMAT_DEFAULT,
    })
    private format!: string;

    created() {
      this.initContent();
      this.configCountDown();
    }

    mounted() {
      this.syncTimer();
    }

    updated() {
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
      // (this.$refs.statistic as any).$forceUpdate();
      // console.log(REFRESH_INTERVAL, 'REFRESH_INTERVAL');
    }

    stopTimer() {
      const { value } = this.$props;
      if (this.countdownId) {
        clearInterval(this.countdownId);
        this.countdownId = undefined;

        const timestamp = getTime(value, this.format);
        if (timestamp < Date.now()) {
          this.$emit('finish');
        }
      }
    }

    formatCountdown(createdElement: any, params: any) {
      const { value, isGo } = formatCountdown(params.value, this.format);
      if (!isGo) {
        this.stopTimer();
      }
      return createdElement('div', value);
    }

    configCountDown() {
      const newTimeUnits = timeUnits.filter(([name]) =>
        new RegExp(`${name}+`, 'g').test(this.format)
      );
      const len = newTimeUnits.length;
      const unit =
        len > 0 ? newTimeUnits[len - 1] : timeUnits[timeUnits.length - 1];
      this.countdownTime = unit[COUNTDOWN_ENUM.TIME_ENUM];
      this.countdownType = unit[COUNTDOWN_ENUM.TYPE_ENUM];
    }

    initContent() {
      const valueMoment = isString(this.value)
        ? moment(this.value, this.format)
        : (this.value as Moment);
      this.content = valueMoment.isValid()
        ? this.getValueByFormat(valueMoment)
        : (this.value as string);
    }

    getValueByFormat(mTime: Moment) {
      return mTime.format(this.format);
    }
  }
</script>

<style lang="scss">
  @import 'countdown.scss';
</style>
