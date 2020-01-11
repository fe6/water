/** @format */

import { keys } from '@/helper/o';

export const findUpNode = (content: any, name: string) => {
  let parent: any = content.$parent;
  let tag: string = parent.name;

  while (parent && tag !== name) {
    parent = parent.$parent;
    if (parent) {
      tag = parent.name;
    }
  }

  return parent;
};

export const preventDefaultExceptionFn = (
  el: any,
  exceptions: {
    tagName?: RegExp;
    className?: RegExp;
    [key: string]: any;
  },
): boolean => {
  let result = false;

  keys(exceptions).forEach((excItem: string) => {
    if (exceptions[excItem].test(el[excItem])) {
      result = true;
    }
  });

  return result;
};
