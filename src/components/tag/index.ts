import WTag from './src/Tag.vue';

const waterName = 'WTag';

(WTag as any).waterName = waterName;

(WTag as any).install = (Vue: any): void => {
  Vue.component(waterName, WTag);
};

export default WTag;
