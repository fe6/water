/** @format */

import WInput from './src/Input.vue';

const waterName = 'WInput';

(WInput as any).waterName = waterName;

(WInput as any).install = (Vue: any): void => {
  Vue.component(waterName, WInput);
};

export default WInput;
