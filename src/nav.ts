export interface ToEntity {
  name: string;
}

export interface NavItemEntity {
  to: ToEntity;
  title: string
}

export interface NavEntity {
  title: string;
  nav: NavItemEntity[];
}

export const nav = [
  {
    title: '通用',
    nav: [
      {
        to: { name: 'Icon' },
        title: 'Icon 图标',
      },
      {
        to: { name: 'Button' },
        title: 'Button 按钮',
      },
      {
        to: { name: 'Grid' },
        title: 'Grid 栅格',
      },
      {
        to: { name: 'Link' },
        title: 'Link 超链',
      },
    ],
  },
  {
    title: '导航',
    nav: [
      {
        to: { name: 'Affix' },
        title: 'Affix 固钉',
      },
      {
        to: { name: 'Breadcrumb' },
        title: 'Breadcrumb 面包屑',
      },
    ],
  },
  {
    title: '数据录入',
    nav: [
      {
        to: { name: 'Checkbox' },
        title: 'Checkbox 多选',
      },
      {
        to: { name: 'Input' },
        title: 'Input 输入框',
      },
      {
        to: { name: 'Radio' },
        title: 'Radio 单选',
      },
    ],
  },
  {
    title: '数据展示',
    nav: [
      {
        to: { name: 'Badge' },
        title: 'Badge 徽标数',
      },
    ],
  },
];
