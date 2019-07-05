import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import { TITLE } from '@/views/common/constant';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.NODE_ENV === 'development' ? '/' : '/water/',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      name: 'Index',
      redirect: { name: 'Agreement' },
      children: [
        {
          path: '/agreement',
          name: 'Agreement',
          meta: {
            title: TITLE.Agreement,
          },
          component: () => import(/* webpackChunkName: "agreement" */ './views/Agreement.vue'),
        },
        {
          path: '/affix',
          name: 'Affix',
          meta: {
            title: TITLE.Affix,
          },
          component: () => import(/* webpackChunkName: "affix" */ './views/demo/Affix.vue'),
        },
        {
          path: '/icon',
          name: 'Icon',
          meta: {
            title: TITLE.Icon,
          },
          component: () => import(/* webpackChunkName: "icon" */ './views/demo/Icon.vue'),
        },
        {
          path: '/grid',
          name: 'Grid',
          meta: {
            title: TITLE.Grid,
          },
          component: () => import(/* webpackChunkName: "grid" */ './views/demo/Grid.vue'),
        },
        {
          path: '/badge',
          name: 'Badge',
          meta: {
            title: TITLE.Badge,
          },
          component: () => import(/* webpackChunkName: "badge" */ './views/demo/Badge.vue'),
        },
        {
          path: '/breadcrumb',
          name: 'Breadcrumb',
          meta: {
            title: TITLE.Breadcrumb,
          },
          component: () => import(/* webpackChunkName: "breadcrumb" */ './views/demo/Breadcrumb.vue'),
        },
        {
          path: '/button',
          name: 'Button',
          meta: {
            title: TITLE.Button,
          },
          component: () => import(/* webpackChunkName: "button" */ './views/demo/Button.vue'),
        },
        {
          path: '/cascader',
          name: 'Cascader',
          meta: {
            title: TITLE.Cascader,
          },
          component: () => import(/* webpackChunkName: "cascader" */ './views/demo/Cascader.vue'),
        },
        {
          path: '/checkbox',
          name: 'Checkbox',
          meta: {
            title: TITLE.Checkbox,
          },
          component: () => import(/* webpackChunkName: "checkbox" */ './views/demo/Checkbox.vue'),
        },
        {
          path: '/input',
          name: 'Input',
          meta: {
            title: TITLE.Input,
          },
          component: () => import(/* webpackChunkName: "input" */ './views/demo/Input.vue'),
        },
        {
          path: '/inputnumber',
          name: 'InputNumber',
          meta: {
            title: TITLE.InputNumber,
          },
          component: () => import(/* webpackChunkName: "inputnumber" */ './views/demo/InputNumber.vue'),
        },
        {
          path: '/link',
          name: 'Link',
          meta: {
            title: TITLE.Link,
          },
          component: () => import(/* webpackChunkName: "link" */ './views/demo/Link.vue'),
        },
        {
          path: '/radio',
          name: 'Radio',
          meta: {
            title: TITLE.Radio,
          },
          component: () => import(/* webpackChunkName: "radio" */ './views/demo/Radio.vue'),
        },
        {
          path: '/select',
          name: 'Select',
          meta: {
            title: TITLE.Select,
          },
          component: () => import(/* webpackChunkName: "select" */ './views/demo/Select.vue'),
        },
        {
          path: '/spin',
          name: 'Spin',
          meta: {
            title: TITLE.Spin,
          },
          component: () => import(/* webpackChunkName: "spin" */ './views/demo/Spin.vue'),
        },
        {
          path: '/switch',
          name: 'Switch',
          meta: {
            title: TITLE.Switch,
          },
          component: () => import(/* webpackChunkName: "switch" */ './views/demo/Switch.vue'),
        },
        {
          path: '/empty',
          name: 'Empty',
          meta: {
            title: TITLE.Empty,
          },
          component: () => import(/* webpackChunkName: "empty" */ './views/demo/Empty.vue'),
        },
        {
          path: '/modal',
          name: 'Modal',
          meta: {
            title: TITLE.Modal,
          },
          component: () => import(/* webpackChunkName: "modal" */ './views/demo/Modal.vue'),
        },
        {
          path: '/tooltip',
          name: 'Tooltip',
          meta: {
            title: TITLE.Tooltip,
          },
          component: () => import(/* webpackChunkName: "tooltip" */ './views/demo/Tooltip.vue'),
        },
      ],
      component: () => import(/* webpackChunkName: "index" */ './views/Index.vue'),
    },
  ],
});
