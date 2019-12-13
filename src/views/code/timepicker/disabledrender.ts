import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '不可选小时',
  desc: '修改 <code>disabledHourRender</code> 即可。',
  code:
    '<w-timepicker v-model="valueDate" :disabled-hour-render="disabledHourRender" />',
  js: `
  {
    data() {
      return {
        valueDate: '',
      };
    },
    methods: {
      disabledHourRender({
        time,
        minute,
        second,
      }) {
        return moment(
          \`\${time}:\${minute}:\${second}\`,
          'HH:mm:ss'
        ).isBefore(moment('12:12:12', 'HH:mm:ss'));
      }
    },
  }
`,
};

export default base;
