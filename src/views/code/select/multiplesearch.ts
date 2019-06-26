import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/select/base';

const base: ApiEntity = {
  title: '多选搜索模式',
  desc: '没有显示默认文案。添加 <code>:search="true"</code> 属性即可。',
  code: codeCommon({ attr: ':value="[更多]" search mode="multiple"' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    props: {
      search: true,
      mode: 'multiple',
    },
    attr: 'multiplesizeValue',
  }),
};

export default base;
