import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: 'esc 快捷键',
  desc: '添加属性 <code>esc</code> 即可。',
  code: `<w-button @click="modalStatus = true">点击</w-button>
<w-modal :esc="true" v-model="modalStatus" title="ESC Modal">
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
