/** @format */

import { install } from '@packages/shared/lib/index';

// 通用组件
import WText from '@packages/text/src/text';

export const components = { WText };

export default {
  install(Vue: any): void {
    install(Vue, components);
  },
  ...components,
};
