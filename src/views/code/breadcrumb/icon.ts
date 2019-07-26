import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon } from '@/views/code/breadcrumb/base';
import { IMAGE, ALT } from '@/views/common/constant';

const base: ApiEntity = {
  title: '带图标',
  desc: '结合 <code>solt=icon</code> 使用。',
  code: codeCommon({ attr: 'href="http://water.lab.evente.cn"', content: `\n    <img slot="icon" src="${IMAGE}" alt="${ALT}" />\n    水滴\n  ` }),
};

export default base;
