import { noopArray } from '../../utils/noop';

export default {
  columns: {
    type: Array,
    default: noopArray,
  },
  data: {
    type: Array,
    default: noopArray,
  },
  bordered: Boolean,
  loading: Boolean,
  rowSelection: Object,
  scroll: Object,
  emptyText: {
    type: String,
    default: '未匹配到结果',
  },
  expandedRowRender: Function,
};
