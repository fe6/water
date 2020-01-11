<!-- @format -->

<template>
  <div class="w-timepanel">
    <TimeList
      :class="`w-timelist-list-${listLength}`"
      :times="hours"
      :disabledRender="disabledHourRender"
      type="hour"
      v-model="hour"
      v-if="hasHour"
      :hour="hour"
      :minute="minute"
      :second="second"
      @change="hourChange"
      ref="hour"
    />
    <TimeList
      :class="`w-timelist-list-${listLength}`"
      :times="minutes"
      :disabledRender="disabledMinuteRender"
      type="minute"
      v-model="minute"
      v-if="hasMinute"
      :hour="hour"
      :minute="minute"
      :second="second"
      @change="minuteChange"
      ref="minute"
    />
    <TimeList
      :class="`w-timelist-list-${listLength}`"
      :times="seconds"
      :disabledRender="disabledSecondRender"
      type="second"
      v-model="second"
      v-if="hasSecond"
      :hour="hour"
      :minute="minute"
      :second="second"
      @change="secondChange"
      ref="second"
    />
  </div>
</template>

<script lang="ts">
  import moment from 'moment';
  import {
    Component,
    Model,
    Prop,
    Emit,
    Watch,
    Vue,
  } from 'vue-property-decorator';
  import WScroll from '@/components/scroll/src/Scroll.vue';
  import TimeList from '@/components/timepicker/src/TimeList.vue';
  import {
    genHours,
    genMinutes,
    genSeconds,
    TIME_VALUE_FORMAT_DEFAULT,
    TIME_FORMAT_DEFAULT,
    rgHour,
    rgMin,
    rgSec,
  } from '@/helper/time';

  export interface PanelChangeEntity {
    value: string;
    text: string;
  }

  export interface DisabledRenderEntity {
    time: string;
    hour: string;
    minute: string;
    second: string;
  }

  @Component({
    components: {
      WScroll,
      TimeList,
    },
  })
  export default class TimePanel extends Vue {
    hour: string = '00';

    minute: string = '00';

    second: string = '00';

    hours: string[] = [];

    minutes: string[] = [];

    seconds: string[] = [];

    @Model('model', {
      type: String,
      default: '',
    })
    readonly value!: string;

    @Prop({
      type: String,
      default: TIME_FORMAT_DEFAULT,
    })
    private format!: string;

    @Prop({
      type: String,
      default: TIME_VALUE_FORMAT_DEFAULT,
    })
    private valueFormat!: string;

    @Prop(Function) private disabledHourRender!: Function;

    @Prop(Function) private disabledMinuteRender!: Function;

    @Prop(Function) private disabledSecondRender!: Function;

    get hasHour(): boolean {
      return rgHour.test(this.valueFormat) || rgHour.test(this.format);
    }

    get hasMinute(): boolean {
      return rgMin.test(this.valueFormat) || rgMin.test(this.format);
    }

    get hasSecond(): boolean {
      return rgSec.test(this.valueFormat) || rgSec.test(this.format);
    }

    get listLength(): number {
      return [this.hasHour, this.hasMinute, this.hasSecond].filter(
        (item: boolean): boolean => item === true,
      ).length;
    }

    mounted() {
      this.initHours();
      this.initMinutes();
      this.initSeconds();
    }

    @Watch('value', {
      immediate: true,
    })
    getTimes() {
      let replaceTime = 0;

      this.value.replace(/(\d+)/g, ($1) => {
        if (replaceTime === 0) {
          this.hour = $1;
        }
        if (replaceTime === 1) {
          this.minute = $1;
        }
        if (replaceTime === 2) {
          this.second = $1;
        }
        replaceTime++;
        return 'water';
      });

      if (!this.value) {
        this.hour = '00';
        this.minute = '00';
        this.second = '00';
      }

      this.scrollTimesToNow();
    }

    initHours() {
      this.hours = genHours();
    }

    initMinutes() {
      this.minutes = genMinutes();
    }

    initSeconds() {
      this.seconds = genSeconds();
    }

    scrollTimesToNow() {
      this.scrollNow('hour');
      this.scrollNow('minute');
      this.scrollNow('second');
    }

    scrollNow(timeKey: string) {
      this.$nextTick(() => {
        const scrollEle = this.$refs[timeKey] as any;
        if (scrollEle) {
          scrollEle.scrollTo(
            (this as any)[`${timeKey}s`].findIndex(
              (timeItem: string) => timeItem === (this as any)[timeKey],
            ),
          );
        }
      });
    }

    formatNewValue(format: string = this.valueFormat): string {
      const hour = this.hour || '00';
      const minute = this.minute || '00';
      const second = this.second || '00';
      return moment(`${hour}:${minute}:${second}`, format).format(format);
    }

    @Emit('change')
    hourChange(newHour: string): PanelChangeEntity {
      this.hour = newHour;
      const newValue = this.formatNewValue();

      this.returnModel(newValue);

      return {
        value: newValue,
        text: this.formatNewValue(this.format),
      };
    }

    @Emit('change')
    minuteChange(newMinute: string): PanelChangeEntity {
      this.minute = newMinute;
      const newValue = this.formatNewValue();

      this.returnModel(newValue);

      return {
        value: newValue,
        text: this.formatNewValue(this.format),
      };
    }

    @Emit('change')
    secondChange(newSecond: string): PanelChangeEntity {
      this.second = newSecond;
      const newValue = this.formatNewValue();

      this.returnModel(newValue);

      return {
        value: newValue,
        text: this.formatNewValue(this.format),
      };
    }

    @Emit('model')
    returnModel(value: string): string {
      return value;
    }
  }
</script>

<style lang="scss">
  @import 'timepanel.scss';
</style>
