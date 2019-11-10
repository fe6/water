import { ApiEntity } from '@/views/entity/demoentity';
import { defaultDatas } from '@/views/code/cascader/base';

const base: ApiEntity = {
  title: '默认值',
  desc: '默认值通过数组的方式指定。',
  code: '<w-cascader v-model="defValue" :options="defaultDatas"></w-cascader>',
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
