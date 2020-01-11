/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '多彩徽标',
  desc: '当 <code>status</code> 为色值的时候可以自定义点的颜色。',
  code: `<w-badge status="#00f"></w-badge>
<br />
<w-badge status="#00f" text="自定义"></w-badge>`,
};

export default base;
