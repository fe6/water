<template>
  <div class="w-switch" :class="{
    [`w-switch-${size}`]: size === 'small',
    ['w-switch-loading']: loading,
    [`w-switch-${size}-loading`]: size === 'small' && loading,
    ['w-switch-on']: status,
    [`w-switch-${size}-on`]: size === 'small' && status,
    ['w-switch-disabled']: disabled,
  }" @click="changeFn($event)">
    <span class="w-switch-inner" :class="{
      [`w-switch-${size}-inner`]: size === 'small',
      ['w-switch-on-inner']: status,
      [`w-switch-${size}-on-inner`]: size === 'small' && status,
    }">
      <slot name="open" v-if="status"></slot>
      <slot name="close" v-else></slot>
    </span>
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

export interface ReturnParamsEntity {
  ev: MouseEvent;
  [propName: string]: any;
}

@Component
export default class WSwitch extends Vue {
  name: string = 'Switch';

  status: boolean = false;

  @Model('model', { type: Boolean }) readonly value!: boolean;

  @Prop(Boolean) private disabled!: boolean;

  @Prop(Boolean) private loading!: boolean;

  @Prop(Boolean) private stop!: boolean;

  @Prop(String) private size!: string;

  @Prop(Function) private before!: Function;

  @Prop({
    type: Function,
    default: () => {},
  }) private change!: Function;

  mounted() {
    this.setStatus(this.value);
  }

  changeFn(ev: MouseEvent) {
    if (!this.disabled && !this.loading) {
      const reParams: ReturnParamsEntity = {
        ev,
      };
      if (this.before) {
        this.before().then(() => {
          this.setStatus(!this.status);
          reParams.status = this.status;
          this.$emit('change', reParams);
        });
      } else {
        this.setStatus(!this.status);
        reParams.status = this.status;
        this.$emit('change', reParams);
      }
      this.change(this.status);
      if (this.stop) {
        ev.stopPropagation();
      }
    }
  }

  @Emit('modal')
  @Watch('value')
  setStatus(value: boolean): boolean {
    this.status = value;

    return this.status;
  }
}
</script>

<style lang="scss">
  @import './switch.scss';
</style>
