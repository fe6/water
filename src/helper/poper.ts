import {
  hasOwn,
} from './o';

export const getScroll = (target: any, top?: boolean): number => {
  const prop = top ? 'pageYOffset' : 'pageXOffset';
  const method = top ? 'scrollTop' : 'scrollLeft';

  let ret = target[prop];

  if (typeof ret !== 'number') {
    ret = window.document.documentElement[method];
  }

  return ret;
};

export const setLeftFn = (self: any, render: Element, before = () => {}, after = () => {}) => {
  const { x, width }: any = render.getBoundingClientRect();
  const offsetLeft = x;
  before();
  return new Promise((resolve) => {
    self.$nextTick(() => {
      const { popElem = { offsetWidth: 0 } } = self.$refs;
      const tooltipWidth = popElem.offsetWidth;
      let posX = offsetLeft;
      after();
      // top left right bottom
      // topLeft topRight bottomLeft bottomRight
      // leftTop leftBottom rightTop rightBottom
      if (self.isVerCenter) {
        // top bottom
        posX = offsetLeft + width / 2 - tooltipWidth / 2;
      } else if (self.isVerLeft) {
        // leftTop left leftBottom
        posX = offsetLeft - tooltipWidth - self.interval;
      } else if (self.isVerEndRight) {
        // topRight bottomRight
        posX = offsetLeft + width - tooltipWidth;
      } else if (self.isVerRight) {
        // rightTop right rightBottom
        posX = offsetLeft + width + self.interval;
      }
      resolve(posX + getScroll(window));
    });
  });
}; // end setLeftFn

export const setTopFn = (self: any, render: Element, before = () => {}, after = () => {}) => {
  const { y, height }: any = render.getBoundingClientRect();
  const offsetTop = y;
  before();
  return new Promise((resolve) => {
    self.$nextTick(() => {
      const { popElem = { offsetHeight: 0 } } = self.$refs;
      const tooltipHeight = popElem.offsetHeight;
      let posY = offsetTop;
      after();
      // top left right bottom
      // topLeft topRight bottomLeft bottomRight
      // leftTop leftBottom rightTop rightBottom
      if (self.isHorCenter) {
        // left right
        posY = offsetTop + height / 2 - tooltipHeight / 2;
      } else if (self.isHorEndBottom) {
        // leftBottom rightBottom
        posY = offsetTop + height - tooltipHeight;
      } else if (self.isHorTop) {
        // top topLeft topRight
        posY = offsetTop - tooltipHeight - self.interval;
      } else if (self.isHorBottom) {
        // bottom bottomLeft bottomRight
        posY = offsetTop + height + self.interval;
      }
      resolve(posY + getScroll(window, true));
    });
  });
}; // end setTopFn

export const setPostion = (self: any, refName: string) => {
  const { popElem } = self.$refs;
  if (hasOwn(self.$refs, refName) && hasOwn(self.$refs, 'popElem')) {
    setLeftFn(self, self.$refs[refName]).then((left) => {
      popElem.style.left = `${left}px`;
    });
    setTopFn(self, self.$refs[refName]).then((top) => {
      popElem.style.top = `${top}px`;
    });
  }
};
