<!-- @format -->

<template>
  <div v-if="isNormalMode" class="w-page">
    <span v-if="totalText" class="w-page-text">{{ totalText }}</span>
    <w-button
      :class="[
        'w-page-button w-page-prev',
        {
          ['w-page-prev-sm']: isSmallSize,
          ['w-page-prev-disable']: prevDisable,
        },
      ]"
      :size="size"
      type="border"
      :disabled="prevDisable"
      @click="prevPage"
    >
      <template v-if="prevText">{{ prevText }}</template>
      <i v-else class="w-page-simple-arrow w-page-simple-arrow-prev"></i>
    </w-button>
    <!-- 第一页 start -->
    <w-button
      v-if="
        midleNumber[0] > 1 &&
          current > midleSizeValue - (midleSizeValue - 1) / 2
      "
      :class="[
        'w-page-button',
        {
          ['w-page-button-sm']: isSmallSize,
        },
        'w-page-first',
      ]"
      :type="current === 0 ? '' : 'border'"
      :size="size"
      @click.native="setNow(1)"
      >1</w-button
    >
    <!-- 第一页 end -->
    <!-- 左 ••• start -->
    <div
      v-if="midleNumber[0] > 2"
      class="w-page-over"
      :class="[
        {
          ['w-page-over-sm']: isSmallSize,
        },
        'w-page-over-prev',
        {
          ['w-page-over-prev-sm']: isSmallSize,
        },
      ]"
      @click="setNow(current - 5)"
    ></div>
    <!-- 左 ••• end -->

    <!-- <w-button-group :class="['w-page-button-group']"> -->
    <w-button
      v-for="midle in midleNumber"
      :key="midle"
      :class="[
        'w-page-button',
        {
          ['w-page-button-sm']: isSmallSize,
        },
      ]"
      :size="size"
      :type="current === midle ? '' : 'border'"
      @click.native="setNow(midle)"
      >{{ midle }}</w-button
    >
    <!-- </w-button-group> -->

    <!-- 右 ••• start  v-if="current < 7" -->
    <div
      v-if="
        midleNumber[midleNumber.length - 1] < pageNumber &&
          current < pageNumber - (midleSizeValue - 1) / 2 - 1
      "
      class="w-page-over"
      :class="[
        {
          ['w-page-over-sm']: isSmallSize,
        },
        'w-page-over-next',
        {
          ['w-page-over-next-sm']: isSmallSize,
        },
      ]"
      @click="setNow(current + 5)"
    ></div>
    <!-- 右 ••• end -->
    <!-- 最后一页 start  v-if="current < 8" -->
    <w-button
      v-if="
        midleNumber[midleNumber.length - 1] < pageNumber &&
          current < pageNumber - (midleSizeValue - 1) / 2
      "
      :class="[
        'w-page-button',
        {
          ['w-page-button-sm']: isSmallSize,
        },
        'w-page-last',
      ]"
      :size="size"
      :type="current === midleNumber[midleNumber.length - 1] ? '' : 'border'"
      @click.native="setNow(pageNumber)"
      >{{ pageNumber }}</w-button
    >
    <!-- 最后一页 end -->
    <w-button
      :class="[
        'w-page-button w-page-next',
        {
          ['w-page-next-sm']: isSmallSize,
          ['w-page-next-disable']: nextDisable,
        },
      ]"
      :size="size"
      type="border"
      :disabled="nextDisable"
      @click="nextPage"
    >
      <template v-if="nextText">{{ nextText }}</template>
      <i v-else class="w-page-simple-arrow w-page-simple-arrow-next"></i>
    </w-button>
  </div>
  <!-- simple start -->
  <div v-else class="w-page">
    <a
      class="w-page-simple-button w-page-simple-prev"
      :class="{
        ['w-page-simple-button-disabled']: prevDisable,
      }"
      href="javascript:;"
      @click="!prevDisable && setNow(current - 1)"
    >
      <i class="w-page-simple-arrow w-page-simple-arrow-prev"></i>
    </a>
    <w-input
      v-model="current"
      class="w-page-now"
      size="small"
      @keyup.enter.native="simpleChange($event)"
    />
    <i class="w-page-italic">/</i>
    <span class="w-page-total">5</span>
    <a
      class="w-page-simple-button w-page-simple-next"
      :class="{
        ['w-page-simple-button-disabled']: nextDisable,
      }"
      href="javascript:;"
      @click="!nextDisable && setNow(current + 1)"
    >
      <i class="w-page-simple-arrow w-page-simple-arrow-next"></i>
    </a>
  </div>
  <!-- simple end -->
