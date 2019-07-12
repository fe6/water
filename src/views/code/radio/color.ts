import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/radio/base';

const base: ApiEntity = {
  title: '定制颜色',
  desc: '添加 <code>checkColor</code> 和 <code>hoverColor</code> 属性即可。',
  code: codeCommon({ attr: 'value="更多" checkColor="#f00" hoverColor="#0f0"' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    attr: 'colorValue',
    props: {
      checkColor: '#f00',
      hoverColor: '#0f0',
      textColor: '#1996f9',
    },
  }),
};

export default base;
