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

interface Function1 {
    /**
      * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
      * @param thisArg The object to be used as the this object.
      * @param argArray A set of arguments to be passed to the function.
      */
    apply(this: Function, thisArg: any, argArray?: any): any;

    /**
      * Calls a method of an object, substituting another object for the current object.
      * @param thisArg The object to be used as the current object.
      * @param argArray A list of arguments to be passed to the method.
      */
    call(this: Function, thisArg: any, ...argArray: any[]): any;

    /**
      * For a given function, creates a bound function that has the same body as the original function.
      * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
      * @param thisArg An object to which the this keyword can refer inside the new function.
      * @param argArray A list of arguments to be passed to the new function.
      */
    bind(this: Function, thisArg: any, ...argArray: any[]): any;

    /** Returns a string representation of a function. */
    toString(): string;

    prototype: any;
    readonly length: number;

    // Non-standard extensions
    arguments: any;
    caller: Function;
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

  @Prop({
    type: Function,
    default() {
      return new Promise((resolve) => {
        (this as any).$nextTick(() => {
          resolve();
        });
      });
    },
  }) private before!: () => Promise<void>;

  @Prop({
    type: Function,
    default: () => {},
  }) private change!: Function1;

  mounted() {
    this.setStatus(this.value);
  }

  changeFn(ev: MouseEvent) {
    if (!this.disabled && !this.loading) {
      const reParams: ReturnParamsEntity = {
        ev,
      };
      this.before().then(() => {
        this.setStatus(!this.status);
        reParams.status = this.status;
        this.$emit('change', reParams);
        this.change(reParams);
      });
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
