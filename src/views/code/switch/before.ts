import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon } from '@/views/code/switch/base';

const base: ApiEntity = {
  title: '加载状态',
  desc: '设置 <code>before</code> 属性即可',
  code: codeCommon({
    attr: ':loading="swtichLoading" v-model="swtichStatus" :before="beforeFn"',
  }),
  js: `{
  data() {
    return {
      swtichStatus: false,
      swtichLoading: false,
    };
  },
  methods: {
    beforeFn() {
      this.swtichLoading = true;
      return new Promise((resolve) => {
        setTimeout(() => {
          this.swtichLoading = false;
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
