import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* eslint-disable global-require */

const VueRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页 - 水滴组件库',
      },
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/doc',
      children: [
        {
          path: 'icon',
          name: 'Icon',
          meta: {
            title: '图标',
          },
          component: () => import('../../water/icon/zh-cn.md'),
        },
      ],
      component: () => import('../views/Layout.vue'),
    },
  ],
});

VueRouter.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default VueRouter;
