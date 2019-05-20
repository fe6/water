<template>
  <div>
    <h2>按钮类型用法</h2>
    <p>
    <Button class="button" :size="size">Default</Button>
    <Button class="button" :size="size" type="info">Info</Button>
    <Button class="button" :size="size" type="border">Border</Button>
    <Button class="button" :size="size" type="dashed">Dashed</Button>
    <Button class="button" :size="size" type="danger">Danger</Button>
    </p>
    <h2>图标按钮用法</h2>
    <p>
      <Button class="button" :size="size" type="primary">
        <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      </Button>
      <Button class="button" :size="size" type="primary">Search</Button>
      <Button class="button" :size="size">
        <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      </Button>
      <Button class="button" :size="size">Search</Button>
      <br />
      <Button class="button" :size="size" type="danger">
        <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      </Button>
      <Button class="button" :size="size" type="danger">Search</Button>
      <Button class="button" :size="size" type="dashed">
        <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
      </Button>
      <Button class="button" :size="size" type="dashed">Search</Button>
      <br />
      <Button class="button" :size="size">
        <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
        Default
      </Button>
      <Button class="button" :size="size" type="info">
        <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
        Info
      </Button>
      <Button class="button" :size="size" type="border">
        <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
        Border
      </Button>
      <Button class="button" :size="size" type="dashed">
        <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
        Dashed
      </Button>
      <Button class="button" :size="size" type="danger">
        <img slot="icon" src="https://fe6.github.io/water/logo.png" alt="水滴 logo">
        Danger
      </Button>
    </p>
    <h2>加载中状态</h2>
    <p>
      <Button
        class="button"
        :size="size"
        loading
      >加载中-Default</Button>
      <Button
        class="button"
        :size="size"
        loading
        type="info"
      >加载中-Info</Button>
      <Button
        class="button"
        :size="size"
        loading
        type="border"
      >加载中-Border</Button>
      <Button
        class="button"
        :size="size"
        loading
        type="dashed"
      >加载中-Dashed</Button>
      <Button
        class="button"
        :size="size"
        loading
        type="danger"
      >加载中-Danger</Button>
    </p>
    <h2>禁用</h2>
    <Button
      class="button"
      :size="size"
      disabled
    >禁用中-Default</Button>
    <Button
      class="button"
      :size="size"
      disabled
      type="info"
    >禁用中-Info</Button>
    <Button
      class="button"
      :size="size"
      disabled
      type="border"
    >禁用中-Border</Button>
    <Button
      class="button"
      :size="size"
      disabled
      type="dashed"
    >禁用中-Dashed</Button>
    <Button
      class="button"
      :size="size"
      disabled
      type="danger"
    >禁用中-Danger</Button>
    <h2>按钮组合</h2>
    <p>dashed 不支持组合按钮</p>
    <p>
      <ButtonGroup v-model="size">
        <Button value="small" @click="changeGroupStatus" :key="0">小</Button>
        <Button value="" @click="changeGroupStatus" :key="1">中</Button>
        <Button value="large" @click="changeGroupStatus" :key="2">大</Button>
      </ButtonGroup>
      <br>
      <ButtonGroup v-model="size">
        <Button type="info" value="small" @click="changeGroupStatus" :key="0">小</Button>
        <Button type="info" value="" @click="changeGroupStatus" :key="1">中</Button>
        <Button type="info" value="large" @click="changeGroupStatus" :key="2">大</Button>
      </ButtonGroup>
      <br>
      <ButtonGroup v-model="size">
        <Button type="border" value="small" @click="changeGroupStatus" :key="0">小</Button>
        <Button type="border" value="" @click="changeGroupStatus" :key="1">中</Button>
        <Button type="border" value="large" @click="changeGroupStatus" :key="2">大</Button>
      </ButtonGroup>
      <br>
      <ButtonGroup v-model="size">
        <Button type="danger" value="small" @click="changeGroupStatus" :key="0">小</Button>
        <Button type="danger" value="" @click="changeGroupStatus" :key="1">中</Button>
        <Button type="danger" value="large" @click="changeGroupStatus" :key="2">大</Button>
      </ButtonGroup>
    </p>
    <h2>幽灵按钮</h2>
    <p class="button-ghost">
      <Button
        class="button"
        :size="size"
        ghost
      >Default</Button>
      <Button
        class="button"
        :size="size"
        ghost
        type="info"
      >Info</Button>
      <Button
        class="button"
        :size="size"
        ghost
        type="border"
      >Border</Button>
      <Button
        class="button"
        :size="size"
        ghost
        type="dashed"
      >Dashed</Button>
      <Button
        class="button"
        :size="size"
        ghost
        type="danger"
      >Danger</Button>
    </p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '../components/button/Button.vue';
import ButtonGroup from '../components/button/ButtonGroup.vue';

interface StatusEntity {
  ev: AnimationEvent;
  current: number;
}

@Component({
  components: {
    Button,
    ButtonGroup,
  },
})
export default class ButtonView extends Vue {
  size: string = '';

  changeGroupStatus({ ev }: StatusEntity) {
    this.$nextTick((): void => {
      this.size = (ev.target as any).value;
    });
  }
}
</script>

<style lang="scss">
@import '../assets/style/button.scss';
</style>
