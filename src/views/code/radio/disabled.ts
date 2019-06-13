import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/radio/base';

const base: ApiEntity = {
  title: '不可用状态',
  desc: '添加 <code>disabled</code> 属性即可让按钮处于不可用状态，同时按钮样式也会改变。',
  code: codeCommon({ attr: 'value="苹果" disabled' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    props: {
      disabled: true,
    },
  }),
};

export default base;
