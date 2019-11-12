import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '自定义样式',
  desc:
    '可通过 <code>arrowColor</code> ， <code>titleStyle</code> ， <code>contentStyle</code> 配合调整样式。',
  code: `<w-popover
  placement="bottom"
  :interval="16"
  trigger="click"
  arrowColor="rgba(255, 255, 0, 0.4)"
  :titleStyle="{
    'background-color': 'rgba(0, 255, 255, 0.4)',
    color: 'rgba(255, 0, 255, 0.2)',
  }"
  :contentStyle="{
    'background-color': 'rgba(0, 255, 255, 0.4)',
    color: 'rgba(255, 0, 255, 0.2)',
    'box-shadow': '0 2px 8px rgba(0, 255, 255, 0.14)',
  }"
>
  <span>点击显示 Popover 。</span>
  <w-link slot="title" href="https://github.com/fe6/water">水滴</w-link>
  <div slot="content">
    <div>这是内容。</div>
    <div>这是内容。</div>
  </div>
</w-popover>`,
};

export default base;
