ProgressCircle
<template>
  <div
    :style="{
      height: width + 'px',
      width: width + 'px',
    }"
  >
    <svg viewBox="0 0 100 100">
      <path
        class="w-progress-circle__track"
        :d="trackPath"
        stroke="#eff1f6"
        :stroke-width="relativeStrokeWidth"
        fill="none"
        :style="trailPathStyle"
      ></path>
      <path
        class="w-progress-circle__path"
        :d="trackPath"
        :stroke="stroke"
        fill="none"
        :stroke-linecap="strokeLinecap"
        :stroke-width="value ? relativeStrokeWidth : 0"
        :style="circlePathStyle"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Vue } from 'vue-property-decorator';
  import {
    iconList,
    IconListEntity,
    ColorItemEntity,
    getColorInArray,
  } from '@/components/progress/helper';
  import { isString, isArray, isFunction } from '@/helper/type';

  @Component
  export default class WProgressCircle extends Vue {
    name = 'ProgressCircle';

    iconList: IconListEntity = iconList;

    @Model('model', { type: Number }) readonly value!: number;

    @Prop(Number) private strokeWidth!: number;

    @Prop({
      type: Number,
      default: 126,
    })
    private width!: number;

    @Prop(String) private strokeLinecap!: string;

    @Prop([String, Array, Function]) private color!:
      | string
      | ColorItemEntity[]
      | Function;

    @Prop(String) private status!: string;

    @Prop({
      type: String,
      default: 'line', // circle
    })
    private type!: string;

    get relativeStrokeWidth() {
      return ((this.strokeWidth / this.width) * 100).toFixed(1);
    }

    get radius(): number {
      if (this.type === 'circle' || this.type === 'dashboard') {
        return parseInt(
          String(50 - parseFloat(this.relativeStrokeWidth) / 2),
          10
        );
      }
      return 0;
    }

    get trackPath() {
      const { radius } = this;
      const isDashboard = this.type === 'dashboard';
      return `
      M 50 50
      m 0 ${isDashboard ? '' : '-'}${radius}
      a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '-' : ''}${radius * 2}
      a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '' : '-'}${radius * 2}
    `;
    }

    get perimeter(): number {
      return 2 * Math.PI * this.radius;
    }

    get rate(): number {
      return this.type === 'dashboard' ? 0.75 : 1;
    }

    get strokeDashoffset(): string {
      const offset = (-1 * this.perimeter * (1 - this.rate)) / 2;
      return `${offset}px`;
    }

    get trailPathStyle() {
      return {
        strokeDasharray: `${this.perimeter * this.rate}px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset,
      };
    }

    get circlePathStyle() {
      return {
        strokeDasharray: `${this.perimeter *
          this.rate *
          (this.value / 100)}px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset,
        transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease',
      };
    }

    get stroke() {
      let newColor = '#0297fe';

      if (isString(this.color)) {
        newColor = this.color as string;
      } else if (isArray(this.color)) {
        newColor = getColorInArray(this.color as [], this.value);
      } else if (isFunction(this.color)) {
        newColor = (this.color as Function)(this.value);
      }

      return newColor;
    }
  }
</script>

<style lang="scss">
  @import './progress.scss';
</style>
