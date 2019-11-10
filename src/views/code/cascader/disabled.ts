import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '不可选状态',
  desc: '添加 <code>disabled</code> 属性即可。',
  code: '<w-cascader disabled :options="defaultDatas"></w-cascader>',
  js: `
  {
    data() {
      return {
        defaultDatas: []
      };
    },
  }`,
};

export default base;
