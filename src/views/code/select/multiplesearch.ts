import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, defaultDatas } from '@/views/code/select/base';

const base: ApiEntity = {
  title: '多选搜索模式',
  desc: '没有显示默认文案。添加 <code>:search="true"</code> 属性即可。',
  code: codeCommon({ attr: 'v-model="selectValue" search mode="multiple"' }),
  js: `{
  data() {
    return {
      selectValue: ['更多'],
      defaultDatas: ${JSON.stringify(defaultDatas)},
    };
  },
}`,
};

export default base;
