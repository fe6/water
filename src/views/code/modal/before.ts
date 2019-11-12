import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '确定之前',
  desc:
    '通过 <code>before</code> 即可对确定之前进行操作，返回 <code>Promise</code> 。添加 <code>loading</code> 属性即可控制对话框中确定键的 <code>loading</code> 状态。',
  code: `<w-button @click="modalStatus = true">点击</w-button>
  <w-modal :loading="modalLoading" :before="beforeFn" v-model="modalStatus" title="确定之前">
  姓名<input aria-label="姓名" />
  <br />
  <br />
  密码<input type="passworld" aria-label="密码" />
</w-modal>`,
  js: `{
  data() {
    return {
      modalLoading: false,
      modalStatus: false,
    };
  },
  methods: {
    beforeFn() {
      this.modalLoading = true;
      return new Promise((resolve) => {
        setTimeout(() => {
          this.modalLoading = false;
          if (window.confirm('你确定选择吗？')) {
            resolve();
          }
        }, 1000);
      });
    },
  },
}`,
};

export default base;
