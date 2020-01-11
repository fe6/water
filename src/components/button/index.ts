/** @format */

import WButton from './src/Button.vue';

const waterName = 'WButton';

(WButton as any).waterName = waterName;

(WButton as any).install = (Vue: any): void => {
  Vue.component(waterName, WButton);
};

export default WButton;
