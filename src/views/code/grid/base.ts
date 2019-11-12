import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc:
    '从堆叠到水平排列。使用单一的一组 <code>Row</code> 和 <code>Col</code> 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。',
  code: `<w-row class-name="demo-grid-row">
  <w-col :class-name="['demo-grid-col', 'demo-grid-text']" :span="12">col-12</w-col>
  <w-col :class-name="['demo-grid-col', 'demo-grid-text']" :span="12">col-12</w-col>
</w-row>`,
};

export default base;
