export const hasOwn = (item, attr) => Object.prototype.hasOwnProperty.call(item, attr);

export const { keys } = Object;

export const empty = obj => JSON.stringify(obj) === '{}';

export const copy = obj => JSON.parse(JSON.stringify(obj));

export const type = (thing) => {
  if (thing === null) return '[object Null]';
  // special case
  return Object.prototype.toString.call(thing);
};

export const isArray = obj => type(obj) === '[object Array]';
