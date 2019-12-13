import select from 'water-helper-maps/out/maps/attrs/select/select.json';
import getProps from '@/views/common/getprop';

export const props = getProps(select);

export const methods = [
  {
    name: 'change',
    desc: '改变触发',
    return: '{Event对象,选中的值,当前数据,所有数据}({ev,value,item,options})',
  },
  {
    name: 'focus',
    desc: '获取焦点触发',
    return: 'Event 对象',
  },
  {
    name: 'blur',
    desc: '失去触发',
    return: 'Event 对象',
  },
  {
    name: 'click',
    desc: '点击选择框触发',
    return: 'Event 对象',
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
    type: 'String',
    key: 'value',
  },
  {
    desc: '当前数据',
    type: 'Array',
    key: 'item',
  },
  {
    desc: '所有数据',
    type: 'Array',
    key: 'options',
  },
];
