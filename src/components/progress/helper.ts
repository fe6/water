import { hasOwn } from '../../helper/o';

export interface IconEntity {
  icon: string;
  color: string;
}

export interface IconListEntity {
  success: IconEntity,
  error: IconEntity,
  warning: IconEntity,
}

export const iconList = {
  success: {
    icon: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z',
    color: '#67c23a',
  },
  error: {
    icon: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z',
    color: '#f56c6c',
  },
  warning: {
    icon: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z',
    color: '#e6a23c',
  },
};

export const statusList: string[] = ['error', 'success', 'warning'];


export interface ColorItemEntity {
  color: string;
  value: number;
}

export const getColorInArray = (color: ColorItemEntity[], value: number): string => {
  const colorList: ColorItemEntity[] = color.filter(
    (colorItem: ColorItemEntity): boolean => hasOwn(colorItem, 'value') && colorItem.value <= value,
  );

  if (colorList.length) {
    const lastColor: ColorItemEntity = colorList[colorList.length - 1];
    return hasOwn(lastColor, 'color') ? lastColor.color : '';
  }

  return '';
};
