import { noop } from '../utils/noop';

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
  render: (createElement, { props }) => props.render(createElement, props),
};
