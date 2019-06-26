import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/switch/base';

const base: ApiEntity = {
  title: '禁用状态',
  desc: '设置 <code>disabled</code> 属性即可',
  code: codeCommon({ attr: 'disabled' }),
  render: (h: Function) => renderCommon(h, {
    props: {
      disabled: true,
    },
  }),
};

export default base;
