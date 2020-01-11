/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '基本使用。必须给容器设置高度，不然不起作用。',
  code: `<w-scroll style="height: 200px;" @scroll="scroll">
  <div v-for="(text, index) in texts" :key="index">{{ text }}</div>
</w-scroll>`,
  js: `
  {
    data() {
      return {
        texts: [],
      };
    },
    created() {
      for (let i = 1; i < 100; i++) {
        this.texts.push('这是一段文字' + i);
      }
    },
    methods: {
      scroll(params) {
        console.log(params, '滚动中');
      },
    },
  }
`,
};

export default base;
