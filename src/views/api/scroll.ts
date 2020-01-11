/** @format */

import scroll from 'water-helper-maps/out/maps/attrs/scroll/scroll.json';
import getProps from '@/views/common/getprop';

export const props = getProps(scroll);

export const methods = [
  {
    name: 'scroll',
    desc: '滚动中触发的方法',
    return:
      '{Event对象,滚动的比例,滚动的距离,滚动的方向,事件触发类型}({ev, scrollScale, scrollChange, dir, eventType})',
  },
  {
    name: 'pulling',
    desc: '加载中触发的方法',
    return:
      '{Event对象,滚动的比例,滚动的距离,滚动的方向,事件触发类型}({ev, scrollScale, scrollChange, dir, eventType})',
  },
];

export const innerMethods = [
  {
    name: 'scrollTo',
    desc: '滚动到某个位置， <code>0.19.0</code> 新增',
    return: '无',
  },
  {
    name: 'refresh',
    desc: '刷新，重新计算滚动条高度',
    return: '无',
  },
  {
    name: 'finishPull',
    desc: '加载完毕之后调用。若不调用则不会触发下次的 pulling 事件',
    return: '无',
  },
];

export const scrollToProps = [
  {
    desc: '滚动的位置',
    type: 'Number',
    key: 'scrollChange( Function({scrollChange}){} )',
  },
];

export const emitProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '滚动的比例',
    type: 'Number',
    key: 'scrollScale',
  },
  {
    desc: '滚动的距离',
    type: 'Number',
    key: 'scrollChange',
  },
  {
    desc: '竖直滚动的时候的滚动距离',
    type: 'Number',
    key: 'scrollTop',
  },
  {
    desc: '横滚动的时候的滚动距离',
    type: 'Number',
    key: 'scrollLeft',
  },
  {
    desc: '滚动的方向',
    type: 'String',
    key: 'dir',
  },
  {
    desc: '事件触发类型',
    type: 'String',
    key: 'eventType',
  },
];
