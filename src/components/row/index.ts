import WRow from '@/components/grid/src/Row.vue';

const waterName = 'WRow';

(WRow as any).waterName = waterName;

(WRow as any).install = (Vue: any): void => {
  Vue.component(waterName, WRow);
};

export default WRow;
