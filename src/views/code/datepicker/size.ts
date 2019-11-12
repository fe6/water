import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '不同大小',
  desc:
    '修改 <code>size="small"</code> 即可输入框大小，添加 <code>disabled</code> 即可变成禁用。',
  code: '<w-datepicker disabled size="small" v-model="valueDate" />',
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
