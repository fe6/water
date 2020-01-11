/** @format */

import timepicker from 'water-helper-maps/out/maps/attrs/timepicker/timepicker.json';
import getProps from '@/views/common/getprop';

export const props = getProps(timepicker);

export const methods = [
  {
    name: 'change',
    desc: '输入时触发的方法',
    return: '{绑定值, 输入框显示值}({value, text})',
  },
];

export const changeProps = [
  {
    desc: '绑定值',
    type: 'String',
    key: 'value',
  },
  {
    desc: '输入框显示值',
    type: 'String',
    key: 'text',
  },
];
