import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '三种大小',
  desc: '设置 <code>size</code> 即可。',
  code: `<w-input-number size="small"></w-input-number>
<w-input-number></w-input-number>
<w-input-number size="large"></w-input-number>`,
};

export default base;
