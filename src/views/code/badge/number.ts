/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '独立使用',
  desc: '不包裹任何元素即是独立使用，可自定样式展现。',
  code: `<w-badge :value="5"></w-badge>
<w-badge :value="22" style="line-height: 18px; background: #fff; border: 1px solid #dcdcdc; color: #999; box-shadow: 0 0 0 1px #d9d9d9 inset"></w-badge>
<w-badge :value="19" style="background: #52c41a"></w-badge>`,
};

export default base;
