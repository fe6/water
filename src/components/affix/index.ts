/** @format */

import WAffix from './src/Affix.vue';

const waterName = 'WAffix';

(WAffix as any).waterName = waterName;

(WAffix as any).install = (Vue: any): void => {
  Vue.component(waterName, WAffix);
};

export default WAffix;
