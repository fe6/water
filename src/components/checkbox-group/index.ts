/** @format */

import WCheckboxGroup from '@/components/checkbox/src/CheckboxGroup.vue';

const waterName = 'WCheckboxGroup';

(WCheckboxGroup as any).waterName = waterName;

(WCheckboxGroup as any).install = (Vue: any): void => {
  Vue.component(waterName, WCheckboxGroup);
};

export default WCheckboxGroup;
