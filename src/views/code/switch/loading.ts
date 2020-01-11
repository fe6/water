/** @format */

import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon } from '@/views/code/switch/base';

const base: ApiEntity = {
  title: '加载状态',
  desc: '设置 <code>loading</code> 属性即可',
  code: codeCommon({ attr: 'loading' }),
};

export default base;
