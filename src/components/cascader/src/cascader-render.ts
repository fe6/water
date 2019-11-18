import { noop, noopArray } from '@/helper/noop';

export default {
  name: 'WCascaderRender',
  functional: true,
  props: {
    render: Function,
    chooseResult: {
      type: Array,
      default: noopArray,
    },
    chooseAllItem: {
      type: Array,
      default: noopArray,
    },
    realValue: {
      type: Array,
      default: noopArray,
    },
    chooseValue: {
      type: Array,
      default: noopArray,
    },
    options: {
      type: Array,
      default: noop,
    },
    currentOption: {
      type: Object,
      default: noop,
    },
  },
  render: (createElement: Function, { props }: any) =>
    props.render(createElement, props),
};
