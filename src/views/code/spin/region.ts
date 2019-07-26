import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '区域加载',
  desc: '可以直接把内容内嵌到 <code>Spin</code> 中，将现有容器变为加载状态。',
  code: `<w-switch v-model="spinStatus"></w-switch>
<w-spin v-model="spinStatus">
  <div>
    <h1>这只是一个标题</h1>
    <p>这只是一段文案。</p>
  </div>
</w-spin>`,
  js: `{
  data() {
    return {
      spinStatus: true,
    };
  },
}`,
};

export default base;
