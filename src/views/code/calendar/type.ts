/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '定制面板类型',
  desc: '设置 <code>type</code> 即可改变当前面板类型。',
  code:
    '<w-calendar type="year" :show-date="false" @change="changeFn"></w-calendar>',
  js: `{
  methods: {
    changeFn(params) {
      console.log(params, 'type change');
    },
  },
}`,
};

export default base;
