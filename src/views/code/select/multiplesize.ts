/** @format */

import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, defaultDatas } from '@/views/code/select/basesize';

const base: ApiEntity = {
  title: '多选大小',
  desc: '分三种大小，设置 <code>size</code> 即可。',
  code: codeCommon({ attr: 'mode="multiple"' }),
  js: `{
  data() {
    return {
      selectValue: [],
      defaultDatas: ${JSON.stringify(defaultDatas)},
    };
  },
}`,
};

export default base;
