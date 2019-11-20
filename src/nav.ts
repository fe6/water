import { TITLE } from '@/views/common/constant';

export interface ToEntity {
  name: string;
}

export interface NavItemEntity {
  to: ToEntity;
  title: string;
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

const navCore: NavEntity[] = [
  {
    to: { name: 'Start' },
    title: TITLE.Start,
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
          {
            to: { name: 'Scroll' },
            title: TITLE.Scroll,
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
          {
            to: { name: 'Page' },
            title: TITLE.Page,
          },
        ],
      },
      {
        title: '数据录入',
        nav: [
          {
            to: { name: 'Cascader' },
            title: TITLE.Cascader,
          },
          {
            to: { name: 'Checkbox' },
            title: TITLE.Checkbox,
          },
          {
            to: { name: 'DatePicker' },
            title: TITLE.DatePicker,
          },
          {
            to: { name: 'Input' },
            title: TITLE.Input,
          },
          {
            to: { name: 'InputNumber' },
            title: TITLE.InputNumber,
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
            to: { name: 'Spin' },
            title: TITLE.Spin,
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
          {
            to: { name: 'Popover' },
            title: TITLE.Popover,
          },
          {
            to: { name: 'Table' },
            title: TITLE.Table,
          },
          {
            to: { name: 'Tag' },
            title: TITLE.Tag,
          },
          {
            to: { name: 'Tooltip' },
            title: TITLE.Tooltip,
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
          {
            to: { name: 'Popconfirm' },
            title: TITLE.Popconfirm,
          },
          {
            to: { name: 'Progress' },
            title: TITLE.Progress,
          },
        ],
      },
    ],
  },
];

if (process.env.NODE_ENV === 'development') {
  navCore.unshift({
    to: { name: 'Agreement' },
    title: TITLE.Agreement,
  });
}

export const nav = navCore;
