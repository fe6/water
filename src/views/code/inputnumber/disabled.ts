import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon } from '@/views/code/inputnumber/base';

const base: ApiEntity = {
  title: '禁用状态',
  desc: '添加 <code>disabled</code> 属性即可。',
  code: codeCommon({ attr: 'disabled' }),
};

export default base;
