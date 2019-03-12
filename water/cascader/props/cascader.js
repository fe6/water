import { noop } from '../../utils/noop';

export default {
  value: Array,
  option: {
    type: Array,
    default: noop,
  },
  change: {
    type: Function,
    default: noop,
  },
  emptyText: {
    type: String,
    default: '未匹配到结果',
  },
  loading: Boolean,
  disabled: Boolean,
  fieldNames: {
    type: Object,
    default: () => ({
      label: 'label',
      value: 'value',
      loading: 'loading',
      children: 'children',
    }),
  },
  search: Boolean,
  searchWidth: {
    type: String,
    default: '220px',
  },
  searchRender: Function,
  size: String,
  placeholder: {
    type: String,
    default: '请选择',
  },
  changeOnSelect: {
    type: Boolean,
    default: false,
  },
  displayRender: Function,
  placement: {
    type: String,
    default: 'bottomLeft',
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
  getContainer: Function,
  click: {
    type: Function,
    default: noop,
  },
};
