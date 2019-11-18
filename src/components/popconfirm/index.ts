import WPopconfirm from './src/Popconfirm.vue';

const waterName = 'WPopconfirm';

(WPopconfirm as any).waterName = waterName;

(WPopconfirm as any).install = (Vue: any): void => {
  Vue.component(waterName, WPopconfirm);
};

export default WPopconfirm;
