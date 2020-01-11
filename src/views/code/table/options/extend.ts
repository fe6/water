/** @format */

import WTable from '@/components/table/src/Table.vue';

const detailCol = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];

const openIndex = 2;
let extendStatus = 1;

export const extendCol = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render(createElement: Function, { optIndex }: any) {
      return createElement('div', [
        createElement(
          'a',
          {
            style: {
              color:
                optIndex === openIndex && extendStatus === 1
                  ? '#1996f9'
                  : '999',
              padding: '0 16px 0 0',
            },
            on: {
              click() {
                extendStatus = 1;
              },
            },
          },
          '详情',
        ),
        createElement(
          'a',
          {
            style: {
              color: extendStatus === 2 ? '#1996f9' : '999',
              padding: '0 16px 0 0',
            },
            on: {
              click() {
                extendStatus = 2;
              },
            },
          },
          '朋友',
        ),
      ]);
    },
    extendRowRender(createElement: Function, { optItem, optIndex }: any) {
      const childNode = [];

      if (optIndex === openIndex && extendStatus === 1) {
        childNode.push(
          createElement(WTable, {
            props: {
              col: detailCol,
              options: [],
            },
          }),
        );
      }

      if (optIndex === openIndex && extendStatus === 2) {
        childNode.push(
          createElement(WTable, {
            props: {
              col: detailCol,
              options: optItem.extend2,
            },
          }),
        );
      }

      if (childNode.length) {
        return createElement('div', childNode);
      }

      return null;
    },
  },
];

export const extendOptions = [
  {
    name: 'John Brown',
    action: 'delete',
    extend1: [
      {
        name: 'John Brown',
        age: 32,
      },
    ],
    extend2: [
      {
        name: '立刻多',
        age: 1,
      },
    ],
  },
  {
    name: 'Jim Green',
    action: 'add',
    extend1: [],
    extend2: [
      {
        name: '下落',
        age: 1,
      },
    ],
  },
  {
    name: 'Joe Black',
    action: 'delete',
    extend1: [
      {
        name: 'Black Zhou',
        age: 56,
      },
    ],
    extend2: [
      {
        name: '阳光',
        age: 1,
      },
    ],
  },
];
