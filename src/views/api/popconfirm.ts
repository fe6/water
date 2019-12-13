import popconfirm from 'water-helper-maps/out/maps/attrs/popconfirm/popconfirm.json';
import getProps from '@/views/common/getprop';

export const props = getProps(popconfirm);

export const methods = [
  {
    name: 'change',
    desc: '改变触发',
    return: '状态',
  },
  {
    name: 'ok',
    desc: '点击确定触发',
    return: '状态',
  },
  {
    name: 'cancel',
    desc: '点击取消触发',
    return: '状态',
  },
];
