export const setLeftFn = (self, render, before = () => {}, after = () => {}) => {
  const { offsetLeft, offsetWidth } = render;
  before();
  return new Promise((resolve) => {
    self.$nextTick(() => {
      const { tooltipElem = { offsetWidth: 0 } } = self.$refs;
      const tooltipWidth = tooltipElem.offsetWidth;
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
      const { tooltipElem = { offsetHeight: 0 } } = self.$refs;
      const tooltipHeight = tooltipElem.offsetHeight;
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
