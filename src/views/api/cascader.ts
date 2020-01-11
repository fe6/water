/** @format */

import cascader from 'water-helper-maps/out/maps/attrs/cascader/cascader.json';
import getProps from '@/views/common/getprop';

export const props = getProps(cascader);

export const methods = [
  {
    name: 'change',
    desc: '改变触发',
    return:
      '{当前选项的label值，当前多级值的集合，下拉选项，当前索引，级数索引，下一级的数据，Event对象,当前选中的数据}({current,value,options,index,floor,nextPanel,ev,item})',
  },
  {
    name: 'click',
    desc: '点击触发',
    return: 'Event 对象',
  },
];

export const searchRenderProps = [
  {
    desc: '当前render方法的渲染函数',
    type: 'Function',
    key: 'createElement',
  },
  {
    desc: '搜索关键词',
    type: 'String',
    key: 'searchKeyWord',
  },
  {
    desc: '每条搜索结果的数据',
    type: 'Object',
    key: 'item',
  },
  {
    desc: '所有搜索结果集合',
    type: 'Array',
    key: 'searchResult',
  },
];

export const displayRenderProps = [
  {
    desc: '选到最后一级之后的数据',
    type: 'Array',
    key: 'chooseResult',
  },
  {
    desc: '所有点击元素的数据',
    type: 'Array',
    key: 'chooseAllItem',
  },
  {
    desc: '真正的value值',
    type: 'Array',
    key: 'realValue',
  },
  {
    desc: '选择时候的 value 值',
    type: 'Array',
    key: 'chooseValue',
  },
  {
    desc: '所有下拉选项配置',
    type: 'Array',
    key: 'options',
  },
  {
    desc: '当前点击选项的数据',
    type: 'Object',
    key: 'currentOption',
  },
];

export const changeProps = [
  {
    desc: '当前选项的label值',
    type: 'String',
    key: 'current',
  },
  {
    desc: '下一级的数据',
    type: 'Array',
    key: 'children',
  },
  {
    desc: '当前多级值的集合',
    type: 'Object',
    key: 'options',
  },
  {
    desc: '当前选中的数据',
    type: 'Object',
    key: 'item',
  },
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '下拉选项',
    type: 'Array',
    key: 'value',
  },
  {
    desc: '当前索引',
    type: 'Number',
    key: 'index',
  },
  {
    desc: '级数索引',
    type: 'Number',
    key: 'floor',
  },
];
