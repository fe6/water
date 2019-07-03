import {
  FieldNamesEntity,
} from '../components/cascader/entity';

export const hasOwn = (
  item: any,
  attr: string,
): boolean => Object.prototype.hasOwnProperty.call(item, attr);

export const { keys } = Object;

// 将多维数组，转成路径数组
// cascader 联级 中使用
export const objToPath = (arr: any, fieldNames: FieldNamesEntity) => {
  const format = ' / ';
  const path: any[] = [];
  // 带着路径和索引知道没有子级再添加
  const reduceFn = (target: any[], prefix = '', disabled = false) => {
    target.forEach((cur, index) => {
      const itemPath = prefix ? `${prefix}${format}${cur[fieldNames.value]}` : cur[fieldNames.value];
      const itemDisabled = disabled || cur[fieldNames.disabled] || false;
      if (hasOwn(cur, fieldNames.children)) {
        reduceFn(cur[fieldNames.children], itemPath, itemDisabled);
      } else {
        const value = itemPath.split(format);
        path.push({
          path: itemPath,
          disabled: itemDisabled,
          item: cur,
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

export const getValueUseLabel = (values: any[], options: any[], fieldNames: FieldNamesEntity) => {
  const newValue: string[] = [];
  let index: number = 0;
  const loopFind = (opts: any[]) => opts.find(
    (opt: any) => opt[fieldNames.label] === values[index],
  );
  const loop = (opts: any[]) => {
    const Item = loopFind(opts);
    if (Item) {
      newValue.push(Item[fieldNames.value]);
    }
    if (Item && hasOwn(Item, fieldNames.children)) {
      index++;
      loop(Item[fieldNames.children]);
    }
  };

  loop(options);

  return newValue;
};
