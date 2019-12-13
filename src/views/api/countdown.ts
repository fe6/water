import countdown from 'water-helper-maps/out/maps/attrs/countdown/countdown.json';
import getProps from '@/views/common/getprop';

export const props = getProps(countdown);

export const methods = [
  {
    name: 'finish',
    desc: '倒计时完成时触发',
    return: '-',
  },
];
