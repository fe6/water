/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '状态点',
  desc: '用于表示状态的小圆点。',
  code: `<w-badge status="success"></w-badge>
<w-badge status="error"></w-badge>
<w-badge status="default"></w-badge>
<w-badge status="processing"></w-badge>
<w-badge status="warning"></w-badge>

<w-badge status="success" text="成功"></w-badge>
<w-badge status="error" text="报错"></w-badge>
<w-badge status="default" text="默认"></w-badge>
<w-badge status="processing" text="进行中"></w-badge>
<w-badge status="warning" text="提醒"></w-badge>`,
};

export default base;
