import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/select/basedisabled';

const base: ApiEntity = {
  title: '多选禁用',
  desc: '设置 <code>disabled</code> 即可。',
  code: codeCommon({ attr: 'mode="tag"' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    props: {
      mode: 'tag',
    },
    attr: 'tagdisabledValue',
  }),
};

export default base;
