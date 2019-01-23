import { noop } from '../../utils/noop';

export default {
  value: [String, Array],
  search: Boolean,
  emptyText: {
    type: String,
    default: '未匹配到结果',
  },
  mode: {
    type: String,
    default: 'single',
  },
  loading: Boolean,
  disabled: Boolean,
  size: String,
  placement: {
    type: String,
    default: 'bottom',
  },
  interval: {
    type: Number,
    default: 8,
  },
  transfer: {
    type: Boolean,
    default: true,
  },
  before: {
    type: Function,
    default() {
      return new Promise((resolve) => {
        this.$nextTick(() => {
          resolve();
        });
      });
    },
  },
  getContainer: {
    type: Function,
    default: () => document.body,
  },
  change: {
    type: Function,
    default: noop,
  },
  focus: {
    type: Function,
    default: noop,
  },
  blur: {
    type: Function,
    default: noop,
  },
  click: {
    type: Function,
    default: noop,
  },
};
