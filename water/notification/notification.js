import Vue from 'vue';
import { hasOwn } from '../utils/o';
import gradual from './gradual';
import Notification from './Notice';

const notices = {};


export default (props = {}) => {
  const { placement, getContainer = () => document.body } = props;
  if (!hasOwn(notices, placement)) {
    const Instance = new Vue({
      render(h) {
        Notification.methods = Object.assign({}, Notification.methods, gradual);
        return h(Notification, {
          props,
        });
      },
    });

    getContainer().appendChild(Instance.$mount().$el);
    notices[placement] = Instance.$children[0].add;
  }
  return notices[placement];
};
