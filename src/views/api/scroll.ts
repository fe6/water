export const props = [
  {
    param: 'noResize',
    desc:
      '禁止 window 的 resize 事件的监听。如果 container 尺寸不会发生变化，最好设置它可以优化性能',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'loading',
    desc: '加载中',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'disabled',
    desc: '禁止滚动',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'openPull',
    desc: '开启加载功能',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'stopPropagation',
    desc: '禁止冒泡',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'preventDefault',
    desc: '禁止滚动的默认事件。',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'edgeIsPreventDefault',
    desc: '滚动两端，即滚动到头部或者底部的时候，取消默认事件的监听',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'scrollStep',
    desc: '滚动改变的步伐',
    type: 'Number',
    require: '否',
    default: '100',
  },
  {
    param: 'threshold',
    desc: '出发加载事件的阈值',
    type: 'Number',
    require: '否',
    default: '0',
  },
  {
    param: 'type',
    desc:
      '滚动的类型，可选值为 <code>vertical</code> 或者 <code>horizontal</code>',
    type: 'String',
    require: '否',
    default: 'vertical',
  },
  {
    param: 'preventDefaultException',
    desc:
      'scroll 会阻止原生的滚动，这样也同时阻止了一些原生组件的默认行为。这个时候我们不能对这些元素做 preventDefault，所以我们可以配置 preventDefaultException。默认值 {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/}表示标签名为 input、textarea、button、select、audio 这些元素的默认行为都不会被阻止。这是一个非常有用的配置，它的 key 是 DOM 元素的属性值，value 可以是一个正则表达式。比如我们想配一个 class 名称为 test 的元素，那么配置规则为 {className:/(^|s)test(s|$)/}',
    type: 'String',
    require: '否',
    default: 'vertical',
  },
  {
    param: 'scroll',
    desc:
      '滚动中触发的方法， 返回值： {Event对象,滚动的比例,滚动的距离,滚动的方向,事件触发类型}({ev, scrollScale, scrollChange, dir, eventType})',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'pulling',
    desc:
      '加载中触发的方法， 返回值： {Event对象,滚动的比例,滚动的距离,滚动的方向,事件触发类型}({ev, scrollScale, scrollChange, dir, eventType})',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'wrapClassName',
    desc: 'wrap 自定义 class， <code>0.20.0</code 新增',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'bodyClassName',
    desc: 'body 自定义 class， <code>0.20.0</code 新增',
    type: 'Function',
    require: '否',
    default: '无',
  },
];

export const methods = [
  {
    name: 'scroll',
    desc: '滚动中触发的方法',
    return:
      '{Event对象,滚动的比例,滚动的距离,滚动的方向,事件触发类型}({ev, scrollScale, scrollChange, dir, eventType})',
  },
  {
    name: 'pulling',
    desc: '加载中触发的方法',
    return:
      '{Event对象,滚动的比例,滚动的距离,滚动的方向,事件触发类型}({ev, scrollScale, scrollChange, dir, eventType})',
  },
];

export const innerMethods = [
  {
    name: 'scrollTo',
    desc: '滚动到某个位置， <code>0.19.0</code> 新增',
    return: '无',
  },
  {
    name: 'refresh',
    desc: '刷新，重新计算滚动条高度',
    return: '无',
  },
  {
    name: 'finishPull',
    desc: '加载完毕之后调用。若不调用则不会触发下次的 pulling 事件',
    return: '无',
  },
];

export const scrollToProps = [
  {
    desc: '滚动的位置',
    type: 'Number',
    key: 'scrollChange( Function({scrollChange}){} )',
  },
];

export const emitProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '滚动的比例',
    type: 'Number',
    key: 'scrollScale',
  },
  {
    desc: '滚动的距离',
    type: 'Number',
    key: 'scrollChange',
  },
  {
    desc: '竖直滚动的时候的滚动距离',
    type: 'Number',
    key: 'scrollTop',
  },
  {
    desc: '横滚动的时候的滚动距离',
    type: 'Number',
    key: 'scrollLeft',
  },
  {
    desc: '滚动的方向',
    type: 'String',
    key: 'dir',
  },
  {
    desc: '事件触发类型',
    type: 'String',
    key: 'eventType',
  },
];
