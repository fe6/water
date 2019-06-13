import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/button/base';

const base: ApiEntity = {
  title: '不可用状态',
  desc: '添加 <code>disabled</code> 属性即可让按钮处于不可用状态，同时按钮样式也会改变。',
  code: `${codeCommon({ attr: 'disabled' })}\n${codeCommon({ attr: 'ghost' })}`,
  render: (createElement: Function) => createElement('div', {
    class: 'demo-demo',
  }, [
    renderCommon(createElement, {
      noLayout: true,
      props: {
        disabled: true,
      },
    }),
    renderCommon(createElement, {
      noLayout: true,
      demoClassName: 'demo-deep',
      props: {
        disabled: true,
      },
    }),
  ]),
};

export default base;
