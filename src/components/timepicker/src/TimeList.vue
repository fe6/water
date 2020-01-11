<!-- @format -->

<template>
  <WScroll class="w-timelist-list" :ref="type">
    <ul class="w-timelist-inner">
      <li
        class="w-timelist-item"
        v-for="(timeItem, timeIdx) in times"
        :key="timeIdx"
        @click="selectTime(timeItem, timeIdx)"
      >
        <renderTime
          :value="value"
          :time="timeItem"
          :disabledRender="disabledRender"
          :hour="hour"
          :minute="minute"
          :second="second"
        />
      </li>
    </ul>
  </WScroll>
</template>

<script lang="ts">
  import { Component, Model, Prop, Vue } from 'vue-property-decorator';
  import WScroll from '@/components/scroll/src/Scroll.vue';
  import renderTime from '@/components/timepicker/src/render-time';

  @Component({
    components: {
      WScroll,
      renderTime,
    },
  })
  export default class TimeList extends Vue {
    @Model('model', { type: String }) readonly value!: string;

    @Prop(Array) private times!: string[];

    @Prop(String) private type!: string;

    @Prop(String) private hour!: string;

    @Prop(String) private minute!: string;

    @Prop(String) private second!: string;

    @Prop({
      type: Function,
      default: () => false,
    })
    private disabledRender!: Function;

    mounted(): void {
      this.initScroll();
    }

    initScroll(): void {
      const idx = this.times.findIndex((time: string) => time === this.value);
      if (idx > -1) {
        this.scrollTo(idx);
      }
    }

    scrollTo(timeIdx: number): void {
      (this.$refs[this.type] as any).scrollTo({ scrollChange: 24 * timeIdx });
    }

    selectTime(timeItem: string, timeIdx: number): void {
      if (
        !this.disabledRender({
          time: timeItem,
          hour: this.hour,
          minute: this.minute,
          second: this.second,
        })
      ) {
        this.scrollTo(timeIdx);

        this.$emit('change', timeItem);
        this.$emit('model', timeItem);
      }
    }
  }
</script>

<style lang="scss">
  @import 'timelist.scss';
</style>
