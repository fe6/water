/** @format */

import WModal from './src/Modal.vue';

const waterName = 'WModal';

(WModal as any).waterName = waterName;

(WModal as any).install = (Vue: any): void => {
  Vue.component(waterName, WModal);
};

export default WModal;
