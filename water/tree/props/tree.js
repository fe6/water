import { noopArray, noop } from '../../utils/noop';

export default {
  value: Array,
  open: {
    type: Array,
    default: noopArray,
  },
  data: {
    type: Array,
    default: noopArray,
  },
  change: {
    type: Function,
    default: noop,
  },
  fieldNames: {
    type: Object,
    default: () => ({
      key: 'key',
      title: 'title',
      children: 'children',
    }),
  },
};
