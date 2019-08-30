import { hasOwn } from '@/helper/o';

export const getMaxLevel = (params: any[], attr: string = 'children'): number => {
  const number: number[] = params.map(() => 1);
  const loopLevet = (obj: any, idx: number) => {
    obj.reduce((acc: number, item: any) => {
      if (hasOwn(item, attr)) {
        loopLevet(item[attr], idx);
        number[idx] += 1;
      }
      return number;
    }, number);
  };

  params.forEach((paramItem: any, paramIndex: number) => {
    if (hasOwn(paramItem, attr)) {
      loopLevet(paramItem[attr], paramIndex);
      number[paramIndex] += 1;
    }
  });

  return Math.max(...number);
};

export interface ChildEntity {
  [levelPath: string]: number;
}

export const getAllChildrenLength = (params: any[], attr: string = 'children'): ChildEntity => {
  const childs: any = {};

  const loopPushChild = (obj: any, objIndex?: string) => {
    obj.forEach((objItem: any, objItemIndex: number) => {
      const level = objIndex || String(objItemIndex);
      if (hasOwn(objItem, attr)) {
        if (!hasOwn(childs, String(objIndex))) {
          childs[level] = 0;
        }

        const childItems = objItem[attr].filter(
          (objItemChild: any) => !hasOwn(objItemChild, attr),
        );

        // 更新路径中的数据
        const levelSplit = level.split('-');
        if (levelSplit.length > 1) {
          levelSplit.reduce((acc: any, levelItem: any): any => {
            childs[acc] += childItems.length;
            return `${acc}-${levelItem}`;
          }, levelSplit[0]);
        } else {
          childs[level] += childItems.length;
        }

        loopPushChild(objItem[attr], `${level}-${String(objItemIndex)}`);
      }
    });
  };

  loopPushChild(params);

  return childs;
};


export const getCol = (
  item: any,
  itemIndex: string,
  maxLevel: number,
  childLength: ChildEntity,
) => {
  const levels: number = itemIndex.split('-').length;
  const rowSpan: number = maxLevel - levels + 1;

  if (hasOwn(item, 'children')) {
    item.children.forEach((childItem: any, childIndex: number) => {
      getCol(childItem, `${itemIndex}-${String(childIndex)}`, maxLevel, childLength);
    });
    // 追加 rowSpan
    Object.assign(item, {
      colSpan: childLength[itemIndex],
    });
  } else {
    // 追加 rowSpan
    Object.assign(item, {
      rowSpan,
    });
  }
};

export const handleCol = (colDatas: any[], newCol: any[], level: number = 0) => {
  const colLine: any[] = newCol[level] || [];
  const nextLevel: number = level + 1;
  // 有层级
  if (newCol[level]) {
    newCol.splice(level, 1, colLine);
  } else {
    newCol.push(colLine);
  }
  colDatas.forEach((newColItem: any) => {
    const { children, ...item } = newColItem;
    if (children) {
      handleCol(children, newCol, nextLevel);
    }
    colLine.push(item);
  });
};
