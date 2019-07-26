import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon } from '@/views/code/inputnumber/base';

const base: ApiEntity = {
  title: '不可手动输入状态',
  desc: '添加 <code>readonly</code> 属性即可。',
  code: codeCommon({ attr: 'readonly v-model="readonlyValue"' }),
  js: `{
  data() {
    return {
      readonlyValue: 2,
    };
  },
}`,
};

export default base;
