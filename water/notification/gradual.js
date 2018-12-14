import {
  css, addClass, removeClass, getStyle,
} from '../utils/dom';
// 过度组件中的改变高度
const gradualClass = 'w-gradual';
export default {
  setTranslateX(el) {
    css(el, {
      transform: `translateX(${this.leftSign}110%)`,
    });
  },
  beforeEnter(el) {
    addClass(el, gradualClass);
    this.setTranslateX(el);
  },
  enter(el) {
    this.setTranslateX(el);
  },
  afterEnter(el) {
    css(el, {
      transform: 'translateX(0)',
    });
    this.moving = false;
    // 自动关闭
    this.bindAutoClose();
  },
  beforeLeave(el) {
    if (!el.dataset) el.dataset = {};
    css(el, {
      paddingTop: getStyle(el, 'paddingTop'),
      paddingBottom: getStyle(el, 'paddingBottom'),
      marginBottom: getStyle(el, 'marginBottom'),
      overflow: getStyle(el, 'overflow'),
    }, 'dataset');

    css(el, {
      height: `${el.scrollHeight}px`,
      overflow: 'hidden',
    });
  },
  leave(el) {
    if (el.scrollHeight !== 0) {
      addClass(el, gradualClass);
      css(el, {
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom: 0,
      });
    }
  },
  afterLeave(el) {
    removeClass(el, gradualClass);
    css(el, {
      height: 'auto',
      overflow: getStyle(el, 'overflow', 'dataset'),
      paddingTop: getStyle(el, 'paddingTop', 'dataset'),
      paddingBottom: getStyle(el, 'paddingBottom', 'dataset'),
      marginBottom: getStyle(el, 'marginBottom', 'dataset'),
    });
  },
};
