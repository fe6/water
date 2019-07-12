import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/checkbox/base';

const base: ApiEntity = {
  title: '定制颜色',
  desc: '添加 <code>checkColor</code> 和 <code>hoverColor</code> 属性即可。',
  code: codeCommon({ attr: 'checkColor="#f00" hoverColor="#0f0"' }),
  render: (h: Function) => renderCommon(h, {
    props: {
      checkColor: '#f00',
      hoverColor: '#0f0',
      textColor: '#1996f9',
      value: '苹果',
    },
  }),
};

export default base;
