/** @format */

import WPopover from './src/Popover.vue';

const waterName = 'WPopover';

(WPopover as any).waterName = waterName;

(WPopover as any).install = (Vue: any): void => {
  Vue.component(waterName, WPopover);
};

export default WPopover;
