import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '加载中',
  desc: '设置 <code>loading</code> 属性即可',
  code: `<w-tag size="small" loading>标签</w-tag>
<w-tag size="small" loading color="#1996f9">标签</w-tag>
<w-tag size="small" loading color="#1996f9" color-type="section">标签</w-tag>
<br />
<br />
<w-tag loading>标签</w-tag>
<w-tag loading color="#1996f9">标签</w-tag>
<w-tag loading color="#1996f9" color-type="section">标签</w-tag>
<br />
<br />
<w-tag size="large" loading>标签</w-tag>
<w-tag size="large" loading color="#1996f9">标签</w-tag>
<w-tag size="large" loading color="#1996f9" color-type="section">标签</w-tag>`,
};

export default base;
