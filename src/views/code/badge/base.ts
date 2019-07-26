import { ApiEntity } from '@/views/entity/demoentity';

export const linkStyle = 'width: 42px; height: 42px; border-radius: 4px; background: #eee; display: inline-block;';

const base: ApiEntity = {
  title: '基本使用',
  desc: '简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 <code>showZero</code> 修改为显示。 <code>slot="count"</code> 可自定义右上角的内容。',
  code: `<w-badge :value="5">
  <a href="#" style="${linkStyle}"></a>
</w-badge>
<w-badge show-zero>
  <a href="#" style="${linkStyle}"></a>
</w-badge>
<w-badge>
  <a href="#" style="${linkStyle}"></a>
  <w-icon slot="count" />
</w-badge>`,
};

export default base;
