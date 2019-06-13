import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/link/base';

const base: ApiEntity = {
  title: '禁用状态',
  desc: '设置 <code>disabled</code> 属性即可。',
  code: codeCommon({ attr: 'disabled', content: '禁用的超链' }),
  render: (h: Function) => renderCommon(h, {
    defaultText: '禁用的超链',
    props: {
      disabled: true,
    },
  }),
};

export default base;
