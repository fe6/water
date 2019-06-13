import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/icon/base';
import { IMAGE, ALT } from '@/views/common/constant';

const base: ApiEntity = {
  title: '定制图标',
  desc: '在内容直接写图标即可',
  code: codeCommon({ content: `\n  <img src="${IMAGE}" alt="${ALT}" />\n` }),
  render: (createElement: Function) => renderCommon(createElement, {
    render: (h: Function) => h('img', {
      attrs: {
        src: IMAGE,
        alt: ALT,
      },
    }),
  }),
};

export default base;
