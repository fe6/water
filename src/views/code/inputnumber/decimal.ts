/** @format */

import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon } from '@/views/code/inputnumber/base';

const base: ApiEntity = {
  title: '小数',
  desc: '添加 <code>step</code> 属性即可。',
  code: codeCommon({ attr: ':step="0.11" v-model="stepValue"' }),
  js: `{
  data() {
    return {
      stepValue: 1,
    }
  },
}`,
};

export default base;
