<!-- @format -->

<template>
  <div class="w-empty">
    <div class="w-empty-box" :style="imageStyle">
      <img class="w-empty-image" :src="image || emptyImage" alt="empty" />
    </div>
    <div v-if="$slots.default" class="w-empty-text">
      <slot></slot>
    </div>
    <p v-else class="w-empty-text">暂无数据</p>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import emptyImage from './emptyimage';

  @Component
  export default class Empty extends Vue {
    name = 'WEmpty';

    emptyImage: string = emptyImage;

    @Prop(String) private image!: string;

    @Prop(Object) private imageStyle!: object;
  }
</script>

<style lang="scss">
  @import 'empty.scss';
</style>
