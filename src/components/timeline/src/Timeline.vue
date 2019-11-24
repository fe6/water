<template>
  <ul class="w-timeline">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import Icon from '@/components/icon/src/Icon.vue';

  @Component({
    components: {
      Icon,
    },
  })
  export default class Timeline extends Vue {
    name: string = 'WTimeline';

    @Prop({
      type: String,
      default: 'left',
    })
    private mode!: string;
  }
</script>

<style lang="scss">
  @import 'timeline.scss';
</style>
