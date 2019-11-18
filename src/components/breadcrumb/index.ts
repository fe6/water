import WBreadcrumb from './src/Breadcrumb.vue';

const waterName = 'WBreadcrumb';

(WBreadcrumb as any).waterName = waterName;

(WBreadcrumb as any).install = (Vue: any): void => {
  Vue.component(waterName, WBreadcrumb);
};

export default WBreadcrumb;
