<template>
  <div class="w-page-jumper">
    <span class="w-page-jumper-text" :class="{
      ['w-page-jumper-text-sm']: size,
    }">{{prefix}}</span>
    <w-input
      class="w-page-jumper-input"
      :class="{
        ['w-page-jumper-input-sm']: size,
      }"
      :size="size"
      @keyup.enter.native="jumpPage($event)"
    />
    <span class="w-page-jumper-text" :class="{
      ['w-page-jumper-text-sm']: size,
    }">{{suffix}}</span>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Model,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';
import WInput from '../input/Input.vue';

@Component({
  components: {
    WInput,
  },
})
export default class PageJump extends Vue {
  name: string = 'PageJump';

  @Model('model', { type: Number }) readonly value!: number;

  @Prop(String) private size!: string;

  @Prop({
    type: String,
    default: '跳转',
  }) private prefix!: string;

  @Prop({
    type: String,
    default: '页',
  }) private suffix!: string;

  @Emit('change')
  jumpPage(ev: MouseEvent) {
    const target = (ev.target as any);
    const val = Number(target.value);

    this.returnModel(val);

    target.value = '';

    return val;
  }

  @Emit('model')
  returnModel(val: number): number {
    return val;
  }
}
</script>

<style lang="scss">
  @import "pagejumper.scss";
</style>
