/** @format */

import { install } from '@packages/shared/lib/index';

// 通用组件
import WText from '@packages/text/src/text';
import WTitle from '@packages/title/src/title';

export const components = { WText, WTitle };

export default {
  install(Vue: any): void {
    install(Vue, components);
  },
  ...components,
};
