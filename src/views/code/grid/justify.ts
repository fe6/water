/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '左右对齐',
  desc: '使用 <code>justify</code> 可以设置列的对齐方式。',
  code: `<w-row justify="end">
  <w-col :span="4">
    <div class="demo-grid-box">col-4</div>
  </w-col>
  <w-col :span="4">
    <div class="demo-grid-box">col-4</div>
  </w-col>
</w-row>`,
};

export default base;
