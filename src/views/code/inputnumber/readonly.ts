import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/inputnumber/base';

const base: ApiEntity = {
  title: '不可手动输入状态',
  desc: '添加 <code>readonly</code> 属性即可。',
  code: codeCommon({ attr: 'readonly' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    props: {
      readonly: true,
    },
  }),
};

export default base;
