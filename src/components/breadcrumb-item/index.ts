import WBreadcrumbItem from '@/components/breadcrumb/src/BreadcrumbItem.vue';

const waterName = 'WBreadcrumbItem';

(WBreadcrumbItem as any).waterName = waterName;

(WBreadcrumbItem as any).install = (Vue: any): void => {
  Vue.component(waterName, WBreadcrumbItem);
};

export default WBreadcrumbItem;
