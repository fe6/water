/** @format */

import table from 'water-helper-maps/out/maps/attrs/table/table.json';
import getProps from '@/views/common/getprop';

export const props = getProps(table);

export const methods = [
  {
    name: 'change',
    desc: '点击表头触发的方法',
    return:
      '{当前表头的配置， 当前表头的索引，排序类型，Event对象}({colItem, colIndex, sortType, ev})',
  },
];

export const colProps = [
  {
    param: 'colSpan',
    description: '表头列合并,设置为 0 时，不渲染',
    optionType: 'Number',
    require: '否',
    defaultValue: '-',
  },
  {
    param: 'dataIndex',
    description: '列数据在数据项中对应的 key',
    optionType: 'String',
    require: '否',
    defaultValue: '-',
  },
  {
    param: 'defaultSortOrder',
    description:
      '默认排序顺序，可选值： <code>ascend<.code> | <code>descend</cpde>',
    optionType: 'String',
    require: '否',
    defaultValue: '-',
  },
  {
    param: 'fixed',
    description: '列是否固定，可选 <code>left</code> >code>right</code>',
    optionType: 'String',
    require: '否',
    defaultValue: '-',
  },
  {
    param: 'title',
    description: '列头显示文字',
    optionType: 'String',
    require: '否',
    defaultValue: '-',
  },
  {
    param: 'width',
    description: '列宽度',
    optionType: 'String|Number',
    require: '否',
    defaultValue: '无',
  },
  {
    param: 'render',
    description:
      '生成复杂数据的渲染函数，参数分别为 createElement，{当前文案，行col，行数据，行索引，所有数据}((text, col, optItem, optIndex, options))，@return VNode',
    optionType: 'Function',
    require: '否',
    defaultValue: '-',
  },
  {
    param: 'extendRowRender',
    description:
      '生成<strong>行展开</strong>复杂数据的渲染函数，参数分别为 createElement，{行col，行数据，行索引，所有数据}((col, optItem, optIndex, options))，@return VNode',
    optionType: 'Function',
    require: '否',
    defaultValue: '-',
  },
  {
    param: 'col',
    description:
      '表身列合并，返回合并的数字， 0 则不显示，不合返回 <code>undefined</code>>',
    optionType: 'Function',
    require: '否',
    defaultValue: '-',
  },
  {
    param: 'row',
    description:
      '表身行合并，返回合并的数字， 0 则不显示，不合返回 <code>undefined</code>>',
    optionType: 'Function',
    require: '否',
    defaultValue: '-',
  },
];

export const renderProps = [
  {
    desc: '当前文案',
    type: 'String',
    key: 'text',
  },
  {
    desc: '行col',
    type: 'Object',
    key: 'col',
  },
  {
    desc: '所有数据',
    type: 'Object',
    key: 'options',
  },
  {
    desc: '行数据',
    type: 'Object',
    key: 'optItem',
  },
  {
    desc: '行索引',
    type: 'Number',
    key: 'optIndex',
  },
];

export const extendRowRenderProps = [
  {
    desc: '行col',
    type: 'Object',
    key: 'col',
  },
  {
    desc: '所有数据',
    type: 'Object',
    key: 'options',
  },
  {
    desc: '行数据',
    type: 'Object',
    key: 'optItem',
  },
  {
    desc: '行索引',
    type: 'Number',
    key: 'optIndex',
  },
];

export const changeProps = [
  {
    desc: '当前表头的配置',
    type: 'Object',
    key: 'col',
  },
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '排序类型',
    type: 'String',
    key: 'sortType',
  },
  {
    desc: '当前表头的索引',
    type: 'Number',
    key: 'colIndex',
  },
];
