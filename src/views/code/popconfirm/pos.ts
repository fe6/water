import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '位置',
  desc: '设置 <code>placement</code> 即可。',
  code: `<w-popconfirm placement="rightTop">
  <span>rightTop</span>
  <div slot="content">
    <a href="https://github.com/fe6/water" target="_blank">水滴</a>
    官网
  </div>
</w-popconfirm>`,
};

export default base;
