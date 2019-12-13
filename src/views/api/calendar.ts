import calendar from 'water-helper-maps/out/maps/attrs/calendar/calendar.json';
import getProps from '@/views/common/getprop';

export const props = getProps(calendar);

export const methods = [
  {
    name: 'change',
    desc: '输入时触发的方法',
    return:
      '{当前月份,当前年代区间,当前年的区间,当前年,面板数据集,面板类型,面板的值}({nowMonth,nowRangeAge,nowRangeYear,nowYear,tableOptions,tableType,value})',
  },
];

export const changeProps = [
  {
    desc: '当前月份',
    type: 'Number',
    key: 'nowMonth',
  },
  {
    desc: '当前年代区间',
    type: 'String',
    key: 'nowRangeAge',
  },
  {
    desc: '当前年的区间',
    type: 'String',
    key: 'nowRangeYear',
  },
  {
    desc: '当前年',
    type: 'Number',
    key: 'nowYear',
  },
  {
    desc: '面板数据集',
    type: 'Object',
    key: 'tableOptions',
  },
  {
    desc: '面板的类型',
    type: 'String',
    key: 'tableType',
  },
  {
    desc: '面板的值',
    type: 'String',
    key: 'value',
  },
];

export const slotMethods = [
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
    desc: '当前一整行的索引',
    type: 'Number',
    key: 'dateWeekIndex',
  },
  {
    desc: '当前一整行的数据集',
    type: 'Array',
    key: 'dateWeek',
  },
  {
    desc: '当前值',
    type: 'String',
    key: 'value',
  },
  {
    desc: '当前面板的类型',
    type: 'String',
    key: 'type',
  },
  {
    desc: '头部的值',
    type: 'String',
    key: 'headerDate',
  },
  {
    desc: '每格的值',
    type: 'String',
    key: 'pickerValue',
  },
];
