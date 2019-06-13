import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon, RenderReturnEntity } from '@/views/code/button/base';
import { IMAGE, ALT } from '@/views/common/constant';

const base: ApiEntity = {
  title: '图标按钮',
  desc: '将属性 <code>slot</code> 设置为 <code>icon</code> ,进行图标的定制。',
  code: `${codeCommon({ content: `<img src="${IMAGE}" alt="${ALT}" />` })}\n${codeCommon()}`,
  render: (createElement: Function) => createElement('div', {
    class: 'demo-demo',
  }, [
    renderCommon(createElement, {
      noLayout: true,
      render: (h: Function) => h('img', {
        attrs: {
          src: IMAGE,
          alt: ALT,
        },
        slot: 'icon',
      }),
    }),
    renderCommon(createElement, {
      noLayout: true,
      render: (h: Function, { typeValue }: RenderReturnEntity) => [h('img', {
        attrs: {
          src: IMAGE,
          alt: ALT,
        },
        slot: 'icon',
      }), typeValue || 'Default'],
    }),
  ]),
};

export default base;
