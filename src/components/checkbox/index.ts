/** @format */

import WCheckbox from '@/components/checkbox/src/Checkbox.vue';

const waterName = 'WCheckbox';

(WCheckbox as any).waterName = waterName;

(WCheckbox as any).install = (Vue: any): void => {
  Vue.component(waterName, WCheckbox);
};

export default WCheckbox;
