/** @format */

import WSelect from './src/Select.vue';

const waterName = 'WSelect';

(WSelect as any).waterName = waterName;

(WSelect as any).install = (Vue: any): void => {
  Vue.component(waterName, WSelect);
};

export default WSelect;
