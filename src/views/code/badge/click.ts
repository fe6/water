/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '可点击',
  desc: '用 a 标签进行包裹即可。',
  code: `<a href="#">
  <w-badge :value="99" />
</a>`,
};

export default base;
