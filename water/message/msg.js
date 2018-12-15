import Vue from 'vue';
import WMessage from './Message';

export default (props = {}) => {
  const Instance = new Vue({
    data: props,
    render(h) {
      return h(WMessage, {
        props,
      });
    },
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);

  return Instance.$children[0].add;
};
