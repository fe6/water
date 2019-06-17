<template>
  <div :class="[
    'w-btn-group',
    className,
  ]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Model,
  Prop,
  Provide,
  Vue,
} from 'vue-property-decorator';

@Component
export default class ButtonGroup extends Vue {
  name: string = 'ButtonGroup';

  @Model('model', { type: String, default: '' }) readonly value!: string;

  @Prop([String, Object, Array]) private className!: string | object | any[];

  @Provide('group') group = this;
}
</script>
