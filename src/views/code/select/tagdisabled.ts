import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, defaultDatas } from '@/views/code/select/basedisabled';

const base: ApiEntity = {
  title: '多选禁用',
  desc: '设置 <code>disabled</code> 即可。',
  code: codeCommon({ attr: 'mode="tag"' }),
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
