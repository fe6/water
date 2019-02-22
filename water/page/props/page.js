import { noop } from '../../utils/noop';

export default {
  value: Number,
  total: {
    type: Number,
    default: 50,
  },
  simple: Boolean,
  size: String,
  midleSize: { // 中间最多 7 个 最少 3 个
    type: Number,
    default: 5,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  change: {
    type: Function,
    default: noop,
  },
  showTotal: {
    type: Function,
    default: noop,
  },
  prevText: {
    type: String,
    default: '上一页',
  },
  nextText: {
    type: String,
    default: '下一页',
  },
};
