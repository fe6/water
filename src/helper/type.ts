export const type = (thing: any): string => Object.prototype.toString.call(thing);

export const isNumber = (thing: any): boolean => type(thing) === '[object Number]';

export const isString = (thing: any): boolean => type(thing) === '[object String]';

export const isBoolean = (thing: any): boolean => type(thing) === '[object Boolean]';
