/** @format */

import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/affix/base';

const defaultText = '120px to affix top';

const base: ApiEntity = {
  title: '设置固定距离',
  desc: '可以获得是否固定的状态。',
  code: codeCommon({ attr: ':offsetTop="100"', content: defaultText }),
  render: (h: Function) =>
    renderCommon(h, null, {
      defaultText,
      props: {
        offsetTop: 100,
      },
    }),
};

export default base;
