export const props = [
  {
    param: 'mode',
    desc:
      '通过设置 mode 可以改变时间轴和内容的相对位置。 可选值： <code>left</code> | <code>alternate</code> | <code>right</code>',
    type: 'String',
    require: '否',
    default: 'left',
  },
];

export const itemProps = [
  {
    param: 'color',
    desc: '指定圆圈颜色',
    type: 'String',
    require: '否',
    default: 'rgba(0, 0, 0, 0.25)',
  },
  {
    param: 'timestamp',
    desc: '时间。如果没有就不显示',
    type: 'String',
    require: '否',
    default: '无',
  },
];
