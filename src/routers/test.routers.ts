import { TITLE } from '@/views/common/constant';

export default [
  {
    path: '/tinput',
    name: 'TestInput',
    meta: {
      title: TITLE.Input,
    },
    component: () => import(/* webpackChunkName: "input" */ '@/views/test/Input.vue'),
  },
];
