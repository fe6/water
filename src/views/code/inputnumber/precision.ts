/** @format */

import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon } from '@/views/code/inputnumber/base';

const base: ApiEntity = {
  title: '精度',
  desc: '添加 <code>precision</code> 属性即可。',
  code: codeCommon({
    attr:
      ':precision="3" :min="10" :max="20" :step="0.123" v-model="precisionValue"',
  }),
  js: `{
  data() {
    return {
      precisionValue: 15.123,
    };
  },
}`,
};

export default base;
