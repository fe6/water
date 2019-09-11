export const fixCol = [
  {
    title: 'Full Name',
    width: 220,
    dataIndex: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 220,
    dataIndex: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    width: 220,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    width: 220,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    width: 220,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    width: 220,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    width: 220,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    width: 220,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    width: 220,
  },
  {
    title: 'Action',
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
  },
  {
    title: 'Age',
    width: 220,
    dataIndex: 'age',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    width: 220,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    width: 220,
  },
];

const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

export const fixOptions = data;
