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
  {
    path: '/ttitle',
    name: 'TestTitle',
    meta: {
      title: TITLE.Title,
    },
    component: () =>
      import(/* webpackChunkName: "test-title" */ '@/views/test/Title.vue'),
  },
];