</template>

<script lang="ts">
  import {
    Component,
    Model,
    Prop,
    Emit,
    Vue,
    Watch,
  } from 'vue-property-decorator';
  import { noop } from '@/helper/noop';
  import WInput from '@/components/input/src/Input.vue';
  import WButton from '@/components/button/src/Button.vue';
  import WButtonGroup from '@/components/button/src/ButtonGroup.vue';

  interface ShowTotalEntity {
    showTotal: Function;
  }

  @Component({
    components: {
      WButton,
      WButtonGroup,
      WInput,
    },
  })
  export default class Page extends Vue {
    name = 'WPage';

    current = 1;

    @Model('model', { type: Number }) readonly value!: number;

    @Prop(String) private prevText!: string;

    @Prop(String) private nextText!: string;

    @Prop(String) private size!: string;

    @Prop({
      type: Number,
      default: 50,
    })
    private total!: number;

    @Prop({
      type: Number,
      default: 5,
    })
    private midleSize!: number;

    @Prop({
      type: Number,
      default: 10,
    })
    private pageSize!: number;

    @Prop(Boolean) private simple!: boolean;

    @Prop({
      type: Function,
      default: noop,
    })
    private change?: Function;

    @Prop({
      type: Function,
      default: noop,
    })
    private showTotal!: Function;

    get isNormalMode(): boolean {
      return !this.simple;
    }

    get isSmallSize(): boolean {
      return this.isNormalMode && this.size === 'small';
    }

    get pageNumber(): number {
      return Math.ceil(this.total / this.pageSize);
    }

    get nextDisable(): boolean {
      return this.current >= this.pageNumber;
    }

    get prevDisable(): boolean {
      return this.current < 2;
    }

    get midleSizeValue(): number {
      let length =
        this.midleSize % 2 === 0 ? this.midleSize + 1 : this.midleSize;
      // 最大 7
      length = Math.min(length, 7);
      // 最大 3
      length = Math.max(length, 3);
      // 并且不能大于总页数
      length = Math.min(length, this.pageNumber);
      return length;
    }

    get midleNumber(): number[] {
      const midle = [];
      // 四舍五入，当 100 条，每页 20 条
      const step = Math.ceil((this.midleSizeValue - 1) / 2);
      let first = Math.min(
        this.current > step ? this.current - step : 1,
        this.pageNumber - this.midleSizeValue + 1,
      );
      while (midle.length < this.midleSizeValue) {
        midle.push(first++);
      }
      return midle;
    }

    get itemEnd(): number {
      return (
        this.pageSize * (this.current - 1) +
        (Math.ceil(this.total / this.pageSize) === this.current
          ? this.total % this.pageSize
          : this.pageSize)
      );
    }

    get totalText(): string {
      return (this.showTotal as Function)({
        total: this.total,
        range: [1 + this.pageSize * (this.current - 1), this.itemEnd],
      });
    }

    mounted() {
      this.setNow(this.value, false);
    }

    setNow(value: number, canEmit = true) {
      this.current = Math.min(value || 1, this.pageNumber);
      this.current = Math.max(this.current, 1);

      if (canEmit) {
        (this.change as Function)(this.current);
        this.$emit('change', this.current);
        this.returnModel();
      }
    }

    @Emit('model')
    returnModel(): number {
      return this.current;
    }

    nextPage() {
      this.setNow(++this.current);
    }

    prevPage() {
      this.setNow(--this.current);
    }

    simpleChange(ev: MouseEvent) {
      this.setNow((ev.target as any).value);
    }

    // 改变的时候当前页有可能超出总共页数，所以重置
    @Watch('pageSize')
    @Watch('total')
    resetCurrent() {
      this.current = 1;
      this.setNow(this.current, false);
      this.returnModel();
    }

    // 改变的时候当前页有可能超出总共页数，所以重置
    @Watch('value')
    getValue(val: number) {
      this.setNow(val, false);
    }
  }
</script>

<style lang="scss">
  @import 'page.scss';
</style>
