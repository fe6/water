<template>
  <div
    class="w-progress"
    :class="{
      'w-progress-circle': noLine,
    }"
  >
    <WProgressLink
      v-model="percentValue"
      :strokeWidth="lineWidth"
      :strokeLinecap="strokeLinecap"
      :status="status"
      :color="color"
      :format="format"
      :inside="inside"
      v-if="type === 'line'"
    />
    <WProgressCircle
      v-model="percentValue"
      :strokeWidth="lineWidth"
      :strokeLinecap="strokeLinecap"
      :status="status"
      :color="color"
      :format="format"
      :type="type"
      :width="width"
      v-else
    />
    <div
      :class="[`w-progress-text${inside ? '-inner' : ''}`, {
        'w-progress-text-circle': noLine,
      }]"
      v-if="showInfo"
      v-transfer-dom="getContainer()"
      :data-transfer="inside"
    >
      <span
        :style="fontStyle"
        v-if="!hasStatus || inside"
      >{{ percentText }}</span>
      <WIcon
        class="w-progress-icon"
        :style="`color: ${iconList[status].color}`"
        v-else
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
  </div>
</template>

<script lang="ts">
import {
  Component,
  Model,
  Prop,
  // Emit,
  Watch,
  Vue,
} from 'vue-property-decorator';
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

Vue.directive('transfer-dom', (TransferDom as any));

@Component({
  components: {
    WProgressLink,
    WProgressCircle,
    WIcon,
  },
})
export default class WProgress extends Vue {
  name: string = 'Progress';

  iconList: IconListEntity = iconList;

  percentValue: number = 0;

  lineWidth: number = 0;

  @Model('model', { type: Number }) readonly value!: number;

  @Prop({
    type: Number,
    default: 8,
  }) private strokeWidth!: number;

  @Prop({
    type: Number,
    default: 126,
  }) private width!: number;

  @Prop({
    type: String,
    default: 'line', // circle
  }) private type!: string;

  @Prop({
    type: String,
    default: 'round', // square
  }) private strokeLinecap!: string;

  @Prop(String) private status!: string; // success, error, normal,

  @Prop([String, Array, Function]) private color!: string | ColorItemEntity[] | Function;

  @Prop({
    type: Function,
    default: (percent: Number) => `${percent}%`,
  }) private format!: Function;

  @Prop({
    type: Boolean,
    default: true,
  }) private showInfo!: boolean;

  @Prop(Boolean) private inside!: boolean;

  get fontStyle() {
    return {
      height: `${this.strokeWidth}px`,
      'line-height': `${this.strokeWidth}px`,
    };
  }

  get hasStatus(): boolean {
    return !!this.status && statusList.some((statusItem: string) => statusItem === this.status);
  }

  get percentText() {
    return this.format(this.percentValue);
  }

  get noLine(): boolean {
    return this.type !== 'line';
  }

  created() {
    this.initLineWidth();
  }

  initLineWidth() {
    this.lineWidth = this.strokeWidth;
  }

  @Watch('value', {
    immediate: true,
  })
  getValue() {
    this.percentValue = this.value > 100 ? 100 : this.value;
  }

  getContainer() {
    return new Promise((resolve) => {
      this.$nextTick(() => {
        resolve(this.$refs.inner);
      });
    });
  }
}
</script>

<style lang="scss">
  @import './progress.scss';
</style>
