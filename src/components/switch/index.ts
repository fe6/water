/** @format */

import WSwitch from './src/Switch.vue';

const waterName = 'WSwitch';

(WSwitch as any).waterName = waterName;

(WSwitch as any).install = (Vue: any): void => {
  Vue.component(waterName, WSwitch);
};

export default WSwitch;
