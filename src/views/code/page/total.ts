/** @format */

import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon } from '@/views/code/page/base';

const base: ApiEntity = {
  title: '总数',
  desc: '通过设置 <code>showTotal</code> 展示总共有多少数据。',
  code: codeCommon({ attr: ':show-total="showTotal" :total="125"' }),
  js: `{
    methods: {
      showTotal({total, range}) {
        return range[0] + '-' + range[1] + ' of '+ total +' items';
      },
    },
  }`,
};

export default base;
