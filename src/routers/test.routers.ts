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
  {
    path: '/tmodal',
    name: 'TestModal',
    meta: {
      title: TITLE.Modal,
    },
    component: () => import(/* webpackChunkName: "modal" */ '@/views/test/Modal.vue'),
  },
  {
    path: '/tpopconfirm',
    name: 'TestPopconfirm',
    meta: {
      title: TITLE.Popconfirm,
    },
    component: () => import(/* webpackChunkName: "popconfirm" */ '@/views/test/Popconfirm.vue'),
  },
  {
    path: '/tprogress',
    name: 'TestProgress',
    meta: {
      title: TITLE.Progress,
    },
    component: () => import(/* webpackChunkName: "progress" */ '@/views/test/Progress.vue'),
  },
];
