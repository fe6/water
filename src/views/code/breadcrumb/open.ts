import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon } from '@/views/code/breadcrumb/base';

const base: ApiEntity = {
  title: '新标签页打开',
  desc: '设置 <code>open</code> 属性即可。',
  code: codeCommon({ attr: 'open="http://water.lab.evente.cn"', content: '水滴' }),
};

export default base;
