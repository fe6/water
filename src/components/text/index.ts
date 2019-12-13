import WText from './src/Text.vue';

const waterName = 'WText';

(WText as any).waterName = waterName;

(WText as any).install = (Vue: any): void => {
  Vue.component(waterName, WText);
};

export default WText;
