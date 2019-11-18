import WRadio from '@/components/radio/src/Radio.vue';

const waterName = 'WRadio';

(WRadio as any).waterName = waterName;

(WRadio as any).install = (Vue: any): void => {
  Vue.component(waterName, WRadio);
};

export default WRadio;
