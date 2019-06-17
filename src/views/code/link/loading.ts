import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/link/base';

const base: ApiEntity = {
  title: '加载中状态',
  desc: '设置 <code>loading</code> 属性即可。',
  code: codeCommon({ attr: 'loading', content: '加载中的超链' }),
  render: (h: Function) => renderCommon(h, {
    defaultText: '加载中的超链',
    props: {
      loading: true,
    },
  }),
};

export default base;
