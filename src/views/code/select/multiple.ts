import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/select/base';

const base: ApiEntity = {
  title: '标签模式',
  desc: '添加 <code>mode="multiple"</code> 属性即可。',
  code: codeCommon({ attr: ':value="[苹果]" mode="multiple"' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    props: {
      mode: 'multiple',
    },
    attr: 'multipleValue',
  }),
};

export default base;
