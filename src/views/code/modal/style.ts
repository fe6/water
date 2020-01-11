/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const modalStyle = {
  top: 0,
  transform: 'translate(-50%, 0)',
};

const base: ApiEntity = {
  title: '改变样式',
  desc: '设置 <code>modalStyle</code> 即可。',
  code: `<w-button @click="modalStatus = true">点击</w-button>
<w-modal :modal-style="modalStyle" v-model="modalStatus" title="改变样式">
  <div>Some contents...</div>
  <div>Some contents...</div>
  <div>Some contents...</div>
</w-modal>`,
  js: `{
  data() {
    return {
      modalStyle: ${JSON.stringify(modalStyle)},
      modalStatus: false,
    };
  },
}`,
};

export default base;
