import { ApiEntity } from '@/views/entity/demoentity';

const url = 'http://getbootstrap.com/css/#grid-media-queries';

const base: ApiEntity = {
  title: '响应式布局',
  desc: `参照 Bootstrap 的 <a href="${url}" class="link">响应式设计</a>，预设六个响应尺寸： <code>xs</code> <code>sm</code> <code>md</code> <code>lg</code> <code>xl</code> <code>xxl</code> 。`,
  code: `<w-row>
  <w-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
    <div class="demo-grid-box">col</div>
  </w-col>
  <w-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
    <div class="demo-grid-box">col</div>
  </w-col>
  <w-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
    <div class="demo-grid-box">col</div>
  </w-col>
</w-row>`,
};

export default base;
