import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '月份使用',
  desc:
    '月份使用。修改 <code>type="month"</code> 即可设置面板类型，修改 <code>format</code> 即可设置输入框显示的格式。',
  code: '<w-datepicker format="YYYY/MM" type="month" v-model="valueMonth" />',
  js: `
  {
    data() {
      return {
        valueMonth: '2019/01',
      };
    },
  }
`,
};

export default base;
