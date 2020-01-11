/** @format */

import popover from 'water-helper-maps/out/maps/attrs/popover/popover.json';
import getProps from '@/views/common/getprop';

export const props = getProps(popover);

export const methods = [
  {
    name: 'change',
    desc: '改变触发',
    return: '状态',
  },
];
