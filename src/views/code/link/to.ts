import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/link/base';

const base: ApiEntity = {
  title: '站内跳转',
  desc: '设置 <code>to</code> 属性即可。',
  code: codeCommon({
    attr: ':to="{ name: \'Icon\' }"',
    content: '去 Icon 图片 的站内跳转',
  }),
  render: (h: Function) =>
    renderCommon(h, {
      defaultText: '去 Icon 图片 的站内跳转',
      props: {
        to: {
          name: 'Icon',
        },
      },
    }),
};

export default base;
