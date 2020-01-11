/** @format */

import WTimeline from './src/Timeline.vue';

const waterName = 'WTimeline';

(WTimeline as any).waterName = waterName;

(WTimeline as any).install = (Vue: any): void => {
  Vue.component(waterName, WTimeline);
};

export default WTimeline;
