/** @format */

import WScroll from '@/components/scroll/src/Scroll.vue';

const waterName = 'WScroll';

(WScroll as any).waterName = waterName;

(WScroll as any).install = (Vue: any): void => {
  Vue.component(waterName, WScroll);
};

export default WScroll;
