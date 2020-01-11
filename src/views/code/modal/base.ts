/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '基本使用。',
  code: `<w-button @click="modalStatus = true">点击</w-button>
<w-modal v-model="modalStatus" title="Basic Modal">
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
