<template>
  <span class="w-breadcrumb-item">
    <Icon v-if="$slots.icon" class="w-breadcrumb-item-icon">
      <slot name="icon"></slot>
    </Icon>
    <span
      :class="{
        'w-breadcrumb-item-link': to || href || open,
      }"
      @click="page"
    >
      <slot></slot>
    </span>
    <i class="w-breadcrumb-item-separator" v-html="separator"></i>
  </span>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import Icon from '@/components/icon/src/Icon.vue';

  interface VueRouterEntity {
    [key: string]: any;
  }

  @Component({
    components: {
      Icon,
    },
  })
  export default class BreadcrumbItem extends Vue {
    name = 'WBreadcrumbItem';

    @Prop({
      type: String,
      default: '/',
    })
    private separator?: string;

    @Prop({
      type: Object,
      default: () => {},
    })
    private to?: object;

    @Prop({
      type: String,
      default: 'push',
    })
    private routerType?: string;

    @Prop(String) private open?: string;

    @Prop(String) private href?: string;

    page() {
      if (this.href) {
        window.location.assign(this.href);
      }
      if (this.open) {
        window.open(this.open);
      }
      if (this.to && this.routerType) {
        (this.$router as VueRouterEntity)[this.routerType](this.to);
      }
    }
  }
</script>

<style lang="scss">
  @import 'breadcrumb.scss';
</style>
