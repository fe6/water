/** @format */

import WLink from './src/Link.vue';

const waterName = 'WLink';

(WLink as any).waterName = waterName;

(WLink as any).install = (Vue: any): void => {
  Vue.component(waterName, WLink);
};

export default WLink;
