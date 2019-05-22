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
    {
      path: '/loadbar',
      name: 'Loadbar',
      component: () => import(/* webpackChunkName: "loadbar" */ './views/Loadbar.vue'),
    },
    {
      path: '/badge',
      name: 'Badge',
      component: () => import(/* webpackChunkName: "badge" */ './views/Badge.vue'),
    },
    {
      path: '/breadcrumb',
      name: 'Breadcrumb',
      component: () => import(/* webpackChunkName: "breadcrumb" */ './views/Breadcrumb.vue'),
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import(/* webpackChunkName: "button" */ './views/Button.vue'),
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: () => import(/* webpackChunkName: "checkbox" */ './views/Checkbox.vue'),
    },
  ],
});
