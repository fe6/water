import { noop } from '../../utils/noop';

export default {
  value: Array,
  oldValue: {
    type: Array,
    default: () => [],
  },
  option: {
    type: Array,
    default: noop,
  },
  fieldNames: {
    type: Object,
    default: () => ({
      label: 'label',
      value: 'value',
      children: 'children',
      loading: 'loading',
    }),
  },
  floor: {
    type: Number,
    default: 0,
  },
};
