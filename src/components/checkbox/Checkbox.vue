<template>
  <div
    class="w-checkbox"
    @click="clickFn($event)"
    @mouseover="hoverStatus = true"
    @mouseout="hoverStatus = false"
    :class="[
      {
        [`${preName}disabled`]: disabled,
      },
      className,
    ]"
  >
    <div
      :class="[`${preName}status`, {
        [`${preName}on`]: status,
        [`${preName}indeterminate`]: indeterminate,
        [`${preName}status-disabled`]: disabled,
      }]"
      :style="colorStyle"
    >
      <input type="checkbox" :class="[`${preName}input`]">
    </div>
    <div :class="[`${preName}content`]" v-if="$slots.default">
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

interface ReturnParamsEntity {
  ev: Event;
  status: boolean;
  disabled: boolean;
  indeterminate: boolean;
}

interface ColorStyleEntity {
  [style: string]: string;
}

@Component
export default class Checkbox extends Vue {
  name: string = 'Checkbox';

  preName: string = 'w-checkbox-';

  hoverStatus: boolean = false;

  @Model('model', { type: Boolean, default: false }) readonly value!: boolean;

  status: boolean = this.value;

  @Prop(Boolean) private disabled!: boolean;

  @Prop(Boolean) private indeterminate!: boolean;

  @Prop(String) private hoverColor!: string;

  @Prop(String) private checkColor!: string;

  @Prop([String, Object, Array]) private className!: string | object | any[];

  @Prop({
    type: Function,
    default: () => {},
  }) private change?: Function;

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
      disabled: this.disabled,
      indeterminate: this.indeterminate,
    };

    (this.change as Function)(reParams);

    return reParams;
  }

  @Emit('model')
  changeStatus(): boolean {
    let newStatus = this.status;
    if (!this.disabled) {
      newStatus = !newStatus;
      this.setValue(newStatus);
    }
    return newStatus;
  }

  @Watch('value')
  setValue(value: boolean): void {
    if (this.status !== value) {
      this.status = value;
    }
  }
}
</script>

<style lang="scss">
  @import "checkbox.scss";
</style>
