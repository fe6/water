<!-- @format -->

<template>
  <div class="w-checktag" :class="classList">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class CheckTag extends Vue {
    clicked = false;

    @Model('model', { type: Boolean }) readonly value!: boolean;

    @Prop(Boolean) private disabled!: boolean;

    @Prop(Boolean) private loading!: boolean;

    @Prop({
      type: Boolean,
      default: true,
    })
    private inline!: boolean;

    @Prop(String) private size!: string;

    get classList() {
      return [
        {
          'w-checktag-loading': this.loading,
          'w-checktag-active': this.statusValue,
          'w-checktag-inline': this.inline,
          'w-checktag-lg': this.size === 'large',
          'w-checktag-sm': this.size === 'small',
          'w-checktag-disabled': this.disabled,
        },
      ];
    }

    get statusValue() {
      return this.value;
    }

    get sizeValue() {
      return this.size;
    }

    get disabledValue() {
      return this.disabled;
    }
  }
</script>

<style lang="scss">
  @import './checktag.scss';
</style>
