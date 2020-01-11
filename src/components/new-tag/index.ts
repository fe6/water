/** @format */

import WNewTag from '@/components/tag/src/NewTag.vue';

const waterName = 'WNewTag';

(WNewTag as any).waterName = waterName;

(WNewTag as any).install = (Vue: any): void => {
  Vue.component(waterName, WNewTag);
};

export default WNewTag;
