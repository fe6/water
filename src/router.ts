import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/affix',
      name: 'Affix',
      component: () => import(/* webpackChunkName: "affix" */ './views/Affix.vue'),
    },
    {
      path: '/icon',
      name: 'Icon',
      component: () => import(/* webpackChunkName: "icon" */ './views/Icon.vue'),
    },
    {
      path: '/grid',
      name: 'Grid',
      component: () => import(/* webpackChunkName: "grid" */ './views/Grid.vue'),
    },
  ],
});
