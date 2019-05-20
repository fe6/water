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
      class="icon"
      width="16px"
      height="16px"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
     >
        <path :fill="color" :d="defaultPath" />
      </svg>
    </template>
  </i>
</template>

<script lang="ts">
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';
import defaultPath from './defaultpath';

@Component
export default class Icon extends Vue {
  defaultPath: string = defaultPath;

  @Prop(Boolean) private spin!: boolean;

  @Prop([String, Object, Array]) private className!: string | object | any[];

  @Prop({
    type: String,
    default: '#333',
  }) private color!: string;
}
</script>

<style lang="scss">
  @import "icon.scss";
</style>
