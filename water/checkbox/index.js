import WCheckbox from './Checkbox';
import WCheckboxGroup from './CheckboxGroup';

WCheckbox.install = (Vue) => {
  Vue.component(WCheckbox.name, WCheckbox);
};

WCheckboxGroup.install = (Vue) => {
  Vue.component(WCheckboxGroup.name, WCheckboxGroup);
};

export {
  WCheckbox,
  WCheckboxGroup,
};
