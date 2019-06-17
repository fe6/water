import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/checkbox/base';

const base: ApiEntity = {
  title: '半选状态',
  desc: '添加 <code>indeterminate</code> 属性即可。',
  code: codeCommon({ attr: 'disabled' }),
  render: (h: Function) => renderCommon(h, {
    props: {
      indeterminate: true,
    },
  }),
};

export default base;
