import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/select/basesize';

const base: ApiEntity = {
  title: '多选大小',
  desc: '分三种大小，设置 <code>size</code> 即可。',
  code: codeCommon({ attr: 'mode="multiple"' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    props: {
      mode: 'multiple',
    },
    attr: 'multiplesizeValue',
  }),
};

export default base;
