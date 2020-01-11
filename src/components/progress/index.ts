/** @format */

import WProgress from './src/Progress.vue';

const waterName = 'WProgress';

(WProgress as any).waterName = waterName;

(WProgress as any).install = (Vue: any): void => {
  Vue.component(waterName, WProgress);
};

export default WProgress;
