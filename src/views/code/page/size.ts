/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

export const codeCommon = (): string => `<w-page :total="100"></w-page>
<br />
<w-page size="small" :total="100"></w-page>`;

const base: ApiEntity = {
  title: '大小',
  desc: '设置 <code>size</code> 即可。',
  code: codeCommon(),
};

export default base;
