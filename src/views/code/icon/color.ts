import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/icon/base';

const base: ApiEntity = {
  title: '定制颜色',
  desc: '设置 color 属性即可',
  code: codeCommon({ attr: 'color="#f00"' }),
  render: (h: Function) => renderCommon(h, {
    props: {
      color: '#f00',
    },
  }),
};

export default base;
