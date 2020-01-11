/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '三种大小',
  desc:
    '我们为 <code>&lt;Input /&gt;</code> 输入框定义了三种尺寸（大、默认、小），高度分别为 32px、28px 和 24px。',
  code: `<w-input placeholder="small" size="small"></w-input>
<br/ >
<br/ >
<w-input placeholder="Default"></w-input>
<br/ >
<br/ >
<w-input placeholder="Large" size="large"></w-input>`,
};

export default base;
