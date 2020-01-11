/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const heng: ApiEntity = {
  title: '横向滚动',
  desc:
    '实现横向滚动，对 CSS 是比较苛刻的。首先你要保证 wrapper 不换行（ <code>white-space nowrap</code> ），并且 content 的 display 是 inline-block（ <code>display inline-block</code> ）。',
  code: `<w-scroll type="horizontal">
  <div style="white-space: nowrap">
    <div v-for="(text, index) in texts" :key="index" style="display: inline-block;border-right: 1px solid;height:200px;">{{ text }}</div>
  </div>
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
  }
`,
};

export default heng;
