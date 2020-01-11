/** @format */

export default (
  target: HTMLElement | Window | null,
  isTop?: boolean,
): number => {
  if (typeof window === 'undefined') {
    return 0;
  }

  const isWindow = target === window;
  const prop = isTop ? 'pageYOffset' : 'pageXOffset';
  const method = isTop ? 'scrollTop' : 'scrollLeft';

  let value = isWindow
    ? (target as Window)[prop]
    : (target as HTMLElement)[method];

  // ie6,7,8 standard mode
  if (isWindow && typeof value !== 'number') {
    value = (document.documentElement as HTMLElement)[method];
  }

  return value;
};
