import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '基本使用。',
  code: `<w-statistic title="Active Users" v-model="value1" style="display:inline-block"></w-statistic>
<w-statistic title="Account Balance (CNY)" v-model="value2" :precision="2" style="margin-left: 32px;display:inline-block"></w-statistic>`,
  js: `
  {
    data() {
      return {
        value1: 12345.29,
        value2: 112893,
      };
    },
  }
`,
};

export default base;
