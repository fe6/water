import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/cascader/base';

const base: ApiEntity = {
  title: '默认值',
  desc: '默认值通过数组的方式指定。',
  code: codeCommon({ attr: ':value="[\'zhejiang\', \'hangzhou\', \'xihu\']"' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    attr: 'defValue',
  }),
};

export default base;
