import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/button/base';

const base: ApiEntity = {
  title: '幽灵按钮',
  desc: '幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。',
  code: codeCommon({ attr: 'ghost' }),
  render: (h: Function) => renderCommon(h, {
    demoClassName: 'demo-deep',
    props: {
      ghost: true,
    },
  }),
};

export default base;
