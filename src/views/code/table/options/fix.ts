export const fixCol = [
  {
    title: 'Full Name',
    width: 220,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 220,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 220,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 220,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 220,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 220,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 220,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 220,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 220,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 220,
    render(createElement: Function) {
      return createElement('span', 'action');
    },
  },
];

export const fixTopCol = [
  {
    title: 'Full Name',
    width: 220,
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    width: 220,
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 220,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 220,
  },
];

const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

export const fixOptions = data;
