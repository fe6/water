/** @format */

import { ApiEntity } from '@/views/entity/demoentity';
import { linkStyle } from '@/views/code/badge/base';

const base: ApiEntity = {
  title: '小红点',
  desc: '没有具体的数字。',
  code: `<w-badge dot :value="1" style="margin-right: 16px;">
  <a href="#" style="${linkStyle}"></a>
</w-badge>
<w-badge dot :value="1" style="margin-right: 16px;">
  <w-icon></w-icon>
</w-badge>
<w-badge dot :value="1" style="margin-right: 16px;">
  <a href="#">Link something</a>
</w-badge>`,
};

export default base;
