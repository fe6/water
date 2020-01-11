/** @format */

import affix from 'water-helper-maps/out/maps/attrs/affix/affix.json';
import getProps from '@/views/common/getprop';

export const props = getProps(affix);

export const methods = [
  {
    name: 'change',
    desc: '滚动触发的方法',
    return: '{总状态，滚动状态}({affixStatus, scrollStatus})',
  },
];
