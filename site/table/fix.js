export const fixColumns = [
  {
    title: 'Full Name', width: '100px', dataIndex: 'name', key: 'name', fixed: 'left',
  },
  {
    title: 'Age', width: '100px', dataIndex: 'age', key: 'age', fixed: 'left',
  },
  {
    title: 'Column 1', dataIndex: 'address', key: '1', width: '150px',
  },
  {
    title: 'Column 2', dataIndex: 'address', key: '2', width: '150px',
  },
  {
    title: 'Column 3', dataIndex: 'address', key: '3', width: '150px',
  },
  {
    title: 'Column 4', dataIndex: 'address', key: '4', width: '150px',
  },
  {
    title: 'Column 5', dataIndex: 'address', key: '5', width: '150px',
  },
  {
    title: 'Column 6', dataIndex: 'address', key: '6', width: '150px',
  },
  {
    title: 'Column 7', dataIndex: 'address', key: '7', width: '150px',
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: '100px',
    render: (createElement) => {
      return createElement('a', 'active');
    },
  },
];

export const fixData = (() => {
  const fixData = [];
  for (let i = 0; i < 100; i++) {
    fixData.push({
      key: i,
      name: `Lee ${i}`,
      age: 32,
      address: `Park no. ${i}`,
    });
  }
  return fixData;
})();
