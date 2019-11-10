import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '不一样的日期',
  desc: '利用 <code>slot</code> 即可实现。',
  code: '<w-datepicker @change="change" v-model="valueDate">选中的值： {{valueDate}}</w-datepicker>',
  js: `
  {
    data() {
      return {
        valueDate: '1999-11-10',
      };
    },
    methods: {
      change(params) {
        console.log(params, '改变的值');
      },
    },
  }
`,
};

export default base;
