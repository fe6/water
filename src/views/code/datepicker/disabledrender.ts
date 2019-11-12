import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '不可选日期',
  desc: '修改 <code>disabledRender</code> 即可。',
  code:
    '<w-datepicker v-model="valueDate" :disabled-render="disabledRenderDate" />',
  js: `
  {
    data() {
      return {
        valueDate: '1999-11-10',
      };
    },
    methods: {
      disabledRenderDate(params) {
        return params.item.date < 25;
      }
    },
  }
`,
};

export default base;
