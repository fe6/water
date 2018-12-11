export const hasOwn = (item, attr) => Object.prototype.hasOwnProperty.call(item, attr);

export default {
  empty(obj) {
    return JSON.stringify(obj) === '{}';
  },
  copy(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  type(thing) {
    if (thing === null) return '[object Null]';
    // special case
    return Object.prototype.toString.call(thing);
  },
};
