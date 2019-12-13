import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '封顶数字',
  desc:
    '超过 <code>overflowCount</code> 的会显示为 <code>overflowCount+</code>，默认的 <code>overflowCount</code> 为 99。',
  code: `<w-badge :value="99"></w-badge>
<w-badge :value="111"></w-badge>
<w-badge :value="20" :overflow-count="10"></w-badge>
<w-badge :value="100111" :overflow-count="999"></w-badge>`,
};

export default base;
