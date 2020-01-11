/** @format */

import WCalendar from './src/Calendar.vue';

const waterName = 'WCalendar';

(WCalendar as any).waterName = waterName;

(WCalendar as any).install = (Vue: any): void => {
  Vue.component(waterName, WCalendar);
};

export default WCalendar;
