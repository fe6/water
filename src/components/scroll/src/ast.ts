export interface BarFace {
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

export const BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    clientSize: 'clientHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top',
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    clientSize: 'clientWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left',
  },
};

export interface RenderThumbStyleFace {
  move: number;
  size: string;
  bar: BarFace;
}

export interface ThumbStyleFace {
  [attr: string]: string;
}

export function renderThumbStyle({
  move,
  size,
  bar,
}: RenderThumbStyleFace): ThumbStyleFace {
  const style: ThumbStyleFace = {};
  const translate = `translate${bar.axis}(${move}%)`;
  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;
  return style;
}
