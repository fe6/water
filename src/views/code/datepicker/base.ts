/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '基本使用。',
  code: '<w-datepicker v-model="valueDate" />',
  js: `
  {
    data() {
      return {
        valueDate: '1999-11-10',
      };
    },
  }
`,
};

export default base;
