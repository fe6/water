import { noopArray, noop } from '../../utils/noop';

export default {
  name: [String, Array],
  slots: {
    type: Array,
    default: noopArray,
  },
  newTags: {
    type: Array,
    default: noopArray,
  },
  hoverIndex: Number,
  emptyText: String,
  fieldValue: String,
  mode: String,
  beforeChange: {
    type: Function,
    default: noop,
  },
  change: {
    type: Function,
    default: noop,
  },
  updateHock: {
    type: Function,
    default: noop,
  },
  scroll: {
    type: Function,
    default: noop,
  },
};
