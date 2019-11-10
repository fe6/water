import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '定制日期',
  desc: '修改 <code>pickerRender</code> 即可。',
  code: '<w-datepicker placeholder="日期可定制" :picker-render="renderDate" />',
  js: `
  {
    data() {
      return {
        valueDate: '1999-11-10',
      };
    },
    methods: {
      renderDate(h, params) {
        const style = {};
    
        if (params.dateItem.date === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }
    
        if (params.dateItem.date === 3) {
          style.border = '1px solid #f00';
          style.borderRadius = '50%';
        }
    
        return h('div', {
          class: 'w-picker-date',
          style,
        }, params.dateItem.trueValue);
      },
    },
  }
`,
};

export default base;
