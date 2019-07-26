import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: `<w-tooltip content="文字提示" placement="bottomLeft">
  <span>鼠标移入时将显示 Tooltip 。</span>
</w-tooltip>`,
};

export default base;
