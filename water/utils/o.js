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
export const isFunction = fun => type(fun) === '[object Function]';

// 将多维数组，转成路径数组
// cascader 联级 中使用
export const objToPath = (arr, objValue = 'value', objDisabled = 'disabled', children = 'children') => {
  const format = ' / ';
  const path = [];
  // 带着路径和索引知道没有子级再添加
  const reduceFn = (target, prefix = '', disabled = false) => {
    target.forEach((cur, index) => {
      const itemPath = prefix ? `${prefix}${format}${cur[objValue]}` : cur[objValue];
      const itemDisabled = disabled || cur[objDisabled] || false;
      if (hasOwn(cur, children)) {
        reduceFn(cur[children], itemPath, itemDisabled);
      } else {
        const value = itemPath.split(format);
        path.push({
          path: itemPath,
          disabled: itemDisabled,
          option: cur,
          value,
          nextPanel: [],
          floor: value.length - 1,
          index,
        });
      }
    });
  };
  reduceFn(arr);
  return path;
};
