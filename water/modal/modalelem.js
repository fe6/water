import Vue from 'vue';
import WModal from './Modal';

export default (props = {}) => {
  const Instance = new Vue({
    data: props,
    render(h) {
      let bodyRender;
      if (this.render) {
        bodyRender = this.render(h);
      } else {
        bodyRender = h('div', {
          domProps: {
            innerHTML: this.body,
          },
        });
      }
      return h(WModal, {
        props,
      }, [
        bodyRender,
      ]);
    },
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const modal = Instance.$children[0];

  return {
    open() {
      modal.status = true;
    },
    close() {
      modal.status = false;
    },
    confirm() {
      console.log(1111);
    },
  };
};
