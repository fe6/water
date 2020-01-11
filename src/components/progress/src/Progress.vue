<!-- @format -->

<template>
  <div
    class="w-progress"
    :class="{
      'w-progress-circle': noLine,
    }"
  >
    <WProgressLine
      v-if="type === 'line'"
      v-model="percentValue"
      :stroke-width="lineWidth"
      :stroke-linecap="strokeLinecap"
      :status="status"
      :color="color"
      :format="format"
      :inside="inside"
      :show-info="showInfo"
    />
    <WProgressCircle
      v-else
      v-model="percentValue"
      :stroke-width="lineWidth"
      :stroke-linecap="strokeLinecap"
      :status="status"
      :color="color"
      :format="format"
      :type="type"
      :width="width"
    />
    <WProgressText
      v-if="showInfo && !inside"
      v-model="percentValue"
      :format="format"
      :stroke-width="lineWidth"
      :type="type"
      :status="status"
      :inside="inside"
    />
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Watch, Vue } from 'vue-property-decorator';
  import WProgressLine from '@/components/progress/src/ProgressLine.vue';
  import WProgressCircle from '@/components/progress/src/ProgressCircle.vue';
  import WProgressText from '@/components/progress/src/ProgressText.vue';
  import { ColorItemEntity } from '@/components/progress/src/helper';

  @Component({
    components: {
      WProgressLine,
      WProgressCircle,
      WProgressText,
    },
  })
  export default class WProgress extends Vue {
    name: string = 'WProgress';

    percentValue: number = 0;

    lineWidth: number = 0;

    @Model('model', { type: Number }) readonly value!: number;

    @Prop({
      type: Number,
      default: 8,
    })
    private strokeWidth!: number;

    @Prop({
      type: Number,
      default: 126,
    })
    private width!: number;

    @Prop({
      type: String,
      default: 'line', // circle, dashbroad
    })
    private type!: string;

    @Prop({
      type: String,
      default: 'round', // square
    })
    private strokeLinecap!: string;

    @Prop(String) private status!: string; // success, error, normal,

    @Prop([String, Array, Function]) private color!:
      | string
      | ColorItemEntity[]
      | Function;

    @Prop(Function) private format!: Function;

    @Prop({
      type: Boolean,
      default: true,
    })
    private showInfo!: boolean;

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
