import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '受控',
  desc: '设置 <code>v-modal</code> 即可。',
  code: `<w-popover trigger="click" v-model="popoverStatus" placement="bottomLeft">
  <span>点我 。</span>
  <w-link slot="title" href="https://github.com/fe6/water">水滴</w-link>
  <div slot="content">
    <div>这是内容。</div>
    <div>这是内容。</div>
    <w-link @click.native="popoverStatus = false">关闭 Popover ！</w-link>
  </div>
</w-popover>`,
  js: `{
  data() {
    return {
      popoverStatus: false,
    };
  },
}`,
};

export default base;
