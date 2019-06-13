import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/icon/base';

const base: ApiEntity = {
  title: '旋转效果',
  desc: '设置 spin 属性即可',
  code: codeCommon({ attr: 'spin' }),
  render: (h: Function) => renderCommon(h, {
    props: {
      spin: true,
    },
  }),
};

export default base;
