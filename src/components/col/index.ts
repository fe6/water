/** @format */

import WCol from '@/components/grid/src/Col.vue';

const waterName = 'WCol';

(WCol as any).waterName = waterName;

(WCol as any).install = (Vue: any): void => {
  Vue.component(waterName, WCol);
};

export default WCol;
