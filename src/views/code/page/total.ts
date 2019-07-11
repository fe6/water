import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/page/base';
/* eslint-disable */
const base: ApiEntity = {
  title: '总数',
  desc: '通过设置 <code>showTotal</code> 展示总共有多少数据。',
  code: codeCommon({ attr: ':showTotal="(total, range) => `${range[0]}-${range[1]} of ${total} items`" :total="125"' }),
  render: (h: Function) => renderCommon(h, {
    props: {
      total: 125,
      showTotal: ({ total, range }: any) => `${range[0]}-${range[1]} of ${total} items`,
    },
  }),
};

export default base;
