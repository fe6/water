import { ApiEntity } from '@/views/entity/demoentity';

const href = 'https://github.com/fe6/water';

const base: ApiEntity = {
  title: '自定义',
  desc:
    '通过 <code>slot="title"</code> 自定义标题, <code>slot="footer"</code> 自定义页脚。',
  code: `<w-button @click="modalStatus = true">点击</w-button>
<w-modal v-model="modalStatus" title="Basic Modal">
  <div>Some contents...</div>
  <w-button @click="diyTextStatus = !diyTextStatus">我想改下面的文案</w-button>
  <div>{{ diyTextStatus ? '听说今年国安要夺冠' : '没错，国安就是冠军' }}</div>
  <div slot="title">
    <a href="${href}">我想去看海!</a>
  </div>
  <a href="${href}">我想去看海!</a>
  <div slot="footer">
    <w-button type="danger" @click="modalStatus = false">我要关上</w-button>
  </div>
</w-modal>`,
  js: `{
  data() {
    return {
      modalStatus: false,
      diyTextStatus: false,
    };
  },
}`,
};

export default base;
