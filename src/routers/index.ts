/** @format */

import Vue from 'vue';
import VueRouter from 'vue-router';
import concat from 'lodash/concat';
import TITLE from '@/common/title';
import Home from '@/views/site/home/Home.vue';
import Dev from '@/views/site/dev/Dev.vue';

Vue.use(VueRouter);

// 动态路由管理
export const importDemoRouters = () => {
  const rq = require.context('@/routers', true, /\.routers\.ts$/);
  return rq.keys().map((key) => rq(key).default);
};

const isDev = process.env.NODE_ENV === 'development';

const routes = [
  {
    path: '',
    name: isDev ? 'Dev' : 'Home',
    meta: {
      title: TITLE.Home,
    },
    component: isDev ? Dev : Home,
  },
  {
    path: '/',
    name: 'Index',
    children: concat([], ...importDemoRouters()),
    component: () =>
      import(/* webpackChunkName: "index" */ '@/views/site/index/Index.vue'),
  },
];

if (isDev) {
  routes.push({
    path: '/home',
    name: 'Home',
    meta: {
      title: TITLE.Home,
    },
    component: Home,
  });
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
