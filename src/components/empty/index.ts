import WEmpty from './src/Empty.vue';

const waterName = 'WEmpty';

(WEmpty as any).waterName = waterName;

(WEmpty as any).install = (Vue: any): void => {
  Vue.component(waterName, WEmpty);
};

export default WEmpty;
