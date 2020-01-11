/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '位置',
  desc: '设置 <code>placement</code> 即可。',
  code: `<w-popover placement="rightTop">
  <span>rightTop 方向</span>
  <w-link slot="title" href="https://github.com/fe6/water">水滴</w-link>
  <div slot="content">
    <div>这是内容。</div>
    <div>这是内容。</div>
  </div>
</w-popover>`,
};

export default base;
