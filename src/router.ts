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
          meta: {
            title: 'Affix 固钉',
          },
          component: () => import(/* webpackChunkName: "affix" */ './views/demo/Affix.vue'),
        },
        {
          path: '/icon',
          name: 'Icon',
          meta: {
            title: 'Icon 图标',
          },
          component: () => import(/* webpackChunkName: "icon" */ './views/demo/Icon.vue'),
        },
        {
          path: '/grid',
          name: 'Grid',
          meta: {
            title: 'Grid 栅格',
          },
          component: () => import(/* webpackChunkName: "grid" */ './views/demo/Grid.vue'),
        },
        {
          path: '/badge',
          name: 'Badge',
          meta: {
            title: 'Badge 徽章',
          },
          component: () => import(/* webpackChunkName: "badge" */ './views/demo/Badge.vue'),
        },
        {
          path: '/breadcrumb',
          name: 'Breadcrumb',
          meta: {
            title: 'Breadcrumb 面包屑',
          },
          component: () => import(/* webpackChunkName: "breadcrumb" */ './views/demo/Breadcrumb.vue'),
        },
        {
          path: '/button',
          name: 'Button',
          meta: {
            title: 'Button 按钮',
          },
          component: () => import(/* webpackChunkName: "button" */ './views/demo/Button.vue'),
        },
        {
          path: '/checkbox',
          name: 'Checkbox',
          meta: {
            title: 'Checkbox 多选',
          },
          component: () => import(/* webpackChunkName: "checkbox" */ './views/demo/Checkbox.vue'),
        },
        {
          path: '/input',
          name: 'Input',
          meta: {
            title: 'Input 徽章',
          },
          component: () => import(/* webpackChunkName: "input" */ './views/demo/Input.vue'),
        },
        {
          path: '/link',
          name: 'Link',
          meta: {
            title: 'Link 超链',
          },
          component: () => import(/* webpackChunkName: "link" */ './views/demo/Link.vue'),
        },
        {
          path: '/radio',
          name: 'Radio',
          meta: {
            title: 'Radio 单选',
          },
          component: () => import(/* webpackChunkName: "radio" */ './views/demo/Radio.vue'),
        },
      ],
      component: () => import(/* webpackChunkName: "index" */ './views/Index.vue'),
      redirect: { name: 'Icon' },
    },
  ],
});
