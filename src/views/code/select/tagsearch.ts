import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/select/base';

const base: ApiEntity = {
  title: '标签搜索模式',
  desc: '没有自动添加。添加 <code>:search="true"</code> 属性即可。',
  code: codeCommon({ attr: ':value="[更多]" search mode="tag"' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    props: {
      search: true,
      mode: 'tag',
    },
    attr: 'tagsearchValue',
  }),
};

export default base;
