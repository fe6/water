/** @format */

import datepicker from 'water-helper-maps/out/maps/attrs/datepicker/datepicker.json';
import getProps from '@/views/common/getprop';

export const props = getProps(datepicker);

export const methods = [
  {
    name: 'change',
    desc: '输入时触发的方法',
    return:
      '{Event对象,处理过的值,格式的值,当前的对象,当前行}({ev,trueValue,value,item,dateWeek})',
  },
];

export const changeProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '处理过的值',
    type: 'String',
    key: 'trueValue',
  },
  {
    desc: '格式的值',
    type: 'String',
    key: 'value',
  },
  {
    desc: '当前的对象',
    type: 'Object',
    key: 'item',
  },
  {
    desc: '当前行',
    type: 'Array',
    key: 'dateWeek',
  },
  {
    desc: '面板的类型， <code>0.19.0</code> 新增',
    type: 'String',
    key: 'tableType',
  },
];

export const slotMethods = [
  {
    name: '-',
    desc: '自定义触发日历的区域',
  },
  {
    name: 'picker',
    desc: '自定义日历面板， <code>0.19.0</code> 新增',
  },
];

export const slotProps = [
  {
    desc: '当前点击的数据集',
    type: 'Object',
    key: 'dateItem',
  },
  {
    desc: '当前点击格子在一行中的索引',
    type: 'Number',
    key: 'dateIndex',
  },
  {
    desc: '当前一整行的数据集',
    type: 'Array',
    key: 'dateWeek',
  },
  {
    desc: '当前面板的类型',
    type: 'String',
    key: 'type',
  },
];
