/** @format */

import TITLE from '@/common/title';

// 本地开发即刻预览
export default [
  {
    path: '/ttext',
    name: 'TestText',
    meta: {
      title: TITLE.Text,
    },
    component: () =>
      import(/* webpackChunkName: "test-text" */ '@/views/test/Text.vue'),
  },
];
