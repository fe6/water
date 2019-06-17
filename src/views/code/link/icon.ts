import { ApiEntity } from '@/views/entity/demoentity';
import { IMAGE, ALT } from '@/views/common/constant';
import { codeCommon, renderCommon } from '@/views/code/link/base';

const base: ApiEntity = {
  title: '超链图标',
  desc: '将属性 <code>slot</code> 设置为 <code>icon</code> ,进行图标的定制。',
  code: `${codeCommon({ content: `\n  <img src="${IMAGE}" alt="${ALT}" />\n  这没有链接带图标的超链\n` })}`,
  render: (createElement: Function) => renderCommon(createElement, {
    defaultText: '这个超链没有链接',
    render: (h: Function) => [h('img', {
      attrs: {
        src: IMAGE,
        alt: ALT,
      },
      slot: 'icon',
    }), '这没有链接带图标的超链'],
  }),
};

export default base;
