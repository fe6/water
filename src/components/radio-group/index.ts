/** @format */

import WRadioGroup from '@/components/radio/src/RadioGroup.vue';

const waterName = 'WRadioGroup';

(WRadioGroup as any).waterName = waterName;

(WRadioGroup as any).install = (Vue: any): void => {
  Vue.component(waterName, WRadioGroup);
};

export default WRadioGroup;
