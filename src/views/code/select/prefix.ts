import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/select/base';

const base: ApiEntity = {
  title: '前缀后缀',
  desc: '添加 <code>prefix="prefix"</code> 属性即可。',
  code: codeCommon({ attr: ':value="更多" prefix="prefix " suffix=" suffix"' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    props: {
      prefix: 'prefix ',
      suffix: ' suffix',
    },
    attr: 'prefixValue',
  }),
};

export default base;
