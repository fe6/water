import modal from 'water-helper-maps/out/maps/attrs/modal/modal.json';
import getProps from '@/views/common/getprop';

export const props = getProps(modal);

export const methods = [
  {
    name: 'change',
    desc: '显示隐藏触发的方法',
    return: '当前状态',
  },
  {
    name: 'ok',
    desc: '点击确定触发的方法',
    return: '当前状态',
  },
  {
    name: 'cancel',
    desc: '点击取消触发的方法',
    return: '当前状态',
  },
];

export const confirmProps = [
  {
    param: 'title',
    description: '标题',
    optionType: 'String | Function',
    require: '否',
    defaultValue: '无',
  },
  {
    param: 'content',
    description: '内容',
    optionType: 'String | Function',
    require: '否',
    defaultValue: '无',
  },
  {
    param: 'icon',
    description: '图标。只有 <code>creatConfirm</code> 生效',
    optionType: 'String | Function',
    require: '否',
    defaultValue: '无',
  },
  {
    param: 'cancelText',
    description: '取消按钮的文案',
    optionType: 'String',
    require: '否',
    defaultValue: '取消',
  },
  {
    param: 'okText',
    description: '确定按钮的文案',
    optionType: 'String',
    require: '否',
    defaultValue: '确定',
  },
  {
    param: 'okType',
    description: '确定按钮的类型',
    optionType: 'String',
    require: '否',
    defaultValue: '无',
  },
  {
    param: 'cancelable',
    description: '是否显示取消按钮',
    optionType: 'Boolean',
    require: '否',
    defaultValue: 'true',
  },
  {
    param: 'okable',
    description: '是否显示确定按钮',
    optionType: 'Boolean',
    require: '否',
    defaultValue: 'true',
  },
  {
    param: 'maskClosable',
    description: '是否点击遮罩关闭',
    optionType: 'Boolean',
    require: '否',
    defaultValue: '无',
  },
  {
    param: 'before',
    description: '确定之前的回调',
    optionType: 'Function',
    require: '否',
    defaultValue: '无',
  },
  {
    param: 'cancel',
    description: '取消的回调，返回当前状态',
    optionType: 'Function',
    require: '否',
    defaultValue: '() => {}',
  },
  {
    param: 'ok',
    description: '取消的回调，返回当前状态',
    optionType: 'Function',
    require: '否',
    defaultValue: '() => {}',
  },
  {
    param: 'change',
    description: '对话框显示隐藏的回调，返回当前状态',
    optionType: 'Function',
    require: '否',
    defaultValue: '() => {}',
  },
];
