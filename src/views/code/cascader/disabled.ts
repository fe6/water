import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/cascader/base';

const base: ApiEntity = {
  title: '不可选状态',
  desc: '添加 <code>disabled</code> 属性即可。',
  code: codeCommon({ attr: 'changeOnSelect :value="[]"' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    attr: 'changeonselectValue',
    props: {
      disabled: true,
    },
  }),
};

export default base;
