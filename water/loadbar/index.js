import Vue from 'vue';
import LoadBar from './Loadbar';

let loadlineInstance;

const newInstance = () => {
  const Instance = new Vue({
    render(h) {
      return h(LoadBar);
    },
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const notification = Instance.$children[0];

  return {
    notice(noticeProps) {
      notification.add(noticeProps);
    },
    start() {
      notification.start();
    },
    finish() {
      notification.finish();
    },
    update(num) {
      notification.update(num);
    },
    fail() {
      notification.fail();
    },
  };
};

function notice(params = {}) {
  loadlineInstance = loadlineInstance || newInstance();
  loadlineInstance.notice(params);
}

export default {
  init(params) {
    notice(params);
  },
  start() {
    loadlineInstance.start();
  },
  finish() {
    loadlineInstance.finish();
  },
  update(num) {
    loadlineInstance.update(num);
  },
  fail() {
    loadlineInstance.fail();
  },
};
