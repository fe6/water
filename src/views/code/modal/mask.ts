/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '没有遮罩',
  desc: '让 <code>mask</code> 为 false 即可。',
  code: `<w-button @click="modalStatus = true">点击</w-button>
<w-modal :mask="false" v-model="modalStatus" title="没有遮罩的对话框">
  <div>Some contents...</div>
  <div>Some contents...</div>
  <div>Some contents...</div>
</w-modal>`,
  js: `{
  data() {
    return {
      modalStatus: false,
    };
  },
}`,
};

export default base;
