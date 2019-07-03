import { noop } from '@/helper/noop';

export default {
  name: 'WCascaderRender',
  functional: true,
  props: {
    render: Function,
    data: {
      type: Array,
      default: () => [],
    },
    result: {
      type: Array,
      default: () => [],
    },
    option: {
      type: Array,
      default: noop,
    },
    currentOption: {
      type: Object,
      default: noop,
    },
  },
  render: (createElement: Function, { props }: any) => props.render(createElement, props),
};
