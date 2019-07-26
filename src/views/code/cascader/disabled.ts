import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon } from '@/views/code/cascader/base';

const base: ApiEntity = {
  title: '不可选状态',
  desc: '添加 <code>disabled</code> 属性即可。',
  code: codeCommon({ attr: 'disabled' }),
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
