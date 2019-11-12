<template>
  <div :class="['w-btn-group', className]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Provide, Vue } from 'vue-property-decorator';

  @Component
  export default class ButtonGroup extends Vue {
    name = 'ButtonGroup';

    @Model('model', { type: [String, Number], default: '' }) readonly value!:
      | string
      | number;

    @Prop([String, Object, Array]) private className!: string | object | any[];

    @Provide('group') group = this;
  }
</script>
