/** @format */

import button from 'water-helper-maps/out/maps/attrs/button/button.json';
import buttonGroup from 'water-helper-maps/out/maps/attrs/button/button-group.json';
import getProps from '@/views/common/getprop';

export const props = getProps(button);

export const methods = [
  {
    name: 'click',
    desc: '点击动效之后触发',
    return: '{event, key}',
  },
];

export const clickProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '组件传入的 key 属性',
    type: 'String',
    key: 'key',
  },
  {
    desc: '动画的Event对象',
    type: 'String',
    key: 'animEvent',
  },
];

export const groupProps = getProps(buttonGroup);
