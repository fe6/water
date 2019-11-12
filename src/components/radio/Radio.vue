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
    <div class="w-radio-content" :style="textColorStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Emit, Vue } from 'vue-property-decorator';

  export interface ChangeParamsEntity {
    ev: MouseEvent;
    value: string | number | boolean;
    label: string | number | boolean;
  }

  export interface ReturnParamsEntity extends ChangeParamsEntity {
    status: boolean;
  }

  @Component
  export default class Radio extends Vue {
    name = 'Radio';

    preName = 'w-radio-';

    hoverStatus = false;

    @Model('model', {
      type: [String, Number, Boolean],
      default: '',
    })
    readonly value!: string | number | boolean;

    @Prop([String, Number, Boolean]) private label!: string | number | boolean;

    @Prop(Boolean) private disabled!: boolean;

    @Prop(Boolean) private loading!: boolean;

    @Prop(String) private textColor!: string;

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
    })
    private before!: Function;

    @Prop({
      type: Function,
      default: () => {},
    })
    private change?: Function;

    get borderColorStyle(): string {
      let colors = '';
      const colorKey = 'border-color: ';

      if (this.hoverStatus && this.hoverColor) {
        colors = `${colorKey}${this.hoverColor}`;
      }

      if (this.status && this.checkColor) {
        colors = `${colorKey}${this.checkColor}`;
      }

      return colors;
    }

    get textColorStyle(): string {
      let colors = '';

      if (this.textColor) {
        colors = `color: ${this.textColor}`;
      }

      return colors;
    }

    get bgColorStyle(): string {
      let colors = '';

      if (this.status && this.checkColor) {
        colors = `background-color: ${this.checkColor}`;
      }

      return colors;
    }

    get radioList(): any[] {
      return [
        {
          [`${this.preName}on`]: this.status,
          [`${this.preName}disabled`]: this.disabled,
        },
        this.className,
      ];
    }

    get status(): boolean {
      return this.label === this.value;
    }

    @Emit('model')
    clickFn(ev: MouseEvent): string | number | boolean {
      if (!this.disabled && !this.loading && !this.status) {
        const reParams: ChangeParamsEntity = {
          ev,
          value: this.label,
          label: this.label,
        };
        return (this.before as Function)(reParams).then(() => {
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
