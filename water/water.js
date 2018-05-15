// 组件
import WIcon from './icon/index';
import { WButton, WButtonGroup } from './button/index';
import WLoadbar from './loadbar/index';
import { WCol, WRow } from './grid/index';
import WAffix from './affix/index';
import { WBreadcrumb, WBreadcrumbItem } from './breadcrumb/index';
import WRate from './rate/index';

const waterCpt = {
  WIcon,
  WButton,
  WButtonGroup,
  WLoadbar,
  WCol,
  WRow,
  WAffix,
  WBreadcrumb,
  WBreadcrumbItem,
  WRate,
};

const install = (Vue) => {
  if (install.installed) return;

  Object.keys(waterCpt).forEach((key) => {
    Vue.component(key, waterCpt[key]);
  });


  if (!Vue.prototype.$WLoadbar) {
    Object.defineProperties(Vue.prototype, {
      $WLoadbar: {
        get() {
          return WLoadbar;
        },
      },
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  WLoadbar,
  install,
};
