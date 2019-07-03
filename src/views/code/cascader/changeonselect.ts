import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/cascader/base';

const base: ApiEntity = {
  title: '选择即改变',
  desc: '添加 <code>changeOnSelect</code> 属性即可。',
  code: codeCommon({ attr: 'changeOnSelect :value="[]"' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    attr: 'changeonselectValue',
    props: {
      changeOnSelect: true,
    },
  }),
};

export default base;
