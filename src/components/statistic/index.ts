import WStatistic from './src/Statistic.vue';

const waterName = 'WStatistic';

(WStatistic as any).waterName = waterName;

(WStatistic as any).install = (Vue: any): void => {
  Vue.component(waterName, WStatistic);
};

export default WStatistic;
