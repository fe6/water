/** @format */
import { install } from '@fe6/water-shared';

// 通用组件
import WText from '../text/index';

export const components = { WText };

export default {
  install(Vue: any): void {
    install(Vue, components);
  },
  ...components,
};
