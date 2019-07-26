import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '区域大小',
  desc: '设置 <code>size</code> 即可。',
  code: `<w-spin size="small" tip="拼命的跑啊跑">
  <div>
    <h1>这只是一个标题</h1>
    <p>这只是一段文案。</p>
  </div>
</w-spin>
<w-spin tip="拼命的跑啊跑">
  <div>
    <h1>这只是一个标题</h1>
    <p>这只是一段文案。</p>
  </div>
</w-spin>
<w-spin size="large" tip="拼命的跑啊跑">
  <div>
    <h1>这只是一个标题</h1>
    <p>这只是一段文案。</p>
  </div>
</w-spin>`,
};

export default base;
