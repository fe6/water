/* eslint-disable */
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
  const reduceFn = (target: any[], valuePrefix = '', labelPrefix = '', disabled = false) => {
    target.forEach((cur, index) => {
      const itemValuePath = valuePrefix ? `${valuePrefix}${format}${cur[fieldNames.value]}` : cur[fieldNames.value];
      const itemLabelPath = labelPrefix ? `${labelPrefix}${format}${cur[fieldNames.label]}` : cur[fieldNames.label];
      const itemDisabled = disabled || cur[fieldNames.disabled] || false;

      if (hasOwn(cur, fieldNames.children)) {
        reduceFn(cur[fieldNames.children], itemValuePath, itemLabelPath, itemDisabled);
      } else {
        const value = itemValuePath.split(format);
        path.push({
          path: itemValuePath,
          disabled: itemDisabled,
          item: cur,
          [fieldNames.value]: value,
          [fieldNames.label]: itemLabelPath.split(format),
          [fieldNames.children]: [],
          floor: value.length - 1,
          index,
        });
      }
    });
  };
  reduceFn(arr);
  return path;
};

// 递归获取结果 通过 label
export const getValueByLabel = (values: any[], options: any[], fieldNames: FieldNamesEntity) => {
  console.log(options, 'options');
  console.log(values, 'values');
  const newValue: string[] = [];
  let index: number = 0;
  const loopFind = (opts: any[]) => opts.find(
    (opt: any) => {
      console.log(opt[fieldNames.label], values[index], 'opt[fieldNames.label] === values[index]');
      return opt[fieldNames.label] === values[index];
    },
  );
  const loop = (opts: any[]) => {
    const Item = loopFind(opts);
    console.log(Item, 'Item loop');
    if (Item) {
      newValue.push(Item[fieldNames.value]);
    }
    if (Item && hasOwn(Item, fieldNames.children)) {
      index++;
      loop(Item[fieldNames.children]);
    }
  };

  loop(options);
  console.log(newValue, 'newValue');
  return newValue;
};

// 通过 children 获取下一级选项
export const getChildOptions = ({
  item,
  origin,
  index,
}: any) => {
  const opts: any = {
    index: -1,
    options: [],
  };
  const nextIndex = index + 1;

  item.forEach((childItem: any) => {
    opts.options.push(childItem);
  });

  if (origin[nextIndex]) {
    origin.splice(nextIndex, 1, opts);
    // 如果点击第二列，子级展开之后点击第一列，清空三列及之后自列
    if (origin.length > nextIndex) {
      origin.length = nextIndex + 1;
    }
  } else {
    origin.push(opts);
  }
};

// 轮询递归找出多级下拉选项
export const getCascaderOptions = ({
  options,
  origin,
  value,
  fieldNames,
}: any) => {
  let index = 0;
  const { label, children } = fieldNames;
  const loopFind = (opts: any[]) => opts.find(
    (opt: any) => opt[label] === value[index],
  );
  const loopFindIndex = (opts: any[]) => opts.findIndex(
    (opt: any) => opt[label] === value[index],
  );
  const loop = (opts: any[]) => {
    const Item = loopFind(opts);
    if (Item) {
      origin.push({
        index: loopFindIndex(opts),
        options: opts,
      });
      if (hasOwn(Item, children)) {
        index++;
        loop(Item[children]);
      }
    } else {
      // 如果初始化没有值，或者没匹配到
      origin.push({
        index: -1,
        options: opts,
      });
    }
  };
  loop(options);
};
