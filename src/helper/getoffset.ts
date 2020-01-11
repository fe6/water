/** @format */

import getScroll from './getscroll';
import * as getRect from './getrect';

export interface offsetEntity {
  top: number;
  left: number;
}

export default (target: HTMLElement | Window | null): offsetEntity => {
  const { top = 0, left = 0 }: getRect.RectEntity = getRect.getRect(target);

  const scrollTop = getScroll(window, true);
  const scrollLeft = getScroll(window);

  const docEl = window.document.body;
  const clientTop = docEl.clientTop || 0;
  const clientLeft = docEl.clientLeft || 0;

  return {
    top: top + scrollTop - clientTop,
    left: left + scrollLeft - clientLeft,
  };
};
