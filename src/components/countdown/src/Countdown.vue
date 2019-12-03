<template>
  <WStatistic :title="title" v-model="content">
    Countdown
  </WStatistic>
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
      this.countTimes1();
      // this.countTimes();
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

    countTimes() {
      const mTime = this.value ? moment(this.value, this.format) : moment();
      const nowMoment = moment();

      console.log(mTime.diff(nowMoment), (mTime as any).valueOf(), 890);

      if (mTime.diff(nowMoment) > 0) {
        this.autoTime(mTime, nowMoment);
      }
    }

    autoTime(mTime: Moment, now: Moment) {
      if (this.getValueByFormat(mTime) >= this.getValueByFormat(now)) {
        const newTime = mTime.subtract(
          this.countdownType !== 'millisecond' ? 1 : 5,
          this.countdownType
        );
        this.content = this.getValueByFormat(newTime);

        console.log(
          this.getValueByFormat(mTime),
          this.getValueByFormat(now),
          this.countdownTime,
          this.content,
          this.getValueByFormat(newTime)
        );
        this.countdownId = setTimeout(() => {
          this.autoTime(newTime, now);
        }, this.countdownTime);
      } else {
        clearTimeout(this.countdownId);
        this.countdownId = undefined;
        console.log('end time');
      }
    }

    countTimes1() {
      const mTime = this.value ? moment(this.value, this.format) : moment();
      const currentSamp = moment().valueOf();

      this.autoTime1(mTime.format(this.format), currentSamp);
    }

    autoTime1(value: string, samp: number) {
      const targetMoment = moment(value, this.format);
      const currentMoment = moment();
      const target = targetMoment.valueOf();
      const current = samp;
      const diff = Math.max(target - current, 0);
      console.log(
        11,
        // this.getValueByFormat(this.value as any),
        // currentMoment.diff(targetMoment),
        // this.getValueByFormat(targetMoment),
        // this.getValueByFormat(currentMoment),
        target - current,
        target,
        current,
        diff
      );

      if (diff > 0) {
        this.content = formatTimeStr(diff, this.format);

        console.log(
          123,
          target,
          current,
          this.content,
          formatTimeStr(diff, this.format)
        );
        this.countdownId = setInterval(() => {
          this.autoTime1(this.content, samp);
        }, 1000);
      } else {
        clearInterval(this.countdownId);
        this.countdownId = undefined;
        console.log('end time');
      }
    }
  }
</script>

<style lang="scss">
  @import 'countdown.scss';
</style>
