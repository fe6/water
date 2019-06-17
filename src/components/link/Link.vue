<template>
  <a
    class="w-link"
    :class="classList"
    :href="href"
    :target="target || '_self'"
    v-if="href"
  >
    <span class="w-link-icon" v-if="$slots.icon && !loading">
      <slot name="icon"></slot>
    </span>
    <Icon v-else-if="loading" color="#0297fe" spin />
    <span class="w-link-text">
      <slot></slot>
    </span>
  </a>
  <router-link
    class="w-link"
    :class="classList"
    :tag="tag"
    :to="to"
    v-else-if="to"
  >
    <span class="w-link-icon" v-if="$slots.icon && !loading">
      <slot name="icon"></slot>
    </span>
    <Icon v-else-if="loading" color="#0297fe" spin />
    <span class="w-link-text">
      <slot></slot>
    </span>
  </router-link>
  <span
    class="w-link"
    :class="classList"
    v-else
  >
    <span class="w-link-icon" v-if="$slots.icon && !loading">
      <slot name="icon"></slot>
    </span>
    <Icon v-else-if="loading" color="#0297fe" spin />
    <span class="w-link-text">
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import Icon from '../icon/Icon.vue';

@Component({
  components: {
    Icon,
  },
})
export default class Link extends Vue {
  @Prop({
    type: String,
    default: 'a',
  }) private tag!: string;

  @Prop(String) private href!: string;

  @Prop(String) private target!: string;

  @Prop(String) private size!: string;

  @Prop(Boolean) private loading!: boolean;

  @Prop(Object) private to!: object;

  @Prop(Boolean) private disabled!: boolean;

  get classList(): any[] {
    return [
      {
        'w-link-loading': this.loading,
        [`w-link-${this.size}`]: this.size,
        [`w-link-loading-${this.size}`]: this.loading && this.size,
        'w-link-disabled': this.disabled,
      },
    ];
  }
}
</script>

<style lang="scss">
  @import "link.scss";
</style>
