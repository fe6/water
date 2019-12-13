import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '基本使用。',
  code: '<w-timepicker v-model="valueDate" />',
  js: `
  {
    data() {
      return {
        valueDate: '10:10:10',
      };
    },
  }
`,
};

export default base;
