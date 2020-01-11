/** @format */

import WCountdown from './src/Countdown.vue';

const waterName = 'WCountdown';

(WCountdown as any).waterName = waterName;

(WCountdown as any).install = (Vue: any): void => {
  Vue.component(waterName, WCountdown);
};

export default WCountdown;
