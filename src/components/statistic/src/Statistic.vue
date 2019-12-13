<template>
  <div class="w-statistic">
    <div class="w-statistic-title" v-if="title || $slots.title">
      <slot name="title" v-if="$slots.title"></slot>
      <template v-else>{{ title }}</template>
    </div>
    <div
      class="w-statistic-content"
      :class="{
        ['w-statistic-content-render']: isFunction(valueRender),
      }"
      :style="valueStyle"
    >
      <span class="w-statistic-prefix" v-if="$slots.prefix"
        ><slot name="prefix"
      /></span>
      <WStatisticNumber
        v-if="isFunction(valueRender)"
        :valueRender="valueRender"
        :value="value"
      />
      <template v-else>
        <span class="w-statistic-int">{{ int }}</span>
        <span class="w-statistic-decimal">{{ decimal }}</span>
      </template>
      <span class="w-statistic-suffix" v-if="$slots.suffix">
        <slot name="suffix" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Vue } from 'vue-property-decorator';
  import { isNumber, isFunction } from '@/helper/type';
  import WStatisticNumber from '@/components/statistic/src/Number';

  enum NUMBER_TYPE {
    INT_ENUM = 0,
    DECIMAL_ENUM = 1,
  }

  @Component({
    components: {
      WStatisticNumber,
    },
  })
  export default class Statistic extends Vue {
    name: string = 'WStatistic';

    isFunction: Function = isFunction;

    @Model('model', { type: [String, Number], default: 0 }) readonly value!:
      | string
      | number;

    @Prop(Number) private precision!: number;

    @Prop(String) private title!: string;

    @Prop({
      type: String,
      default: ',',
    })
    private groupSeparator!: string;

    @Prop([String, Object]) private valueStyle!: string | object;

    @Prop(Function) private valueRender!: Function;

    get formatValue(): string {
      const newValue = Number(this.value);
      return this.precision
        ? newValue.toFixed(this.precision)
        : String(this.value);
    }

    get contentList(): string[] {
      return this.formatValue.split('.');
    }

    get int(): string {
      const content = this.contentList[NUMBER_TYPE.INT_ENUM];

      const intNumber = Number(content);
      return isNumber(intNumber) && !Number.isNaN(intNumber)
        ? intNumber.toLocaleString().replace(',', this.groupSeparator)
        : content;
    }

    get decimal(): string {
      return this.contentList.length > 1
        ? `.${this.contentList[NUMBER_TYPE.DECIMAL_ENUM]}`
        : '';
    }
  }
</script>

<style lang="scss">
  @import 'statistic.scss';
</style>
