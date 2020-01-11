<!-- @format -->

<template>
  <div
    v-if="$slots.default"
    class="w-spin"
    :class="{
      'w-spin-active': value,
    }"
  >
    <slot></slot>
    <div v-show="value" class="w-spin-mask">
      <icon class="w-spin-icon" :class="iconClass" :color="color" :spin="true">
        <slot v-if="!!$slots.icon" name="icon"></slot>
      </icon>
      <p v-if="tip" class="w-spin-tip" :class="tipClass">{{ tip }}</p>
    </div>
  </div>
  <icon
    v-else
    v-show="value"
    class="w-spin-icon"
    :class="iconClass"
    :color="color"
    :spin="true"
  >
    <slot v-if="!!$slots.icon" name="icon"></slot>
  </icon>
</template>

<script lang="ts">
  import { Component, Model, Prop, Vue } from 'vue-property-decorator';
  import Icon from '@/components/icon/src/Icon.vue';

  @Component({
    components: {
      Icon,
    },
  })
  export default class Spin extends Vue {
    name: string = 'WSpin';

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
  @import 'spin.scss';
</style>
