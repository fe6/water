import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/inputnumber/base';

const base: ApiEntity = {
  title: '禁用状态',
  desc: '添加 <code>disabled</code> 属性即可。',
  code: codeCommon({ attr: 'disabled' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    props: {
      disabled: true,
    },
  }),
};

export default base;
