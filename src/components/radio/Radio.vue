<template>
  <div
    class="w-radio"
    :class="radioList"
    @click="clickFn"
    @mouseover="hoverStatus = true"
    @mouseout="hoverStatus = false"
  >
    <div
      class="w-radio-status"
      :class="{
        [`${preName}status-on`]: status,
        [`${preName}status-disabled`]: disabled,
        [`${preName}status-loading`]: loading,
      }"
      :style="borderColorStyle"
    >
      <input
        class="w-radio-input"
        type="radio"
        name="inputName"
        :checked="status"
        :value="label"
        aria-label="radio"
      />
      <i
        class="w-radio-inner"
        :class="{
          [`${preName}inner-on`]: status,
          [`${preName}inner-disabled`]: disabled,
        }"
        :style="bgColorStyle"
      ></i>
    </div>
    <div class="w-radio-content">
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
  Vue,
} from 'vue-property-decorator';

export interface ReturnParamsEntity {
  ev: MouseEvent;
  value: string | number | boolean;
  label: string | number | boolean;
  status: boolean;
}

@Component
export default class Radio extends Vue {
  name: string = 'Radio';

  preName: string = 'w-radio-';

  hoverStatus: boolean = false;

  @Model('model', {
    type: [String, Number, Boolean],
    default: '',
  }) readonly value!: string | number | boolean;

  @Prop([String, Number, Boolean]) private label!: string | number | boolean;

  @Prop(Boolean) private disabled!: boolean;

  @Prop(Boolean) private loading!: boolean;

  @Prop(String) private hoverColor!: string;

  @Prop(String) private checkColor!: string;

  @Prop([String, Object, Array]) private className!: string | object | any[];

  @Prop({
    type: Function,
    default() {
      return new Promise((resolve) => {
        resolve();
      });
    },
  }) private before!: Function;

  @Prop({
    type: Function,
    default: () => {},
  }) private change?: Function;

  get borderColorStyle(): string {
    let colors: string = '';
    const colorKey: string = 'border-color: ';

    if (this.hoverStatus && this.hoverColor) {
      colors = `${colorKey}${this.hoverColor}`;
    }

    if (this.status && this.checkColor) {
      colors = `${colorKey}${this.checkColor}`;
    }

    return colors;
  }

  get bgColorStyle(): string {
    let colors: string = '';

    if (this.status && this.checkColor) {
      colors = `background-color: ${this.checkColor}`;
    }

    return colors;
  }

  get radioList(): any[] {
    return [{
      [`${this.preName}on`]: this.status,
      [`${this.preName}disabled`]: this.disabled,
    }, this.className];
  }

  get status(): boolean {
    return this.label === this.value;
  }

  @Emit('model')
  clickFn(ev: MouseEvent): string | number | boolean {
    if (!this.disabled && !this.loading && !this.status) {
      return (this.before as Function)().then(() => {
        this.emitChange(ev);
        return this.label;
      });
    }
    return this.value;
  }

  @Emit('change')
  emitChange(ev: MouseEvent): ReturnParamsEntity {
    const reParams: ReturnParamsEntity = {
      ev,
      value: this.label,
      label: this.label,
      status: this.status,
    };

    (this.change as Function)(reParams);

    return reParams;
  }
}
</script>

<style lang="scss">
  @import './radio.scss';
</style>
