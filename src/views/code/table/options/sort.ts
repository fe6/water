/** @format */

export const sortCol = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '100px',
    sorter: (a: any, b: any) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: '100px',
    sorter: (a: any, b: any) => a.age - b.age,
    defaultSortOrder: 'descend',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    sorter: (a: any, b: any) => a.address.length - b.address.length,
  },
];

export const showSortCol = [
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
];

export const sortOptions = [
  {
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: 'nice',
    action: 'delete',
  },
  {
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: 'loser',
    action: 'add',
  },
  {
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: 'teacher',
    action: 'delete',
  },
];
