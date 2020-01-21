/** @format */

import { install } from '@fe6/water-shared';

// 通用组件
import WText from '@fe6/water-text';
import WTitle from '@fe6/water-title';

export const components = {
  WText,
  WTitle,
};

export default {
  install(Vue: any): void {
    install(Vue, components);
  },
  ...components,
};
