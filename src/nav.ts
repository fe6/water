import { TITLE } from '@/views/common/constant';

export interface ToEntity {
  name: string;
}

export interface NavItemEntity {
  to: ToEntity;
  title: string
}

export interface NavChildrenEntity {
  title: string;
  nav: NavItemEntity[];
}

export interface NavEntity {
  title: string;
  to?: ToEntity;
  children?: NavChildrenEntity[];
}

export const nav = [
  {
    to: { name: 'Agreement' },
    title: TITLE.Agreement,
  },
  {
    title: '组件',
    children: [
      {
        title: '通用',
        nav: [
          {
            to: { name: 'Icon' },
            title: TITLE.Icon,
          },
          {
            to: { name: 'Button' },
            title: TITLE.Button,
          },
          {
            to: { name: 'Grid' },
            title: TITLE.Grid,
          },
          {
            to: { name: 'Link' },
            title: TITLE.Link,
          },
        ],
      },
      {
        title: '导航',
        nav: [
          {
            to: { name: 'Affix' },
            title: TITLE.Affix,
          },
          {
            to: { name: 'Breadcrumb' },
            title: TITLE.Breadcrumb,
          },
        ],
      },
      {
        title: '数据录入',
        nav: [
          {
            to: { name: 'Checkbox' },
            title: TITLE.Checkbox,
          },
          {
            to: { name: 'Input' },
            title: TITLE.Input,
          },
          {
            to: { name: 'Radio' },
            title: TITLE.Radio,
          },
          {
            to: { name: 'Select' },
            title: TITLE.Select,
          },
          {
            to: { name: 'Switch' },
            title: TITLE.Switch,
          },
        ],
      },
      {
        title: '数据展示',
        nav: [
          {
            to: { name: 'Badge' },
            title: TITLE.Badge,
          },
          {
            to: { name: 'Empty' },
            title: TITLE.Empty,
          },
        ],
      },
      {
        title: '反馈',
        nav: [
          {
            to: { name: 'Modal' },
            title: TITLE.Modal,
          },
        ],
      },
    ],
  },
];
