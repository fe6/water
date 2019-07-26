import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '左右对齐',
  desc: '使用 <code>justify</code> 可以设置列的对齐方式。',
  code: `<w-row>
  <w-col :span="6" :order="4">
    <div class="demo-grid-box">1 col-order-4</div>
  </w-col>
  <w-col :span="6" :order="3">
    <div class="demo-grid-box">2 col-order-3</div>
  </w-col>
  <w-col :span="6" :order="2">
    <div class="demo-grid-box">3 col-order-2</div>
  </w-col>
  <w-col :span="6" :order="1">
    <div class="demo-grid-box">4 col-order-1</div>
  </w-col>
</w-row>`,
};

export default base;
