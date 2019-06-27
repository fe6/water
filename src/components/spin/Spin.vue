<template>
  <div
    class="w-spin"
    :class="{
      'w-spin-active': value,
    }"
    v-if="$slots.default"
  >
    <slot></slot>
    <div class="w-spin-mask" v-show="value">
      <icon
        class="w-spin-icon"
        :class="iconClass"
        :color="color"
        :spin="true"
      >
        <slot name="icon" v-if="!!$slots.icon"></slot>
      </icon>
      <p class="w-spin-tip" :class="tipClass" v-if="tip">{{tip}}</p>
    </div>
  </div>
  <icon
    class="w-spin-icon"
    :class="iconClass"
    :color="color"
    v-else
    :spin="true"
    v-show="value"
  >
    <slot name="icon" v-if="!!$slots.icon"></slot>
  </icon>
</template>

<script lang="ts">
import {
  Component,
  Model,
  Prop,
  Vue,
} from 'vue-property-decorator';
import Icon from '@/components/icon/Icon.vue';

@Component({
  components: {
    Icon,
  },
})
export default class Spin extends Vue {
  @Model('model', { type: Boolean, default: true }) readonly value!: boolean;

  @Prop(String) private tip!: string;

  @Prop(String) private size!: string;

  @Prop(String) private color!: string;

  get iconClass() {
    return {
      [`w-spin-icon-${this.size}`]: this.size,
      [`w-spin-tip-icon-${this.size}`]: this.size,
    };
  }

  get tipClass() {
    return {
      [`w-spin-tip-${this.size}`]: this.size,
    };
  }
}
</script>

<style lang="scss">
  @import "spin.scss";
</style>
