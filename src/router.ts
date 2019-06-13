import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      name: 'Index',
      children: [
        {
          path: '/affix',
          name: 'Affix',
          component: () => import(/* webpackChunkName: "affix" */ './views/demo/Affix.vue'),
        },
        {
          path: '/icon',
          name: 'Icon',
          component: () => import(/* webpackChunkName: "icon" */ './views/demo/Icon.vue'),
        },
        {
          path: '/grid',
          name: 'Grid',
          component: () => import(/* webpackChunkName: "grid" */ './views/demo/Grid.vue'),
        },
        {
          path: '/loadbar',
          name: 'Loadbar',
          component: () => import(/* webpackChunkName: "loadbar" */ './views/demo/Loadbar.vue'),
        },
        {
          path: '/badge',
          name: 'Badge',
          component: () => import(/* webpackChunkName: "badge" */ './views/demo/Badge.vue'),
        },
        {
          path: '/breadcrumb',
          name: 'Breadcrumb',
          component: () => import(/* webpackChunkName: "breadcrumb" */ './views/demo/Breadcrumb.vue'),
        },
        {
          path: '/button',
          name: 'Button',
          component: () => import(/* webpackChunkName: "button" */ './views/demo/Button.vue'),
        },
        {
          path: '/checkbox',
          name: 'Checkbox',
          component: () => import(/* webpackChunkName: "checkbox" */ './views/demo/Checkbox.vue'),
        },
        {
          path: '/input',
          name: 'Input',
          component: () => import(/* webpackChunkName: "input" */ './views/demo/Input.vue'),
        },
        {
          path: '/link',
          name: 'Link',
          component: () => import(/* webpackChunkName: "link" */ './views/demo/Link.vue'),
        },
        {
          path: '/radio',
          name: 'Radio',
          component: () => import(/* webpackChunkName: "radio" */ './views/demo/Radio.vue'),
        },
      ],
      component: () => import(/* webpackChunkName: "index" */ './views/Index.vue'),
      redirect: { name: 'Icon' },
    },
  ],
});
