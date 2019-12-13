import WCheckTag from '@/components/tag/src/CheckTag.vue';

const waterName = 'WCheckTag';

(WCheckTag as any).waterName = waterName;

(WCheckTag as any).install = (Vue: any): void => {
  Vue.component(waterName, WCheckTag);
};

export default WCheckTag;
