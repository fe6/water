/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: `<w-popover placement="bottom">
  <span>鼠标移入时将显示 Popover 。</span>
  <span slot="title">水滴</span>
  <div slot="content">
    <div>这是内容。</div>
    <div>这是内容。</div>
  </div>
</w-popover>`,
};

export default base;
