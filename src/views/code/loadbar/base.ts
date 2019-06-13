import Loadbar from '@/components/loadbar/Loadbar.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import Button from '@/components/button/Button.vue';

const base: ApiEntity = {
  title: '基本用法',
  desc: '点击 Start 开始进度，点击 Finish 结束。在调用 <code>start()</code> 方法后，组件会自动模拟进度，当调用 <code>finish()</code> 或 <code>error()</code> 时，补全进度并自动消失。',
  code: `<template>
  <button @click="start">Start</button>
  <button @click="finish">Finish</button>
  <button @click="error">Error</button>
</template>
<script>
export default {
  methods: {
    start () {
      this.$Loading.start();
    },
    finish () {
      this.$Loading.finish();
    },
    error () {
      this.$Loading.error();
    }
  }
}
</script>`,
  render: (createElement: Function) => createElement('div',
    {
      class: 'demo-demo',
    },
    [
      createElement(Button, {
        style: {
          marginRight: '16px',
        },
        on: {
          click() {
            (Loadbar as any).start();
          },
        },
      }, 'Start'),
      createElement(Button, {
        style: {
          marginRight: '16px',
        },
        on: {
          click() {
            (Loadbar as any).finish();
          },
        },
      }, 'Finish'),
      createElement(Button, {
        props: {
          type: 'danger',
        },
        on: {
          click() {
            (Loadbar as any).fail();
          },
        },
      }, 'Fail'),
    ]),
};

export default base;
