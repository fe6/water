/** @format */

// 通用组件
import WText from '@fe6/water-text';

const components = {
  WText,
};

const install = (Vue: any): void => {
  if (!(install as any).installed) {
    Object.keys(components).forEach((cptKey): void => {
      const cpt = (components as any)[cptKey];
      Vue.component(cpt.name, cpt);
    });
  }
};

export default {
  install,
  ...components,
};
