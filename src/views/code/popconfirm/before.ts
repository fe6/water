import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '确定加载中',
  desc: '设置 <code>loading</code> 即可。',
  code: `<w-popconfirm :before="beforeFn" :loading="popcomfirmLoading" v-model="popcomfirmStatus" placement="bottomLeft">
  <span>点击我。</span>
  <div slot="content">
    <a href="https://github.com/fe6/water" target="_blank">水滴</a>
    官网
  </div>
</w-popconfirm>`,
  js: `{
  data() {
    return {
      popcomfirmStatus: false,
      popcomfirmLoading: false,
    };
  },
  methods: {
    beforeFn() {
      this.popcomfirmLoading = true;
      return new Promise((resolve) => {
        setTimeout(() => {
          this.popcomfirmLoading = false;
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
