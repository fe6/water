/** @format */

import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/page/base';

const base: ApiEntity = {
  title: '更多',
  desc: '更多分页。',
  code: codeCommon({ attr: ':simple="true"' }),
  render: (h: Function) =>
    renderCommon(h, {
      props: {
        simple: true,
      },
    }),
};

export default base;
