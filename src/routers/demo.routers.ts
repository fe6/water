/** @format */

import TITLE from '@/common/title';

export default [
  {
    path: '/text',
    name: 'DemoText',
    meta: {
      title: TITLE.Text,
    },
    component: () =>
      import(/* webpackChunkName: "demo-text" */ '@/views/demo/Text.vue'),
  },
];
