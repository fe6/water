/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '插槽',
  desc: '标题可以定制化。',
  code: `<w-statistic v-model="value1">
  <div slot="title" style="color: red">Active Users</div>
</w-statistic>`,
  js: `
  {
    data() {
      return {
        value1: 12345.29,
      };
    },
  }
`,
};

export default base;
