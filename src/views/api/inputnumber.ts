/** @format */

import inputNumber from 'water-helper-maps/out/maps/attrs/input-number/input-number.json';
import getProps from '@/views/common/getprop';

export const props = getProps(inputNumber);

export const methods = [
  {
    name: 'change',
    desc: '改变触发的方法',
    return: '{当前的值，原始值}({value, original})',
  },
];

export const changeProps = [
  {
    desc: '当前的值',
    type: 'Number | String',
    key: 'value',
  },
  {
    desc: '原始值',
    type: 'Number | String',
    key: 'original',
  },
];
