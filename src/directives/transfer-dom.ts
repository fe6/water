// Thanks to: https://github.com/iview/iview/blob/2.0/src/directives/transfer-dom.js
// Thanks to: https://github.com/airyland/vux/blob/v2/src/directives/transfer-dom/index.js
// Thanks to: https://github.com/calebroseland/vue-dom-portal

import { isPromise } from '@/helper/type';

/**
 * Get target DOM Node
 * @param {(Node|string|Boolean)} [node=document.body] DOM Node, CSS selector, or Boolean
 * @return {Node} The target that the el will be appended to
 */
function getTarget(node: any = document.body) {
  if (node === true) { return document.body; }
  return node instanceof (window as any).Node ? node : document.querySelector(node);
}

function transferInsert(
  parentNode: any,
  home: any,
  value: any,
  el: any,
  hasMovedOut: any,
  callBack: Function,
) {
  if (value !== false) {
    parentNode.replaceChild(home, el); // moving out, el is no longer in the document
    getTarget(value).appendChild(el); // moving into new place

    callBack();
  }
  if (!el.wTransferDomData) {
    el.wTransferDomData = {
      parentNode,
      home,
      target: getTarget(value),
      hasMovedOut,
    };
  }
}

function transferUpdate(
  parentNode: any,
  home: any,
  value: any,
  el: any,
  hasMovedOut: any,
) {
  if (home.nodeType === 1) {
    if (!hasMovedOut && value) {
      // remove from document and leave placeholder
      parentNode.replaceChild(home, el);
      // append to target
      getTarget(value).appendChild(el);
      el.wTransferDomData = Object.assign({}, el.wTransferDomData, {
        hasMovedOut: true,
        target: getTarget(value),
      });
    } else if (hasMovedOut && value === false) {
      // previously moved, coming back home
      parentNode.replaceChild(el, home);
      el.wTransferDomData = Object.assign(
        {},
        el.wTransferDomData,
        {
          hasMovedOut: false,
          target: getTarget(value),
        },
      );
    } else if (value && value.nodeName !== 'BODY') {
      // already moved, going somewhere else
      // 并且 不是 body 元素，就继续添加，修复 w-modal 中有 w-input 的时候输入内容会自定失去焦点
      getTarget(value).appendChild(el);
    }
  }
}

const directive = {
  inserted(el: any, { value }: any) {
    if (el.dataset && el.dataset.transfer !== 'true') return false;
    el.className = el.className ? `${el.className} v-transfer-dom` : 'v-transfer-dom';
    const { parentNode } = el;
    if (!parentNode) {
      return false;
    }
    const home = document.createComment('');
    let hasMovedOut = false;

    if (isPromise(value)) {
      value.then((targetEl: any) => {
        transferInsert(
          parentNode,
          home,
          targetEl,
          el,
          hasMovedOut,
          () => {
            hasMovedOut = true;
          },
        );
      });
    } else {
      transferInsert(
        parentNode,
        home,
        value,
        el,
        hasMovedOut,
        () => {
          hasMovedOut = true;
        },
      );
    }

    return false;
  },
  componentUpdated(el: any, { value }: any) {
    if (el.dataset && el.dataset.transfer !== 'true') return false;
    // need to make sure children are done updating (vs. `update`)
    const ref$1 = el.wTransferDomData;
    if (!ref$1) {
      return false;
    }
    // homes.get(el)
    const { home, parentNode, hasMovedOut } = ref$1; // recall where home is

    if (isPromise(value)) {
      value.then((targetEl: any) => {
        transferUpdate(
          parentNode,
          home,
          targetEl,
          el,
          hasMovedOut,
        );
      });
    } else {
      transferUpdate(
        parentNode,
        home,
        value,
        el,
        hasMovedOut,
      );
    }
    return false;
  },
  unbind(el: any) {
    if (el.dataset && el.dataset.transfer !== 'true') return false;
    el.className = el.className.replace('v-transfer-dom', '');
    const ref$1 = el.wTransferDomData;
    if (!ref$1) {
      return false;
    }
    if (el.wTransferDomData.hasMovedOut === true && el.wTransferDomData.parentNode) {
      el.wTransferDomData.parentNode.appendChild(el);
    }
    el.wTransferDomData = null;
    return false;
  },
};

export default directive;
