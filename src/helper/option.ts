import { FieldNamesEntity } from '@/components/select/src/entity';

// 放到这是因为碰到不可用的没法同步索引
export const findEnabled = (
  slotsData: any,
  hoverIndex = 0,
  direction = 1,
  fieldNames: FieldNamesEntity
): number => {
  if (!slotsData) {
    return -1;
  }
  const disables = slotsData.filter((slot: any) => slot[fieldNames.disabled]);
  // 如果全是禁用的情况
  if (disables.length === slotsData.length) {
    return -1;
  }
  const index = slotsData.findIndex(
    (slot: any, slotIndex: number) =>
      !slot[fieldNames.disabled] && hoverIndex === slotIndex
  );
  if (index < 0) {
    let newIndex = hoverIndex + direction;
    // 下
    if (direction === 1 && newIndex > slotsData.length - 1) {
      newIndex = 0;
    }
    // 上
    if (direction === -1 && newIndex < 0) {
      newIndex = slotsData.length - 1;
    }
    return findEnabled(slotsData, newIndex, direction, fieldNames);
  }
  // 防止超出了数组的长度
  return Math.min(index, slotsData.length - 1);
};

export const handleName = (
  value: string,
  name: any,
  slotsDefault: any[],
  isTagMode = false,
  fieldNames: FieldNamesEntity
) => {
  const newName = name.slice();
  const nameIndex = newName.findIndex((nameItem: string) =>
    isTagMode ? nameItem === value : nameItem.indexOf(value) > -1
  );
  // 如果有就删了
  if (nameIndex > -1) {
    newName.splice(nameIndex, 1);
  } else {
    const newIndex = slotsDefault.findIndex(
      (nameItem: any) => nameItem[fieldNames.label].indexOf(value) > -1
    );
    // 如果找到对应的名字就填进去
    if (newIndex > -1) {
      newName.push(slotsDefault[newIndex][fieldNames.label]);
    }
  }

  return newName;
};
// 有就删没有就加
export const toggleItem = (
  target: any[] = [],
  value: string,
  fieldNames: FieldNamesEntity
) => {
  const newTagIndex = target.findIndex(
    (name) => name[fieldNames.label] === value
  );
  if (newTagIndex > -1) {
    target.splice(newTagIndex, 1);
  } else {
    target.push({
      [fieldNames.value]: value,
      [fieldNames.label]: value,
      new: true,
      [fieldNames.disabled]: false,
    });
  }
};
// 有就加，没有不操作
export const addUsedStatus = (
  findTarget = [],
  target = [],
  fieldNames: FieldNamesEntity
) => {
  const statusArrs: any[] = [];
  target.forEach((value) => {
    const findEnd: any = findTarget.find(
      (findItem: any) => findItem[fieldNames.label] === value
    );

    statusArrs.push({
      [fieldNames.value]: findEnd[fieldNames.value],
      [fieldNames.label]: findEnd[fieldNames.label],
      [fieldNames.disabled]: findEnd ? findEnd[fieldNames.disabled] : false,
    });
  });
  return statusArrs;
};
