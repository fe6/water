/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: `<w-popconfirm v-model="popcomfirmStatus" placement="bottomLeft">
  <span>点击我。</span>
  <div slot="content">
    <a href="https://github.com/fe6/water" target="_blank">水滴</a>
    官网，大家可以去看看，提提建议。
  </div>
</w-popconfirm>`,
  js: `{
  data() {
    return {
      popcomfirmStatus: false,
    };
  },
}`,
};

export default base;
