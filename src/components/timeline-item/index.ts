/** @format */

import WTimelineItem from '@/components/timeline/src/TimelineItem.vue';

const waterName = 'WTimelineItem';

(WTimelineItem as any).waterName = waterName;

(WTimelineItem as any).install = (Vue: any): void => {
  Vue.component(waterName, WTimelineItem);
};

export default WTimelineItem;
