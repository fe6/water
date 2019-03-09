import WTag from '../../water/tag/Tag';
import WPopconfirm from '../../water/popconfirm/core';
import WInput from '../../water/form/input/Input';

let nameValue = [];

export const diyColumns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: '80px',
  render: (createElement, { text, dataItem, dataIdx }) => {
    if (dataItem.edit) {
      return createElement(WInput, {
        props: {
          value: text,
          change(value, ev) {
            nameValue[dataIdx] = value;
            console.log(ev,value, 'ev,status');
          },
        },
        nativeOn: {
          keyup(ev = window.event) {
            if (ev.keyCode === 13) {
              Object.assign(dataItem, {
                edit: false,
                name: ev.target.value,
              });
            }
          },
        },
      } , text);
    }
    return createElement('a', {
      attrs: {
        href: 'javascript:;',
      },
    }, text);
  },
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: '10px',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  width: '100px',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  width: '120px',
  render: (createElement, { text }) => {
    return text.map((textName, textIdx) => createElement(WTag, {
      props: {
        inline: true,
        size: 'small',
        color: ['#eb2f96', '#f5222d', '#1996f9'][textIdx],
      }
    }, textName));
  },
}, {
  title: 'Action',
  key: 'action',
  dataIndex: 'action',
  width: '100px',
  render: (createElement, { dataItem, dataIdx, data}) => {
    if (dataItem.edit) {
      return createElement('div', [
        createElement(WPopconfirm, {
          props: {
            ok() {
              Object.assign(dataItem, {
                edit: false,
              });
            },
          },
        }, [
          createElement('a', {
            style: {
              padding: '8px',
            },
            attrs: {
              href: 'javascript:;',
            },
          }, '取消'),
          createElement('div', {
            slot: 'content',
          }, '确认取消吗?'),
        ]),
        createElement('a', {
          style: {
            padding: '8px',
          },
          attrs: {
            href: 'javascript:;',
          },
          on: {
            click() {
              Object.assign(dataItem, {
                name: nameValue[dataIdx],
                edit: false,
              });
            },
          },
        }, '确定'),
      ]);
    }
    return createElement('div', [
      createElement(WPopconfirm, {
        props: {
          ok() {
            data.splice(dataIdx, 1);
          },
        },
      }, [
        createElement('a', {
          style: {
            padding: '8px',
          },
          attrs: {
            href: 'javascript:;',
          },
        }, '删除'),
        createElement('div', {
          slot: 'content',
        }, '确认删除吗?'),
      ]),
      createElement('a', {
        style: {
          padding: '8px',
        },
        attrs: {
          href: 'javascript:;',
        },
        on: {
          click() {
            Object.assign(dataItem, {
              edit: true,
            });
          },
        },
      }, '编辑'),
    ]);
  }, // end render
}];

export const diyData = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice'],
  edit: false,
  action: 'delete',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser', 'cool'],
  edit: false,
  action: 'add',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['good', 'big', 'sun'],
  edit: false,
  action: 'delete',
}];

export const diyDataDemo = {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['good', 'big', 'sun'],
  edit: false,
  action: 'delete',
};
