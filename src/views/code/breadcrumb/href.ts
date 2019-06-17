import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/breadcrumb/base';

const base: ApiEntity = {
  title: '外链跳转',
  desc: '设置 <code>href</code> 属性即可。',
  code: codeCommon({ attr: ':href="https://www.evente.cn"', content: '活动易' }),
  render: (createElement: Function) => renderCommon(createElement, {
    defaultText: '活动易',
    props: {
      href: 'https://www.evente.cn',
    },
  }),
};

export default base;
