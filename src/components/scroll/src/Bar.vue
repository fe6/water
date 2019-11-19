<template>
  <div
    :class="['w-scroll-bar', 'w-scroll-' + bar.key]"
    @mousedown="clickTrackHandler"
  >
    <div
      :class="['w-scroll-thumb', 'w-scroll-thumb-' + bar.key]"
      :style="renderThumbStyle({ size, move, bar })"
      @mousedown="clickThumbHandler"
      ref="thumb"
    ></div>
  </div>
</template>

<script lang="ts">
  import addDOMEventListener from 'add-dom-event-listener';
  import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
  import { BAR_MAP, renderThumbStyle } from './ast';

  export interface MouseMoveBaseEntity {
    ev: null | Event;
    scrollScale: number;
    eventType: string;
  }

  export interface ThumbPositionPercentageEntity extends MouseMoveBaseEntity {
    thumbPositionPercentage: number;
  }

  export interface HandleScrollEntity extends MouseMoveBaseEntity {
    scrollChange: number;
  }

  @Component
  export default class ScrollBar extends Vue {
    isCursorDown: boolean = false;

    renderThumbStyle: Function = renderThumbStyle;

    mouseMoveEvent: any = null;

    mouseUpEvent: any = null;

    moveDrag: number = 0;

    @Prop(Boolean) private isVertical!: boolean;

    @Prop(Number) private move!: number;

    @Prop(String) private size!: string;

    get bar() {
      return BAR_MAP[this.isVertical ? 'vertical' : 'horizontal'];
    }

    get elem() {
      return this.$el as any;
    }

    get thumb() {
      return this.$refs.thumb as any;
    }

    clickThumbHandler(ev: any) {
      // prevent click event of right button
      if (ev.ctrlKey || ev.button === 2) {
        return;
      }
      this.startDrag(ev);
      (this as any)[this.bar.axis] =
        ev.currentTarget[this.bar.offset] -
        (ev[this.bar.client] -
          ev.currentTarget.getBoundingClientRect()[this.bar.direction]);
    }

    @Emit('clickTrack')
    clickTrackHandler(ev: any): ThumbPositionPercentageEntity {
      const offset = Math.abs(
        ev.target.getBoundingClientRect()[this.bar.direction] -
          ev[this.bar.client]
      );
      const thumbHalf = this.thumb[this.bar.offset] / 2;
      const thumbPositionPercentage =
        ((offset - thumbHalf) * 100) / this.elem[this.bar.offset];

      return {
        ev,
        thumbPositionPercentage,
        scrollScale: 0,
        eventType: 'clickBar',
      };
    }

    @Emit('startDrag')
    startDrag(ev: any): boolean {
      ev.stopImmediatePropagation();
      this.isCursorDown = true;

      this.mouseMoveEvent = addDOMEventListener(
        document,
        'mousemove',
        this.mouseMoveDocumentHandler
      );

      this.mouseUpEvent = addDOMEventListener(
        document,
        'mouseup',
        this.mouseUpDocumentHandler
      );
      document.onselectstart = () => false;

      return this.isCursorDown;
    }

    mouseMoveDocumentHandler(ev: any): void {
      if (this.isCursorDown === false) return;
      const prevPage = (this as any)[this.bar.axis];

      if (!prevPage) return;

      const scrollScale =
        (this.elem.getBoundingClientRect()[this.bar.direction] -
          ev[this.bar.client]) *
        -1;

      const thumbClickPosition = this.thumb[this.bar.offset] - prevPage;
      const thumbPositionPercentage =
        ((scrollScale - thumbClickPosition) * 100) / this.elem[this.bar.offset];

      this.$emit('move', {
        ev,
        thumbPositionPercentage,
        scrollScale,
        eventType: 'drag',
      });
    }

    @Emit('endDrag')
    mouseUpDocumentHandler(): boolean {
      this.isCursorDown = false;
      (this as any)[this.bar.axis] = 0;
      this.mouseMoveEvent.remove();
      this.mouseUpEvent.remove();
      document.onselectstart = null;
      return this.isCursorDown;
    }
  }
</script>
