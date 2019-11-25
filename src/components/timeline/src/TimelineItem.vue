<template>
  <li class="w-timeline-item">
    <div
      class="w-timeline-tail"
      :class="{
        ['w-timeline-alternate-tail']: mode === 'alternate',
        ['w-timeline-right-tail']: mode === 'right',
      }"
    ></div>
    <div
      class="w-timeline-dot"
      :class="{
        ['w-timeline-alternate-dot']: mode === 'alternate',
        ['w-timeline-right-dot']: mode === 'right',
      }"
      :style="`border-color: ${color}`"
    ></div>
    <div
      class="w-timeline-core"
      :class="{
        [index % 2 === 0
          ? 'w-timeline-alternate-left'
          : 'w-timeline-alternate-right']: mode === 'alternate',
        ['w-timeline-right']: mode === 'right',
      }"
    >
      <div
        class="w-timeline-timestamp"
        :class="{
          [index % 2 === 0
            ? 'w-timeline-alternate-left-inner'
            : 'w-timeline-alternate-right-inner']: mode === 'alternate',
          ['w-timeline-right-inner']: mode === 'right',
        }"
        v-if="timestamp"
      >
        {{ timestamp }}
      </div>
      <div
        class="w-timeline-content"
        :class="{
          [index % 2 === 0
            ? 'w-timeline-alternate-left-inner'
            : 'w-timeline-alternate-right-inner']: mode === 'alternate',
          ['w-timeline-right-inner']: mode === 'right',
        }"
        v-if="$slots.default"
      >
        <slot></slot>
      </div>
    </div>
  </li>
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

    index: number = 0;

    @Prop(String) private timestamp!: string;

    @Prop({
      type: String,
      default: 'rgba(0, 0, 0, 0.25)',
    })
    private color!: string;

    get mode(): boolean {
      return (this.$parent as any).mode;
    }

    mounted() {
      this.getIndex();
    }

    getIndex() {
      const defNodes = (this.$parent.$slots as any).default;
      if (defNodes && defNodes.length > 0) {
        this.index = ([...defNodes] as any).findIndex(
          (item: any) => item === this.$vnode
        );
      }
    }
  }
</script>

<style lang="scss">
  @import 'timeline.scss';
</style>
