import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '自定义描述文案',
  desc: '设置 <code>tip</code> 即可。',
  code: `<w-spin tip="正在加载">
  <div>
    <h1>这只是一个标题</h1>
    <p>这只是一段文案。</p>
  </div>
</w-spin>`,
};

export default base;
