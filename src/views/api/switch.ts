/** @format */

import switchJson from 'water-helper-maps/out/maps/attrs/switch/switch.json';
import getProps from '@/views/common/getprop';

export const props = getProps(switchJson);

export const methods = [
  {
    name: 'change',
    desc: '改变触发',
    return: '{Event对象,当前状态}({ev,status})',
  },
];

export const changeProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '当前状态',
    type: 'Boolean',
    key: 'status',
  },
];
