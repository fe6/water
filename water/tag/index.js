import WTag from './Tag';
import WCheckTag from './CheckTag';

WTag.install = (Vue) => {
  Vue.component(WTag.name, WTag);
};

WCheckTag.install = (Vue) => {
  Vue.component(WCheckTag.name, WCheckTag);
};

export default {
  WTag,
  WCheckTag
};
