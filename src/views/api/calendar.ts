export const props = [
  {
    param: 'showDate',
    desc: '是否显示日期面板',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'showMonth',
    desc: '是否显示月份面板',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'showYear',
    desc: '是否显示年份面板',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'showAge',
    desc: '是否显示世纪面板',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'type',
    desc:
      '日历类型，可选值：周<code>week</code> 、 月<code>month</code> 、 年<code>year</code> 或 世纪<code>age</code>',
    type: 'String',
    require: '否',
    default: 'date',
  },
  {
    param: 'defaultPickerValue',
    desc:
      '当 <code>v-model</code>( <code>value</code> ) 为空时，选择器打开时默认显示的时间',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'firstDayOfWeek',
    desc: '周起始日，默认： 日(0)',
    type: 'Number',
    require: '否',
    default: '0',
  },
  {
    param: 'pickerRender',
    desc: '自定义日期单元格的内容和样式',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'change',
    desc:
      '输入时触发的方法，返回 {当前月份,当前年代区间,当前年的区间,当前年,面板数据集,面板类型,面板的值}({nowMonth,nowRangeAge,nowRangeYear,nowYear,tableOptions,tableType,value})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

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
