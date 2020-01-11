/** @format */

import { ApiEntity } from '@/views/entity/demoentity';
import { defaultDatas } from '@/views/code/cascader/base';

const base: ApiEntity = {
  title: '搜索',
  desc: '添加 <code>search</code> 属性即可。',
  code: '<w-cascader search :options="defaultDatas"></w-cascader>',
  js: `
  {
    data() {
      return {
        defaultDatas: ${JSON.stringify(defaultDatas)}
      };
    },
  }`,
};

export default base;
