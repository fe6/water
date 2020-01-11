/** @format */

import WTimepicker from './src/Timepicker.vue';

const waterName = 'WTimepicker';

(WTimepicker as any).waterName = waterName;

(WTimepicker as any).install = (Vue: any): void => {
  Vue.component(waterName, WTimepicker);
};

export default WTimepicker;
