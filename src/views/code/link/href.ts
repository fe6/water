import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon } from '@/views/code/link/base';

const base: ApiEntity = {
  title: '当前页面站外跳转',
  desc: '设置 <code>href</code> 属性即可。这个跳转类型是当前页面跳转。',
  code: codeCommon({ attr: 'href="https://www.evente.cn"', content: '去 活动易 官网站外跳转' }),
};

export default base;
