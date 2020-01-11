/** @format */

import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, defaultDatas } from '@/views/code/select/base';

const base: ApiEntity = {
  title: '单选搜索模式',
  desc: '添加 <code>:search="true"</code> 属性即可。',
  code: codeCommon({ attr: 'v-model="basesearchValue" search' }),
  js: `{
  data() {
    return {
      basesearchValue: '更多',
      defaultDatas: ${JSON.stringify(defaultDatas)},
    };
  },
}`,
};

export default base;
