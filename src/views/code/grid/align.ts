/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '上下对齐',
  desc: '使用 <code>align</code> 可以设置列的对齐方式。',
  code: `<w-row align="middle">
  <w-col :span="12">
    <div class="demo-grid-box">col-12</div>
  </w-col>
  <w-col :span="12" style="height: 100px; lineHeight: 100px">
    <div class="demo-grid-box">col-12</div>
  </w-col>
</w-row>`,
};

export default base;
