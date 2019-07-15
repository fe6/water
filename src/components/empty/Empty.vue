<template>
  <div class="w-empty">
    <div class="w-empty-box" :style="imageStyle">
      <img
        class="w-empty-image"
        :src="image || emptyImage"
        alt="empty"
      />
    </div>
    <div class="w-empty-text" v-if="$slots.default">
      <slot></slot>
    </div>
    <p class="w-empty-text" v-else>暂无数据</p>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import emptyImage from './emptyimage';

@Component
export default class Empty extends Vue {
  name: string = 'Empty';

  emptyImage: string = emptyImage;

  @Prop(String) private image!: string;

  @Prop(Object) private imageStyle!: object;
}
</script>

<style lang="scss">
  @import "empty.scss";
</style>
