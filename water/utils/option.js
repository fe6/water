// 放到这是因为碰到不可用的没法同步索引
export const findEnabled = (slotsData, hoverIndex = 0, direction = 1) => {
  if (!slotsData) {
    return -1;
  }
  const disables = slotsData.filter(slot => slot.disabled);
  // 如果全是禁用的情况
  if (disables.length === slotsData.length) {
    return -1;
  }
  const index = slotsData.findIndex(
    (slot, slotIndex) => !slot.disabled && hoverIndex === slotIndex,
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
    return findEnabled(slotsData, newIndex, direction);
  }
  // 防止超出了数组的长度
  return Math.min(index, slotsData.length - 1);
};

export const handleName = (value, name, slotsDefault, isTagMode = false) => {
  const newName = name.slice();
  const nameIndex = newName.findIndex(
    nameItem => (
      isTagMode
        ? nameItem === value
        : nameItem.indexOf(value) > -1
    ),
  );
  // 如果有就删了
  if (nameIndex > -1) {
    newName.splice(nameIndex, 1);
  } else {
    const newIndex = slotsDefault.findIndex(nameItem => nameItem.value.indexOf(value) > -1);
    // 如果找到对应的名字就填进去
    if (newIndex > -1) {
      newName.push(slotsDefault[newIndex].value);
    }
  }

  return newName;
};
// 有就删没有就加
export const toggleItem = (target = [], value) => {
  const newTagIndex = target.findIndex(name => name.value === value);
  if (newTagIndex > -1) {
    target.splice(newTagIndex, 1);
  } else {
    target.push({
      value,
      new: true,
      disabled: false,
    });
  }
};
// 有就加，没有不操作
export const addUsedStatus = (findTarget = [], target = []) => {
  const statusArrs = [];
  target.forEach((value) => {
    const findEnd = findTarget.find(findItem => findItem.value === value);
    statusArrs.push({
      value,
      disabled: findEnd ? findEnd.disabled : false,
    });
  });
  return statusArrs;
};
