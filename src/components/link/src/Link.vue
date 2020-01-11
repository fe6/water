<!-- @format -->

<template>
  <a
    v-if="href"
    class="w-link"
    :class="classList"
    :href="href"
    :target="target || '_self'"
  >
    <span v-if="$slots.icon && !loading" class="w-link-icon">
      <slot name="icon"></slot>
    </span>
    <Icon v-else-if="loading" class="w-link-icon" color="#0297fe" spin />
    <span class="w-link-text">
      <slot></slot>
    </span>
  </a>
  <router-link
    v-else-if="to"
    class="w-link"
    :class="classList"
    :tag="tag"
    :to="to"
  >
    <span v-if="$slots.icon && !loading" class="w-link-icon">
      <slot name="icon"></slot>
    </span>
    <Icon v-else-if="loading" class="w-link-icon" color="#0297fe" spin />
    <span class="w-link-text">
      <slot></slot>
    </span>
  </router-link>
  <span v-else class="w-link" :class="classList">
    <span v-if="$slots.icon && !loading" class="w-link-icon">
      <slot name="icon"></slot>
    </span>
    <Icon v-else-if="loading" class="w-link-icon" color="#0297fe" spin />
    <span class="w-link-text">
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import Icon from '@/components/icon/src/Icon.vue';

  @Component({
    components: {
      Icon,
    },
  })
  export default class Link extends Vue {
    name: string = 'WLink';

    @Prop({
      type: String,
      default: 'a',
    })
    private tag!: string;

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
  @import 'link.scss';
</style>
