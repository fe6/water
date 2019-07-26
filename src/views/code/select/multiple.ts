import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, defaultDatas } from '@/views/code/select/base';

const base: ApiEntity = {
  title: '标签模式',
  desc: '添加 <code>mode="multiple"</code> 属性即可。',
  code: codeCommon({ attr: 'mode="multiple" v-model="selectValue"' }),
  js: `{
  data() {
    return {
      selectValue: ['苹果', '鸭梨'],
      defaultDatas: ${JSON.stringify(defaultDatas)},
    };
  },
}`,
};

export default base;
