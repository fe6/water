<!-- @format -->

<template>
  <i
    :class="[
      'w-icon',
      {
        'w-icon-spin': !!spin,
      },
      className,
    ]"
  >
    <slot v-if="$slots.default"></slot>
    <template v-else>
      <svg
        viewBox="0 0 1024 1024"
        focusable="false"
        class="icon"
        width="16px"
        height="16px"
        fill="currentColor"
        aria-hidden="true"
      >
        <path :fill="color" :d="defaultPath" />
      </svg>
    </template>
  </i>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import defaultPath from './defaultpath';

  @Component
  export default class Icon extends Vue {
    name: string = 'WIcon';

    defaultPath: string = defaultPath;

    @Prop(Boolean) private spin!: boolean;

    @Prop([String, Object, Array]) private className!: string | object | any[];

    @Prop(String) private color!: string;
  }
</script>

<style lang="scss">
  @import 'icon.scss';
</style>
