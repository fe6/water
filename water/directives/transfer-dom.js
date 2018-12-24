// Thanks to: https://github.com/iview/iview/blob/2.0/src/directives/transfer-dom.js
// Thanks to: https://github.com/airyland/vux/blob/v2/src/directives/transfer-dom/index.js
// Thanks to: https://github.com/calebroseland/vue-dom-portal

/**
 * Get target DOM Node
 * @param {(Node|string|Boolean)} [node=document.body] DOM Node, CSS selector, or Boolean
 * @return {Node} The target that the el will be appended to
 */
function getTarget(node = document.body) {
  if (node === true) { return document.body; }
  return node instanceof window.Node ? node : document.querySelector(node);
}

const directive = {
  inserted(el, { value }) {
    if (el.dataset && el.dataset.transfer !== 'true') return false;
    el.className = el.className ? `${el.className} v-transfer-dom` : 'v-transfer-dom';
    const { parentNode } = el;
    if (!parentNode) {
      return false;
    }
    const home = document.createComment('');
    let hasMovedOut = false;

    if (value !== false) {
      parentNode.replaceChild(home, el); // moving out, el is no longer in the document
      getTarget(value).appendChild(el); // moving into new place
      hasMovedOut = true;
    }
    if (!el.wTransferDomData) {
      el.wTransferDomData = {
        parentNode,
        home,
        target: getTarget(value),
        hasMovedOut,
      };
    }
    return false;
  },
  componentUpdated(el, { value }) {
    if (el.dataset && el.dataset.transfer !== 'true') return false;
    // need to make sure children are done updating (vs. `update`)
    const ref$1 = el.wTransferDomData;
    if (!ref$1) {
      return false;
    }
    // homes.get(el)
    const { home, parentNode, hasMovedOut } = ref$1; // recall where home is

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
    } else if (value) {
      // already moved, going somewhere else
      getTarget(value).appendChild(el);
    }
    return false;
  },
  unbind(el) {
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
