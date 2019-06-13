import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/breadcrumb/base';

const base: ApiEntity = {
  title: '新标签页打开',
  desc: '设置 <code>open</code> 属性即可。',
  code: codeCommon({ attr: ':open="https://www.evente.cn"', content: '活动易' }),
  render: (createElement: Function) => renderCommon(createElement, {
    defaultText: '活动易',
    props: {
      open: 'https://www.evente.cn',
    },
  }),
};

export default base;
