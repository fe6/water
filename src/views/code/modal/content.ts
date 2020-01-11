/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '只有内容',
  desc: '有些时候的对话框可全定制。',
  code: `<w-button @click="modalStatus = true">点击</w-button>
<w-modal :closable="false" :okable="false" :cancelable="false" v-model="modalStatus">
  <div>Some contents...</div>
  <div>Some contents...</div>
  <div>Some contents...</div>
  <w-button @click="modalStatus = false">我要关上！</w-button>
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
