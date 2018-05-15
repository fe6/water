export default [
  {
    path: 'icon',
    name: 'Icon',
    meta: {
      title: 'Icon 图标 - 水滴',
    },
    component: () => import('../../water/icon/zh-cn.md'),
  },
  {
    path: 'button',
    name: 'Button',
    meta: {
      title: 'Button 按钮 - 水滴',
    },
    component: () => import('../../water/button/zh-cn.md'),
  },
  {
    path: 'loadbar',
    name: 'Loadbar',
    meta: {
      title: 'Loadbar 全局进度条 - 水滴',
    },
    component: () => import('../../water/loadbar/zh-cn.md'),
  },
  {
    path: 'grid',
    name: 'Grid',
    meta: {
      title: 'Grid 栅格 - 水滴',
    },
    component: () => import('../../water/grid/zh-cn.md'),
  },
  {
    path: 'affix',
    name: 'Affix',
    meta: {
      title: 'Affix 图钉 - 水滴',
    },
    component: () => import('../../water/affix/zh-cn.md'),
  },
  {
    path: 'breadcrumb',
    name: 'Breadcrumb',
    meta: {
      title: 'Breadcrumb 面包屑 - 水滴',
    },
    component: () => import('../../water/breadcrumb/zh-cn.md'),
  },
  {
    path: 'rate',
    name: 'Rate',
    meta: {
      title: 'Rate 评分 - 水滴',
    },
    component: () => import('../../water/rate/zh-cn.md'),
  },
];
