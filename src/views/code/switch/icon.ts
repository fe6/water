/** @format */

import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon } from '@/views/code/switch/base';
import { IMAGE, ALT } from '@/views/common/constant';

const base: ApiEntity = {
  title: '自定义内容',
  desc: '设置 <code>slot</code> 属性即可',
  code: codeCommon({
    content: `
  <span slot="open">开</span>
  <img slot="close" src="${IMAGE}" alt="${ALT}" style="width: 16px; display: block; position: absolute; top: 50%; transform: translateY(-50%); right: 5px" />
`,
  }),
};

export default base;
