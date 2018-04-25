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
];
