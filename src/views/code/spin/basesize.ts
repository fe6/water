import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: 'icon 版的三种大小',
  desc: '设置 <code>size</code> 即可。',
  code: `<w-spin size="small"></w-spin>
<w-spin></w-spin>
<w-spin size="large"></w-spin>`,
};

export default base;
