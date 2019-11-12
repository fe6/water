<template>
  <div
    :class="[
      `w-progress-text${inside ? '-inner' : ''}`,
      {
        'w-progress-text-circle': noLine,
      },
    ]"
  >
    <span v-if="!hasStatus || inside" :style="fontStyle">{{
      percentText
    }}</span>
    <WIcon
      v-else
      class="w-progress-icon"
      :style="`color: ${iconList[status].color}`"
    >
      <svg
        viewBox="64 64 896 896"
        focusable="false"
        class=""
        data-icon="close-circle"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path :d="iconList[status].icon"></path>
      </svg>
    </WIcon>
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Vue } from 'vue-property-decorator';
  import TransferDom from '@/directives/transfer-dom';
  import WProgressLink from '@/components/progress/ProgressLine.vue';
  import WProgressCircle from '@/components/progress/ProgressCircle.vue';
  import {
    iconList,
    IconListEntity,
    statusList,
    ColorItemEntity,
  } from '@/components/progress/helper';
  import WIcon from '@/components/icon/Icon.vue';

  Vue.directive('transfer-dom', TransferDom as any);

  @Component({
    components: {
      WProgressLink,
      WProgressCircle,
      WIcon,
    },
  })
  export default class WProgressText extends Vue {
    name = 'ProgressText';

    iconList: IconListEntity = iconList;

    @Model('model', { type: Number }) readonly value!: number;

    @Prop({
      type: Number,
      default: 8,
    })
    private strokeWidth!: number;

    @Prop(String) private status!: string; // success, error, normal,

    @Prop({
      type: String,
      default: 'line', // circle, dashbroad
    })
    private type!: string;

    @Prop(Boolean) private inside!: boolean;

    @Prop({
      type: Function,
      default: (percent: number) => `${percent}%`,
    })
    private format!: Function;

    get fontStyle() {
      return {
        height: `${this.strokeWidth}px`,
        'line-height': `${this.strokeWidth}px`,
      };
    }

    get hasStatus(): boolean {
      return (
        !!this.status &&
        statusList.some((statusItem: string) => statusItem === this.status)
      );
    }

    get percentText() {
      return this.format(this.value);
    }

    get noLine(): boolean {
      return this.type !== 'line';
    }
  }
</script>

<style lang="scss">
  @import './progress.scss';
</style>
