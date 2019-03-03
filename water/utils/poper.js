import {
  hasOwn,
} from './o';

// 纵向( Ver )，设置左边的判断 start
export const isVerCenter = placement => /\b(top|bottom)\b/g.test(placement);
// topRight bottomRight
export const isVerEndRight = placement => /Right/g.test(placement);
// topLeft bottomLeft
export const isVerEndLeft = placement => /Left/g.test(placement);
// leftTop left leftBottom
export const isVerLeft = placement => /left/g.test(placement);
// rightTop right rightBottom
export const isVerRight = placement => /right/g.test(placement);
// 纵向( Ver )，设置左边的判断 end

// 横向( Hor )，设置左边的判断 start
// left right
export const isHorCenter = placement => /\b(left|right)\b/g.test(placement);
// leftBottom rightBottom
export const isHorEndBottom = placement => /Bottom/g.test(placement);
// topTop bottomTop
export const isVerEndTop = placement => /Top/g.test(placement);
// top topLeft topRight
export const isHorTop = placement => /top/g.test(placement);
// bottom bottomLeft bottomRight
export const isHorBottom = placement => /bottom/g.test(placement);
// 横向( Hor )，设置左边的判断 end

export const regDirection = {
  // 纵向( Ver )，设置左边的判断 start
  isVerCenter() {
    return /\b(top|bottom)\b/g.test(this.placement);
  },
  // topRight bottomRight
  isVerEndRight() {
    return /Right/g.test(this.placement);
  },
  // topLeft bottomLeft
  isVerEndLeft() {
    return /Left/g.test(this.placement);
  },
  // leftTop left leftBottom
  isVerLeft() {
    return /left/g.test(this.placement);
  },
  // rightTop right rightBottom
  isVerRight() {
    return /right/g.test(this.placement);
  },
  // 纵向( Ver )，设置左边的判断 end

  // 横向( Hor )，设置左边的判断 start
  // left right
  isHorCenter() {
    return /\b(left|right)\b/g.test(this.placement);
  },
  // leftBottom rightBottom
  isHorEndBottom() {
    return /Bottom/g.test(this.placement);
  },
  // topTop bottomTop
  isVerEndTop() {
    return /Top/g.test(this.placement);
  },
  // top topLeft topRight
  isHorTop() {
    return /top/g.test(this.placement);
  },
  // bottom bottomLeft bottomRight
  isHorBottom() {
    return /bottom/g.test(this.placement);
  },
  // 横向( Hor )，设置左边的判断 end
};

export const setLeftFn = (self, render, before = () => {}, after = () => {}) => {
  const { offsetLeft, offsetWidth } = render;
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
        posX = offsetLeft + offsetWidth / 2 - tooltipWidth / 2;
      } else if (self.isVerLeft) {
        // leftTop left leftBottom
        posX = offsetLeft - tooltipWidth - self.interval;
      } else if (self.isVerEndRight) {
        // topRight bottomRight
        posX = offsetLeft + offsetWidth - tooltipWidth;
      } else if (self.isVerRight) {
        // rightTop right rightBottom
        posX = offsetLeft + offsetWidth + self.interval;
      }
      resolve(posX);
    });
  });
}; // end setLeftFn

export const setTopFn = (self, render, before = () => {}, after = () => {}) => {
  const { offsetTop, offsetHeight } = render;
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
        posY = offsetTop + offsetHeight / 2 - tooltipHeight / 2;
      } else if (self.isHorEndBottom) {
        // leftBottom rightBottom
        posY = offsetTop + offsetHeight - tooltipHeight;
      } else if (self.isHorTop) {
        // top topLeft topRight
        posY = offsetTop - tooltipHeight - self.interval;
      } else if (self.isHorBottom) {
        // bottom bottomLeft bottomRight
        posY = offsetTop + offsetHeight + self.interval;
      }
      resolve(posY);
    });
  });
}; // end setTopFn

export const setPostion = (self, refName) => {
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
