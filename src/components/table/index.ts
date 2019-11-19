import WTable from './src/Table.vue';

const waterName = 'WTable';

(WTable as any).waterName = waterName;

(WTable as any).install = (Vue: any): void => {
  Vue.component(waterName, WTable);
};

export default WTable;
