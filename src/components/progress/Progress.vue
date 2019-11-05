<template>
  <div
    class="w-progress"
    :class="{
      'w-progress-circle': noLine,
    }"
  >
    <WProgressLine
      v-model="percentValue"
      :strokeWidth="lineWidth"
      :strokeLinecap="strokeLinecap"
      :status="status"
      :color="color"
      :format="format"
      :inside="inside"
      v-if="type === 'line'"
      :showInfo="showInfo"
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
    <WProgressText
      v-model="percentValue"
      :format="format"
      :strokeWidth="lineWidth"
      :type="type"
      :status="status"
      :inside="inside"
      v-if="showInfo && !inside"
    />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Model,
  Prop,
  Watch,
  Vue,
} from 'vue-property-decorator';
import WProgressLine from '@/components/progress/ProgressLine.vue';
import WProgressCircle from '@/components/progress/ProgressCircle.vue';
import WProgressText from '@/components/progress/ProgressText.vue';
import {
  ColorItemEntity,
} from '@/components/progress/helper';

@Component({
  components: {
    WProgressLine,
    WProgressCircle,
    WProgressText,
  },
})
export default class WProgress extends Vue {
  name: string = 'Progress';

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
    default: 'line', // circle, dashbroad
  }) private type!: string;

  @Prop({
    type: String,
    default: 'round', // square
  }) private strokeLinecap!: string;

  @Prop(String) private status!: string; // success, error, normal,

  @Prop([String, Array, Function]) private color!: string | ColorItemEntity[] | Function;

  @Prop(Function) private format!: Function;

  @Prop({
    type: Boolean,
    default: true,
  }) private showInfo!: boolean;

  @Prop(Boolean) private inside!: boolean;

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
}
</script>

<style lang="scss">
  @import './progress.scss';
</style>
