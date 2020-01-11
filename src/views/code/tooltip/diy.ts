/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '自定义样式',
  desc:
    '可通过 <code>arrowColor</code> ， <code>contentStyle</code> 配合调整样式。',
  code: `<w-tooltip
  placement="bottomRight"
  :interval="16"
  trigger="click"
  arrow-color="rgba(255, 255, 0, 0.4)"
  :content-style="{
    'background-color': 'rgba(0, 255, 255, 0.4)',
    color: 'rgba(255, 0, 255, 0.2)',
    'box-shadow': '0 2px 8px rgba(0, 255, 255, 0.14)',
  }"
  content="文字提示"
>
  <span>点击显示 Tooltip 。</span>
</w-tooltip>`,
};

export default base;
