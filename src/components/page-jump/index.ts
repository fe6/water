import WPageJump from '@/components/page/src/PageJump.vue';

const waterName = 'WPageJump';

(WPageJump as any).waterName = waterName;

(WPageJump as any).install = (Vue: any): void => {
  Vue.component(waterName, WPageJump);
};

export default WPageJump;
