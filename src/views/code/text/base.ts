import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '基本使用。',
  code: `<w-text>Water</w-text>
<w-text strong>Water</w-text>
<w-text underline>Water</w-text>
<w-text underline strong>Water</w-text>
<w-text underline strong code>Water</w-text>
<w-text underline strong mark>Water</w-text>
<w-text underline strong mark mark-style="background-color: #ff4949;color:#fff;padding: 0 4px;">Water</w-text>
<w-text disabled>Water</w-text>
<w-text delete>Water</w-text>`,
};

export default base;
