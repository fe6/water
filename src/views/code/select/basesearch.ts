import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/select/base';

const base: ApiEntity = {
  title: '单选搜索模式',
  desc: '添加 <code>:search="true"</code> 属性即可。',
  code: codeCommon({ attr: ':value="更多" search' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    props: {
      search: true,
    },
    attr: 'basesearchValue',
  }),
};

export default base;
