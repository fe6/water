/**
 * /* eslint-disable no-unused-vars
 *
 * @format
 */

export interface BarEntity {
  offset: string;
  scroll: string;
  scrollSize: string;
  clientSize: string;
  size: string;
  key: string;
  axis: string;
  client: string;
  direction: string;
}

export interface RenderThumbStyleEntity {
  move: number;
  size: string;
  bar: BarEntity;
}

export interface ThumbStyleEntity {
  [attr: string]: string;
}

export function renderThumbStyle({
  move,
  size,
  bar,
}: RenderThumbStyleEntity): ThumbStyleEntity {
  const style: ThumbStyleEntity = {};
  const translate = `translate${bar.axis}(${move}%)`;
  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;
  return style;
}

export enum VERTICAL_ENUM {
  offset = 'offsetHeight',
  scroll = 'scrollTop',
  scrollSize = 'scrollHeight',
  clientSize = 'clientHeight',
  size = 'height',
  key = 'vertical',
  axis = 'Y',
  client = 'clientY',
  direction = 'top',
}

export enum HORIZONTAL_ENUM {
  offset = 'offsetWidth',
  scroll = 'scrollLeft',
  scrollSize = 'scrollWidth',
  clientSize = 'clientWidth',
  size = 'width',
  key = 'horizontal',
  axis = 'X',
  client = 'clientX',
  direction = 'left',
}

export enum DIR_ENUM {
  NEXT = 'next',
  PREV = 'prev',
}

export interface ScrollToEntity {
  scrollChange: number;
}
