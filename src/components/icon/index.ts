/** @format */

import WIcon from './src/Icon.vue';

const waterName = 'WIcon';

(WIcon as any).waterName = waterName;

(WIcon as any).install = (Vue: any): void => {
  Vue.component(waterName, WIcon);
};

export default WIcon;
