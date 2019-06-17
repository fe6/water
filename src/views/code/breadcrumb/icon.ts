import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/breadcrumb/base';
import { IMAGE, ALT } from '@/views/common/constant';

const base: ApiEntity = {
  title: '带图标',
  desc: '结合 <code>solt=icon</code> 使用。',
  code: codeCommon({ attr: ':to="{ name: \'Button\' }"', content: `\n    <img src="${IMAGE}" alt="${ALT}" />\n    按钮\n  ` }),
  render: (createElement: Function) => renderCommon(createElement, {
    icon: true,
    defaultText: '按钮',
    props: {
      to: {
        name: 'Button',
      },
    },
  }),
};

export default base;
