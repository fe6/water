import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* eslint-disable global-require */

const VueRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/doc',
      children: [
        {
          path: 'icon',
          name: 'Icon',
          component: () => import('../../water/icon/zh-cn.md'),
        },
      ],
      component: () => import('../views/Layout.vue'),
    },
  ],
});

export default VueRouter;
