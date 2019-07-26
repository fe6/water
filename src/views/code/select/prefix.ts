import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, defaultDatas } from '@/views/code/select/base';

const base: ApiEntity = {
  title: '前缀后缀',
  desc: '添加 <code>prefix="prefix"</code> 属性即可。',
  code: codeCommon({ attr: 'v-model="selectValue" prefix="prefix " suffix=" suffix"' }),
  js: `{
  data() {
    return {
      selectValue: '更多',
      defaultDatas: ${JSON.stringify(defaultDatas)},
    };
  },
}`,
};

export default base;
