/** @format */

import WSpin from './src/Spin.vue';

const waterName = 'WSpin';

(WSpin as any).waterName = waterName;

(WSpin as any).install = (Vue: any): void => {
  Vue.component(waterName, WSpin);
};

export default WSpin;
