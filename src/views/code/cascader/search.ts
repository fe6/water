import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/cascader/base';

const base: ApiEntity = {
  title: '搜索',
  desc: '添加 <code>search</code> 属性即可。',
  code: codeCommon({ attr: 'changeOnSelect :value="[]"' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    attr: 'searchValue',
    props: {
      search: true,
    },
  }),
};

export default base;
