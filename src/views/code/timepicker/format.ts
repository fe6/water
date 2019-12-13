import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '定制绑定值格式',
  desc: '需要设置 <code>valueFormat</code> 和 <code>format</code>',
  code:
    '<w-timepicker v-model="valueDate" value-format="HH-mm-ss" format="HH 时 mm 分 ss 秒" @change="change" />',
  js: `
  {
    data() {
      return {
        valueDate: '10-10-10',
      };
    },
    methods: {
      change(params) {
        console.log(params, 'timepicker change');
      },
    },
  }
`,
};

export default base;
