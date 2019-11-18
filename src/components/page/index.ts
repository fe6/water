import WPage from './src/Page.vue';

const waterName = 'WPage';

(WPage as any).waterName = waterName;

(WPage as any).install = (Vue: any): void => {
  Vue.component(waterName, WPage);
};

export default WPage;
