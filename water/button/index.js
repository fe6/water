import WButton from './Button';
import WButtonGroup from './ButtonGroup';

WButton.install = (Vue) => {
  Vue.component(WButton.name, WButton);
};

WButtonGroup.install = (Vue) => {
  Vue.component(WButtonGroup.name, WButton);
};

export default {
  WButton,
  WButtonGroup,
};
