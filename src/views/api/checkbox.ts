import checkbox from 'water-helper-maps/out/maps/attrs/checkbox/checkbox.json';
import checkboxGroup from 'water-helper-maps/out/maps/attrs/checkbox/checkbox-group.json';
import getProps from '@/views/common/getprop';

export const props = getProps(checkbox);

export const methods = [
  {
    name: 'change',
    desc: '状态改变触发的方法',
    return:
      '{Event对象,当前状态，选中的值，显示的值，失效状态，半选状态}({ev, status,label,value,disabled,indeterminate})',
  },
];

export const groupProps = getProps(checkboxGroup);

export const groupMethods = [
  {
    name: 'change',
    desc: '状态改变触发的方法',
    return:
      '{Event对象,当前状态，选中的值，选中的数据}({ev,status,value,item})',
  },
];

export const changeCheckboxGroupProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '当前状态',
    type: 'String | Number | Boolean',
    key: 'status',
  },
  {
    desc: '选中的值',
    type: 'String | Number | Boolean',
    key: 'label',
  },
  {
    desc: '选中的数据',
    type: 'Object',
    key: 'item',
  },
];

export const changeCheckboxProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '当前状态',
    type: 'String | Number | Boolean',
    key: 'status',
  },
  {
    desc: '选中的值',
    type: 'String | Number | Boolean',
    key: 'label',
  },
  {
    desc: '显示的值',
    type: 'String | Number | Boolean',
    key: 'value',
  },
  {
    desc: '失效状态',
    type: 'Boolean',
    key: 'disabled',
  },
  {
    desc: '半选状态',
    type: 'Boolean',
    key: 'indeterminate',
  },
];
