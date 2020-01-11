/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '前缀和后缀',
  desc:
    '在输入框中添加前缀 ( <code>slot="prefix"</code> ) 或后缀 ( <code>slot="suffix"</code> ) 图标。',
  code: `<w-input placeholder="前缀和后缀">
  <w-icon slot="prefix"></w-icon>
  <w-icon slot="suffix"></w-icon>
</w-input>`,
};

export default base;
