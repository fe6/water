import WTag from '@/components/tag/Tag.vue';

export const borderCol = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: '100px',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: '100px',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  width: '100px',
  render(createElement: Function, { text }: any) {
    return text.map((textName: string, textIdx: number) => createElement(WTag, {
      props: {
        color: ['#eb2f96', '#f5222d', '#1996f9'][textIdx],
      },
    }, textName));
  },
}, {
  title: 'Action',
  key: 'action',
  dataIndex: 'action',
  width: '30px',
}];

export const borderOptions = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['loser', 'cool'],
  action: 'delete',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['good', 'big', 'sun'],
  action: 'add',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['红星'],
  action: 'delete',
}];

export const header = (creatElement: Function) => creatElement('div', 'header');

export const footer = (creatElement: Function) => creatElement('div', 'footer');
