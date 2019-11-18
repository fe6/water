import WTooltip from './src/Tooltip.vue';

const waterName = 'WTooltip';

(WTooltip as any).waterName = waterName;

(WTooltip as any).install = (Vue: any): void => {
  Vue.component(waterName, WTooltip);
};

export default WTooltip;
