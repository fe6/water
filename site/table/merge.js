export const mergeColumns = [{
  title: 'Name',
  dataIndex: 'name',
  width: '100px',
  col: ({ dataIdx }) => {
    if (dataIdx === 4) {
      return 5;
    }
  },
}, {
  title: 'Age',
  dataIndex: 'age',
  width: '100px',
  col: ({ dataIdx }) => {
    if (dataIdx === 4) {
      return 0;
    }
  },
}, {
  title: 'Home phone',
  dataIndex: 'tel',
  colSpan: 2,
  width: '150px',
  row: ({ dataIdx }) => {
    if (dataIdx === 2) {
      return 2;
    }
  },
  col: ({ dataIdx }) => {
    if (dataIdx === 4) {
      return 0;
    }
  },
}, {
  title: 'Phone',
  colSpan: 0,
  dataIndex: 'phone',
  row: ({ dataIdx }) => {
    if (dataIdx === 3) {
      return 0;
    }
  },
  col: ({ dataIdx }) => {
    if (dataIdx === 4) {
      return 0;
    }
  },
}, {
  title: 'Address',
  width: '210px',
  dataIndex: 'address',
  col: ({ dataIdx }) => {
    if (dataIdx === 4) {
      return 0;
    }
  },
}];

export const mergeData = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  tel: '0571-22098909',
  phone: 18889898989,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  tel: '0571-22098333',
  phone: 18889898888,
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'London No. 2 Lake Park',
}, {
  key: '5',
  name: 'Jake White',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Dublin No. 2 Lake Park',
}];
