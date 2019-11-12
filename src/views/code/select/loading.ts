import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, defaultDatas } from '@/views/code/select/base';

const base: ApiEntity = {
  title: '加载中',
  desc: '添加 <code>loading</code> 属性即可。',
  code: codeCommon({
    attr: 'v-model="selectValue" :loading="loadingStatus" :before="beforeFn"',
  }),
  js: `{
  data() {
    return {
      selectValue: '更多',
      loadingStatus: false,
      defaultDatas: ${JSON.stringify(defaultDatas)},
    };
  },
  methods: {
    beforeFn() {
      this.loadingStatus = true;
      return new Promise((resolve) => {
        setTimeout(() => {
          this.loadingStatus = false;
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
