import WPage from './Page';
import WPageJump from './PageJump';

WPage.install = (Vue) => {
  Vue.component(WPage.name, WPage);
};

WPageJump.install = (Vue) => {
  Vue.component(WPageJump.name, WPageJump);
};

export {
  WPage,
  WPageJump,
};
