<template>
  <a
    class="w-link"
    :class="classList"
    :href="url"
    :target="target || '_self'"
    v-if="url"
  >
    <Icon v-if="$slots.icon && !loading">
      <slot name="icon"></slot>
    </Icon>
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
    <Icon v-if="$slots.icon && !loading">
      <slot name="icon"></slot>
    </Icon>
    <Icon v-else-if="loading" color="#0297fe" spin />
    <slot></slot>
  </router-link>
  <span
    class="w-link"
    :class="classList"
    v-else
  >
    <Icon v-if="$slots.icon && !loading">
      <slot name="icon"></slot>
    </Icon>
    <Icon v-else-if="loading" color="#0297fe" spin />
    <slot></slot>
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

  @Prop(String) private url!: string;

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
