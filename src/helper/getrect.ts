/** @format */

export interface RectEntity {
  bottom?: number;
  height?: number;
  left?: number;
  right?: number;
  top?: number;
  width?: number;
  x?: number;
  y?: number;
}

export const getRect = (target: HTMLElement | Window | null): RectEntity =>
  target !== window
    ? (target as HTMLElement).getBoundingClientRect()
    : ({ top: 0, bottom: window.innerHeight } as RectEntity);
