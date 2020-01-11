/** @format */

import WBadge from './src/Badge.vue';

const waterName = 'WBadge';

(WBadge as any).waterName = waterName;

(WBadge as any).install = (Vue: any): void => {
  Vue.component(waterName, WBadge);
};

export default WBadge;
