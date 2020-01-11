/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: `<w-tag>标签</w-tag><w-tag closable>标签</w-tag><w-tag disabled>标签</w-tag><w-tag closable disabled>标签</w-tag>
<br />
<br />
<w-check-tag :value="true">标签</w-check-tag><w-check-tag disabled>标签</w-check-tag><w-check-tag :value="true" disabled>标签</w-check-tag>`,
};

export default base;
