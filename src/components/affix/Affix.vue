<template>
  <div class="w-affix">
    <!-- 在定位的过程中位置会变，滚动之后刷新就会有问题 -->
    <!-- 多套一层是为了获取位置 -->
    <div :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component, Prop, Emit, Vue,
} from 'vue-property-decorator';
import {
  addObserved, removeObserved,
} from './helper';
import getScroll from '../../helper/getscroll';
import getOffset from '../../helper/getoffset';
import { getRect, RectEntity } from '../../helper/getrect';

interface AffixEntity {
  [offsetPlace: string]: number;
}

@Component
export default class Affix extends Vue {
  affixStyle: String = '';

  target: Window = window;

  @Prop({
    type: Number,
    default: 10,
  }) private offsetTop!: number;

  @Prop(Number) private offsetBottom!: number;

  @Prop({
    type: Number,
    default: 10,
  }) private index!: number;

  @Prop({
    type: Boolean,
    default: true,
  }) private status!: boolean;

  @Prop({
    type: String,
    default: 'fixed',
  }) private position!: string;

  @Prop({
    type: Function,
    default: () => {},
  }) private change!: Function;

  get offsetType() {
    if (typeof this.offsetBottom === 'number') {
      return {
        type: 'bottom',
        value: this.offsetBottom,
      };
    }
    return {
      type: 'top',
      value: this.offsetTop,
    };
  }

  mounted() {
    addObserved(this.target, this.updatePostion);
    this.updatePostion();
  }

  beforeDestroy() {
    removeObserved(this.target);
  }

  @Emit('change')
  updatePostion() {
    const { type, value } = this.offsetType;
    const { offsetWidth, offsetHeight } = this.$el as HTMLElement;

    const scrollTop = getScroll(this.target, true);
    const elOffset = getOffset(this.$el as HTMLElement);
    const elRect = getRect(this.$el as HTMLElement);
    const windowHeight = window.innerHeight;
    const isStatic: Boolean = (
      type === 'top'
        && (elOffset.top - value) <= scrollTop
    )
    || (
      type === 'bottom'
      && (
        elOffset.top + this.offsetBottom + offsetHeight) > (scrollTop + windowHeight
      )
    );
    const sticky: Boolean = this.status && isStatic;
    const position = sticky ? `position: ${this.position}; zIndex: ${this.index};` : '';
    const offset: string = sticky ? `${type}: ${value}px; width: ${offsetWidth}px` : '';
    this.affixStyle = `${position}${offset}`;
    this.change(sticky);

    return sticky;
  }
}
</script>
