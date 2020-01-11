/** @format */

export const type = (thing: any): string =>
  Object.prototype.toString.call(thing);

export const isNumber = (thing: any): boolean =>
  type(thing) === '[object Number]';

export const isString = (thing: any): boolean =>
  type(thing) === '[object String]';

export const isBoolean = (thing: any): boolean =>
  type(thing) === '[object Boolean]';

export const isUndefined = (thing: any): boolean =>
  type(thing) === '[object Undefined]';

export const isArray = (thing: any): boolean =>
  type(thing) === '[object Array]';

export const isObject = (thing: any): boolean =>
  type(thing) === '[object Object]';

export const isFunction = (thing: any): boolean =>
  type(thing) === '[object Function]';

export const isPromise = (thing: any): boolean =>
  type(thing) === '[object Promise]';

// 是否是韩语
export const isKorean = (text: string): boolean => {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
};
