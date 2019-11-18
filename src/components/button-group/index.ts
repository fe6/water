import WButtonGroup from '@/components/button/src/ButtonGroup.vue';

const waterName = 'WButtonGroup';

(WButtonGroup as any).waterName = waterName;

(WButtonGroup as any).install = (Vue: any): void => {
  Vue.component(waterName, WButtonGroup);
};

export default WButtonGroup;
