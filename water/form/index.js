import WInput from './input/InputWraper';

WInput.install = (Vue) => {
  Vue.component(WInput.name, WInput);
};

export {
  WInput,
};
