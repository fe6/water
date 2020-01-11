/** @format */

import input from 'water-helper-maps/out/maps/attrs/input/input.json';
import getProps from '@/views/common/getprop';

export const props = getProps(input);

export const methods = [
  {
    name: 'change',
    desc: '输入时触发的方法',
    return: '{Event对象,输入的值}({ev,value})',
  },
];

export const errorProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '输入的值',
    type: 'String',
    key: 'value',
  },
  {
    desc: '最大长度',
    type: 'String|Number',
    key: 'maxLength',
  },
  {
    desc: '触发的事件或阶段 <code>0.16.0</code> 新增',
    type: 'String',
    key: 'eventType',
  },
];

export const changeProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '输入的值',
    type: 'String',
    key: 'value',
  },
];
