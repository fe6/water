/** @format */

import WInputNumber from './src/InputNumber.vue';

const waterName = 'WInputNumber';

(WInputNumber as any).waterName = waterName;

(WInputNumber as any).install = (Vue: any): void => {
  Vue.component(waterName, WInputNumber);
};

export default WInputNumber;
