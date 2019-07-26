import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, defaultDatas } from '@/views/code/checkbox/base';

const base: ApiEntity = {
  title: '半选状态',
  desc: '添加 <code>indeterminate</code> 属性即可。',
  code: codeCommon({ attr: 'indeterminate' }),
  js: `{
  data() {
    return {
      defaultDatas: ${JSON.stringify(defaultDatas)}
    };
  },
}`,
};

export default base;
