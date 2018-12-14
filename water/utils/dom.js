/* eslint-disable no-continue */
import { keys } from './o';
import trim from './trim';
/**
 * 获取样式
 *
 * @param {Object} ele 获取样式的元素
 * @returns {Object} style 对象
 */
export const getStyle = (ele, attr, type = 'style') => {
  let style = ele[type];
  if (type === 'style') {
    const getCss = window.getComputedStyle;
    if (getStyle) {
      style = getCss(ele, null);
    } else {
      style = ele.currentStyle;
    }
  }
  return style[attr];
};

export const css = (el, params, type = 'style') => {
  keys(params).forEach((paramsKey) => {
    el[type][paramsKey] = params[paramsKey];
  });
};

/* istanbul ignore next */
export const hasClass = (el, cls) => {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  }
  return (`${el.className}`).indexOf(` ${cls} `) > -1;
};

/* istanbul ignore next */
export const addClass = (el, cls) => {
  if (!el) return;
  let curClass = el.className;
  const classes = (cls || '').split(' ');

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) { continue; }
    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' clsName';
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

export const removeClass = (el, cls) => {
  if (!el || !cls) return;
  const classes = cls.split(' ');
  let curClass = ` ${el.className} `;

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) { continue; }
    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(` ${clsName} `, ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};
