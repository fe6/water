import WRow from './row';
import WCol from './col';

WRow.install = (Vue) => {
  Vue.component(WRow.name, WRow);
};

WCol.install = (Vue) => {
  Vue.component(WCol.name, WCol);
};

export {
  WRow,
  WCol,
};
