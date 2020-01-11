/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '不同类型',
  desc: '设置 <code>type</code> 即可。',
  code: `<w-text>Water</w-text>
<w-text type="secondary">Water</w-text>
<w-text type="warning">Water</w-text>
<w-text type="info">Water</w-text>
<w-text type="danger">Water</w-text>
<w-text type="success">Water</w-text>`,
};

export default base;
