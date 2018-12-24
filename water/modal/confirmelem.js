import Vue from 'vue';
import WModal from './Modal';

export default (props = {}) => {
  const Instance = new Vue({
    data: props,
    render(h) {
      return h(WModal, {
        props,
      }, [
        this.render(h),
      ]);
    },
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const modal = Instance.$children[0];

  return {
    confirm() {
      modal.status = true;
    },
    close() {
      modal.status = false;
    },
  };
};
