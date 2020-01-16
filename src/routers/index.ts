/** @format */

import Vue from 'vue';
import VueRouter from 'vue-router';
import concat from 'lodash/concat';
import TITLE from '@/common/title';
import Home from '@/views/site/home/Home.vue';

Vue.use(VueRouter);

// 动态路由管理
export const importDemoRouters = () => {
  const rq = require.context('@/routers', true, /\.routers\.ts$/);
  return rq.keys().map((key) => rq(key).default);
};

const routes = [
  {
    path: '',
    name: 'home',
    meta: {
      title: TITLE.Home,
    },
    component: Home,
  },
  {
    path: '/',
    name: 'Index',
    children: concat([], ...importDemoRouters()),
    component: () =>
      import(/* webpackChunkName: "index" */ '@/views/site/index/Index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
