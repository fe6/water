/** @format */

export const hasOwn = (item: any, attr: string): boolean =>
  Object.prototype.hasOwnProperty.call(item, attr);

export const { keys } = Object;
