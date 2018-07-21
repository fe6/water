import WRadio from './Radio';
import WRadioGroup from './RadioGroup';

WRadio.install = (Vue) => {
  Vue.component(WRadio.name, WRadio);
};

WRadioGroup.install = (Vue) => {
  Vue.component(WRadioGroup.name, WRadioGroup);
};

export {
  WRadio,
  WRadioGroup,
};
