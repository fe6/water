<template>
  <div class="w-progress-line" :class="{}">
    <div class="w-progress-line-bar" :style="fontStyle">
      <div class="w-progress-line-outer" :style="radiusStyle">
        <div
          class="w-progress-line-inner"
          :class="{
            [`w-progress-line-${status}`]: hasStatus,
          }"
          :style="[
            {
              width: `${this.value}%`,
            },
            radiusStyle,
            lineStyle,
          ]"
        >
          <WProgressText
            v-if="showInfo && inside"
            v-model="value"
            :format="format"
            :stroke-width="strokeWidth"
            type="line"
            :status="status"
            :inside="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Vue } from 'vue-property-decorator';
  import WIcon from '@/components/icon/Icon.vue';
  import WProgressText from '@/components/progress/ProgressText.vue';
  import {
    statusList,
    ColorItemEntity,
    getColorInArray,
  } from '@/components/progress/helper';
  import { isString, isArray, isFunction } from '@/helper/type';

  @Component({
    components: {
      WIcon,
      WProgressText,
    },
  })
  export default class WProgressLine extends Vue {
    name = 'ProgressLine';

    @Model('model', { type: Number }) readonly value!: number;

    @Prop(Number) private strokeWidth!: number;

    @Prop(String) private strokeLinecap!: string;

    @Prop([String, Array, Function]) private color!:
      | string
      | ColorItemEntity[]
      | Function;

    @Prop(String) private status!: string;

    @Prop(Function) private format!: Function;

    @Prop(Boolean) private showInfo!: boolean;

    @Prop(Boolean) private inside!: boolean;

    get isProgress() {
      return this.value < 100;
    }

    get fontStyle() {
      return {
        height: `${this.strokeWidth}px`,
        'line-height': `${this.strokeWidth}px`,
      };
    }

    get lineStyle() {
      let newColor = '';

      if (isString(this.color)) {
        newColor = this.color as string;
      } else if (isArray(this.color)) {
        newColor = getColorInArray(this.color as [], this.value);
      } else if (isFunction(this.color)) {
        newColor = (this.color as Function)(this.value);
      }

      return {
        'background-color': newColor,
      };
    }

    get radiusStyle() {
      return {
        'border-radius':
          this.strokeLinecap === 'round' ? `${this.strokeWidth / 2}px` : 0,
      };
    }

    get hasStatus(): boolean {
      return (
        !!this.status &&
        statusList.some((statusItem: string) => statusItem === this.status)
      );
    }
  }
</script>

<style lang="scss">
  @import './progress.scss';
</style>
