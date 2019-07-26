import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, defaultDatas } from '@/views/code/radio/base';

const base: ApiEntity = {
  title: '选中之前',
  desc: '添加 <code>before</code> 属性即可。',
  code: codeCommon({ attr: 'v-model="beforeValue" :before="beforeHandle"' }),
  js: `{
  data() {
    return {
      defaultDatas: ${JSON.stringify(defaultDatas)},
      beforeValue: '鸭梨',
    };
  },
  methods: {
    beforeHandle({ label }) {
      const opt = this.defaultDatas.find((data) => data.label === label);
      const optIndex = this.defaultDatas.findIndex((data) => data.label === label);

      this.defaultDatas.splice(optIndex, 1, Object.assign(opt, {
        loading: true,
      }));

      return new Promise((resolve) => {
        setTimeout(() => {
          this.defaultDatas.splice(optIndex, 1, Object.assign(opt, {
            loading: false,
          }));
          if (window.confirm('你确定选择吗？')) {
            resolve();
          }
        }, 1000);
      });
    }
  },
}`,
};

export default base;
