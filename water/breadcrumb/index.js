import WBreadcrumb from './Breadcrumb';
import WBreadcrumbItem from './BreadcrumbItem';

WBreadcrumb.install = (Vue) => {
  Vue.component(WBreadcrumb.name, WBreadcrumb);
};

WBreadcrumbItem.install = (Vue) => {
  Vue.component(WBreadcrumbItem.name, WBreadcrumbItem);
};

export {
  WBreadcrumb,
  WBreadcrumbItem,
};
