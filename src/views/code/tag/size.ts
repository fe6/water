/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '三种大小',
  desc: '设置 <code>size</code> 属性即可',
  code: `<w-tag size="small">标签</w-tag>
<w-tag>标签</w-tag>
<w-tag size="large">标签</w-tag>
<br />
<br />
<w-tag size="small" color="#f00">标签</w-tag>
<w-tag color="#f00">标签</w-tag>
<w-tag size="large" color="#f00">标签</w-tag>
<br />
<br />
<w-tag size="small" color="#f00" color-type="section">标签</w-tag>
<w-tag color="#f00" color-type="section">标签</w-tag>
<w-tag size="large" color="#f00" color-type="section">标签</w-tag>`,
};

export default base;
