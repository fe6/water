import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/link/base';

const base: ApiEntity = {
  title: '新标签页跳转',
  desc: '设置 <code>target</code> 属性即可。',
  code: codeCommon({ attr: 'href="https://www.evente.cn" target="_blank"', content: '去 活动易 官网新标签页打开' }),
  render: (h: Function) => renderCommon(h, {
    defaultText: '去 活动易 官网标签页打开',
    props: {
      href: 'https://www.evente.cn',
      target: '_blank',
    },
  }),
};

export default base;
