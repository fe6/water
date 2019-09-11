export const mergeCol = [{
  title: 'Name',
  dataIndex: 'name',
  width: '150px',
  col: ({ optIndex }: any) => {
    if (optIndex === 4) {
      return 5;
    }
    return undefined;
  },
}, {
  title: 'Age',
  dataIndex: 'age',
  width: '100px',
  col: ({ optIndex }: any) => {
    if (optIndex === 4) {
      return 0;
    }
    return undefined;
  },
}, {
  title: 'Home phone',
  dataIndex: 'tel',
  colSpan: 2,
  width: '150px',
  row: ({ optIndex }: any) => {
    if (optIndex === 2) {
      return 2;
    }
    return undefined;
  },
  col: ({ optIndex }: any) => {
    if (optIndex === 4) {
      return 0;
    }
    return undefined;
  },
}, {
  title: 'Phone',
  colSpan: 0,
  dataIndex: 'phone',
  row: ({ optIndex }: any) => {
    if (optIndex === 3) {
      return 0;
    }
    return undefined;
  },
  col: ({ optIndex }: any) => {
    if (optIndex === 4) {
      return 0;
    }
    return undefined;
  },
}, {
  title: 'Address',
  dataIndex: 'address',
  width: '200px',
  col: ({ optIndex }: any) => {
    if (optIndex === 4) {
      return 0;
    }
    return undefined;
  },
}];

export const mergeOptions = [{
  name: 'John Brown',
  age: 32,
  tel: '0571-22098909',
  phone: 18889898989,
  address: 'New York No. 1 Lake Park',
}, {
  name: 'Jim Green',
  tel: '0571-22098333',
  phone: 18889898888,
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  name: 'Joe Black',
  age: 32,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Sidney No. 1 Lake Park',
}, {
  name: 'Jim Red',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'London No. 2 Lake Park',
}, {
  name: 'Jake White',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Dublin No. 2 Lake Park',
}];
