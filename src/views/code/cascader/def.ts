import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, defaultDatas } from '@/views/code/cascader/base';

const base: ApiEntity = {
  title: '默认值',
  desc: '默认值通过数组的方式指定。',
  code: codeCommon({ attr: 'v-model="defValue"' }),
  js: `
  {
    data() {
      return {
        defaultDatas: ${JSON.stringify(defaultDatas)},
        defValue: ['Zhejiang', 'Hangzhou', 'West Lake'],
      };
    },
  }
`,
};

export default base;
