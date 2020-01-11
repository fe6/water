/** @format */

import statistic from 'water-helper-maps/out/maps/attrs/statistic/statistic.json';
import getProps from '@/views/common/getprop';

export const props = getProps(statistic);

export const methods = [
  {
    name: 'change',
    desc: '输入时触发的方法',
    return: '{绑定值, 输入框显示值}({value, text})',
  },
];

export const slotMethods = [
  {
    name: 'title',
    desc: '自定义标题',
    return: '-',
  },
  {
    name: 'prefix',
    desc: '自定义前缀',
    return: '-',
  },
  {
    name: 'suffix',
    desc: '自定义后缀',
    return: '-',
  },
];
