/** @format */

import page from 'water-helper-maps/out/maps/attrs/page/page.json';
import pageJump from 'water-helper-maps/out/maps/attrs/page/page-jump.json';
import getProps from '@/views/common/getprop';

export const props = getProps(page);

export const methods = [
  {
    name: 'change',
    desc: '状态改变触发的方法',
    return: '当前页数',
  },
];

export const pageJumpProps = getProps(pageJump);

export const pageJumpMethods = [
  {
    name: 'change',
    desc: '状态改变触发的方法',
    return: '当前页数',
  },
];

export const showTotalProps = [
  {
    desc: '总数',
    type: 'Number',
    key: 'total',
  },
  {
    desc: '区间',
    type: 'Array',
    key: 'range',
  },
];
