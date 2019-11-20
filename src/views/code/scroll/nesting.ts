import { ApiEntity } from '@/views/entity/demoentity';

const nesting: ApiEntity = {
  title: '嵌套',
  desc: '业务端往往复杂度比较高，有时候会嵌套使用。',
  code: `<w-scroll style="height: 200px;">
  <div v-for="(text, index) in texts" :key="index">{{ text }}</div>
  <w-scroll style="height: 100px;">
    <div v-for="(text, index) in texts1" :key="'c'+index" style="color: #f00">{{ text }}</div>
  </w-scroll>
  <div v-for="(text, index) in texts" :key="'b'+index">{{ text }}</div>
</w-scroll>`,
  js: `
  {
    data() {
      return {
        texts: [],
        texts1: [],
      };
    },
    created() {
      for (let i = 1; i < 30; i++) {
        this.texts.push('这是一段文字' + i);
      }
      for (let i = 1; i < 60; i++) {
        this.texts1.push('这是一段文字' + i);
      }
    },
  }
`,
};

export default nesting;
