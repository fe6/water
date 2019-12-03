<template>
  <div class="w-statistic">
    <div class="w-statistic-title" v-if="title || $slots.title">
      <slot name="title" v-if="$slots.title"></slot>
      <template v-else>{{ title }}</template>
    </div>
    <div class="w-statistic-content" :style="valueStyle">
      <span class="w-statistic-prefix" v-if="$slots.prefix"
        ><slot name="prefix"
      /></span>
      <span class="w-statistic-int">{{ content }}</span>
      <span class="w-statistic-decimal">{{ decimal }}</span>
      <span class="w-statistic-suffix" v-if="$slots.suffix">
        <slot name="suffix" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Vue } from 'vue-property-decorator';
  import { isNumber } from '@/helper/type';

  enum NUMBER_TYPE {
    INT_ENUM = 0,
    DECIMAL_ENUM = 1,
  }

  @Component({
    components: {},
  })
  export default class Statistic extends Vue {
    name: string = 'WStatistic';

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

    get formatValue(): string {
      const newValue = Number(this.value);
      return this.precision
        ? newValue.toFixed(this.precision)
        : String(this.value);
    }

    get contentList(): string[] {
      return this.formatValue.split('.');
    }

    get content(): string {
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
