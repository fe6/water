import WDatepicker from './src/DatePicker.vue';

const waterName = 'WDatepicker';

(WDatepicker as any).waterName = waterName;

(WDatepicker as any).install = (Vue: any): void => {
  Vue.component(waterName, WDatepicker);
};

export default WDatepicker;
