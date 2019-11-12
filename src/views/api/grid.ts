export const rowProps = [
  {
    param: 'tag',
    desc: 'row 实际渲染的标签',
    type: 'String',
    require: '否',
    default: 'div',
  },
  {
    param: 'className',
    desc: '自定义最外层的 class',
    type: 'String | Object | Array',
    require: '否',
    default: '无',
  },
  {
    param: 'align',
    desc:
      'flex 布局下的垂直对齐方式： <code>top</code> <code>middle</code> <code>bottom</code>',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'justify',
    desc:
      'flex 布局下的水平排列方式： <code>start</code> <code>end</code> <code>center</code> <code>space-around</code> <code>space-between</code>',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'basin',
    desc: '栅格上下间隔',
    type: 'Number',
    require: '否',
    default: '无',
  },
  {
    param: 'gutter',
    desc: '栅格左右间隔',
    type: 'Number',
    require: '否',
    default: '无',
  },
  {
    param: 'type',
    desc:
      '栅格布局类型，可选值： <code>float</code>或者不设，默认 <code>flex</code> 布局',
    type: 'Number',
    require: '否',
    default: '无',
  },
];

export const colProps = [
  {
    param: 'tag',
    desc: 'col 实际渲染的标签',
    type: 'String',
    require: '否',
    default: 'div',
  },
  {
    param: 'className',
    desc: '自定义最外层的 class',
    type: 'String | Object | Array',
    require: '否',
    default: '无',
  },
  {
    param: 'span',
    desc: '栅格占位格数，为 0 时相当于 <code>display: none</code>',
    type: 'Number',
    require: '否',
    default: '无',
  },
  {
    param: 'order',
    desc: '栅格顺序， <code>flex</code> 布局模式下有效',
    type: 'Number',
    require: '否',
    default: '无',
  },
  {
    param: 'offset',
    desc: '栅格左侧的间隔格数，间隔内不可以有栅格',
    type: 'Number',
    require: '否',
    default: '无',
  },
  {
    param: 'pull',
    desc: '栅格向左移动格数',
    type: 'Number',
    require: '否',
    default: '无',
  },
  {
    param: 'push',
    desc: '栅格向右移动格数',
    type: 'Number',
    require: '否',
    default: '无',
  },
  {
    param: 'xs',
    desc: '<code><576px</code> 响应式栅格，可为栅格数',
    type: 'Number',
    require: '否',
    default: '无',
  },
  {
    param: 'sm',
    desc: '<code>>=576px</code> 响应式栅格，可为栅格数',
    type: 'Number',
    require: '否',
    default: '无',
  },
  {
    param: 'md',
    desc: '<code>>=768px</code> 响应式栅格，可为栅格数',
    type: 'Number',
    require: '否',
    default: '无',
  },
  {
    param: 'lg',
    desc: '<code>>=992px</code> 响应式栅格，可为栅格数',
    type: 'Number',
    require: '否',
    default: '无',
  },
  {
    param: 'xl',
    desc: '<code>>=1200px</code> 响应式栅格，可为栅格数',
    type: 'Number',
    require: '否',
    default: '无',
  },
  {
    param: 'xxl',
    desc: '<code>>=1600px</code> 响应式栅格，可为栅格数',
    type: 'Number',
    require: '否',
    default: '无',
  },
];

export const methods = [];
