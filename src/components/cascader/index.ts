import WCascader from './src/Cascader.vue';

const waterName = 'WCascader';

(WCascader as any).waterName = waterName;

(WCascader as any).install = (Vue: any): void => {
  Vue.component(waterName, WCascader);
};

export default WCascader;
