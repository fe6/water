import radio from 'water-helper-maps/out/maps/attrs/radio/radio.json';
import radioGroup from 'water-helper-maps/out/maps/attrs/radio/radio-group.json';
import getProps from '@/views/common/getprop';

export const props = getProps(radio);

export const methods = [
  {
    name: 'change',
    desc: '输入时触发的方法',
    return:
      '{Event对象,选中的label,选中的值,当前状态}({ev,label,value,status})',
  },
];

export const groupProps = getProps(radioGroup);

export const groupMethods = [
  {
    name: 'change',
    desc: '输入时触发的方法',
    return:
      '{Event对象,选中的label,选中的值,当前状态}({ev,label,value,status})',
  },
];

export const beforeProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '选中的值',
    type: 'String | Number | Boolean',
    key: 'value',
  },
  {
    desc: '选中的 label',
    type: 'String | Number | Boolean',
    key: 'label',
  },
];

export const changeProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '选中的值',
    type: 'String | Number | Boolean',
    key: 'value',
  },
  {
    desc: '选中的 label',
    type: 'String | Number | Boolean',
    key: 'label',
  },
  {
    desc: '当前状态',
    type: 'String | Number | Boolean',
    key: 'status',
  },
];
