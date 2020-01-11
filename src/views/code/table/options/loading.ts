/** @format */

import WTag from '@/components/tag/src/Tag.vue';

export const loadingCol = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '100px',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: '100px',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    width: '100px',
    render(createElement: Function, { text }: any) {
      return text.map((textName: string, textIdx: number) =>
        createElement(
          WTag,
          {
            props: {
              color: ['#eb2f96', '#f5222d', '#1996f9'][textIdx],
            },
          },
          textName,
        ),
      );
    },
  },
  {
    title: 'Action',
    dataIndex: 'action',
    width: '30px',
  },
];

export const loadingOptions = `[{
        "name": "John Brown",
        "age": "32",
        "address": "New York No. 1 Lake Park",
        "tags": ["loser", "cool"],
        "action": "delete",
      }, {
        "name": "Jim Green",
        "age": "42",
        "address": "London No. 1 Lake Park",
        "tags": ["good", "big", "sun"],
        "action": "add",
      }, {
        "name": "Joe Black",
        "age": "32",
        "address": "Sidney No. 1 Lake Park",
        "tags": ["红星"],
        "action": "delete",
      }]`;
