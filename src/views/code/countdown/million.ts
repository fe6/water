/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '时间格式',
  desc: '设置 <code>format</code> 即可。',
  code: `<w-countdown format="HH:mm:ss:SSS" v-model="value1" title="Million" />`,
  js: `
  {
    data() {
      return {
        value1: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      };
    },
  }
`,
};

export default base;
