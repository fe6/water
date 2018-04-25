import Vue from 'vue';
import Router from 'vue-router';
import doc from './doc';

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
      children: doc,
      component: () => import('../views/Layout.vue'),
    },
  ],
});

VueRouter.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default VueRouter;
