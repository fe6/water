import WTooltip from './core';

WTooltip.install = (Vue) => {
  Vue.component(WTooltip.name, WTooltip);
};

export default WTooltip;
