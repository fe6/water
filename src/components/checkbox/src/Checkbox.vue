<!-- @format -->

<template>
  <div
    class="w-checkbox"
    :class="[
      {
        [`${preName}disabled`]: disabled,
      },
      className,
    ]"
    @click="clickFn($event)"
    @mouseover="hoverStatus = true"
    @mouseout="hoverStatus = false"
  >
    <div
      :class="[
        `${preName}status`,
        {
          [`${preName}on`]: status,
          [`${preName}indeterminate`]: indeterminate,
          [`${preName}status-disabled`]: disabled,
        },
      ]"
      :style="colorStyle"
    >
      <input
        type="checkbox"
        aria-label="checkbox"
        :class="[`${preName}input`]"
      />
    </div>
    <div
      v-if="$slots.default"
      :class="[
        `${preName}content`,
        {
          [`${preName}content-disabled`]: disabled,
        },
      ]"
      :style="textColorStyle"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Model,
    Prop,
    Emit,
    Watch,
    Vue,
  } from 'vue-property-decorator';
  import { isBoolean, isNumber, isString, isUndefined } from '@/helper/type';

  interface ReturnParamsEntity {
    ev: Event;
    value: string | number | boolean;
    label: string | number | boolean;
    status: string | number | boolean;
    disabled: boolean;
    indeterminate: boolean;
  }

  interface ColorStyleEntity {
    [style: string]: string;
  }

  @Component
  export default class Checkbox extends Vue {
    name = 'WCheckbox';

    preName = 'w-checkbox-';

    status: string | number | boolean = false;

    hoverStatus = false;

    @Model('model', { type: [Boolean, Number, String], default: undefined })
    readonly value!: boolean | number | string;

    @Prop({
      type: [Boolean, Number, String],
      default: undefined,
    })
    private label!: string | number | boolean;

    @Prop(Boolean) private disabled!: boolean;

    @Prop(Boolean) private indeterminate!: boolean;

    @Prop(String) private textColor!: string;

    @Prop(String) private hoverColor!: string;

    @Prop(String) private checkColor!: string;

    @Prop([String, Object, Array]) private className!: string | object | any[];

    @Prop({
      type: Function,
      default: () => {},
    })
    private change?: Function;

    mounted() {
      this.checkStatus();
    }

    @Watch('value')
    checkStatus() {
      if (
        (isBoolean(this.value) && isBoolean(this.label)) ||
        (isNumber(this.value) && isNumber(this.label)) ||
        (isString(this.value) && isString(this.label))
      ) {
        this.status = this.value === this.label;
      }

      if (isBoolean(this.value) && isUndefined(this.label)) {
        this.status = this.value;
      }
    }

    get textColorStyle(): ColorStyleEntity {
      const colors: ColorStyleEntity = {};

      if (this.textColor) {
        colors.color = this.textColor;
      }

      return colors;
    }

    get colorStyle(): ColorStyleEntity {
      const colors: ColorStyleEntity = {};

      if (this.hoverStatus && this.hoverColor) {
        colors.borderColor = this.hoverColor;
      }

      if (this.status && this.checkColor) {
        colors.backgroundColor = this.checkColor;
        colors.borderColor = this.checkColor;
      }

      return colors;
    }

    @Emit('change')
    clickFn(ev: MouseEvent): ReturnParamsEntity {
      this.changeStatus();

      const reParams: ReturnParamsEntity = {
        ev,
        status: this.status,
        label: this.label,
        value: this.value,
        disabled: this.disabled,
        indeterminate: this.indeterminate,
      };

      (this.change as Function)(reParams);

      return reParams;
    }

    @Emit('model')
    changeStatus(): string | number | boolean {
      if (this.disabled) {
        return this.status;
      }
      this.status = !this.status;
      if (!isUndefined(this.label) && this.status) {
        return this.label;
      }
      return this.status;
    }
  }
</script>

<style lang="scss">
  @import 'checkbox.scss';
</style>
