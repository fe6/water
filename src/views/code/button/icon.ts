import { ApiEntity } from '@/views/entity/demoentity';
import { IMAGE, ALT } from '@/views/common/constant';

const base: ApiEntity = {
  title: '图标按钮',
  desc: '将属性 <code>slot</code> 设置为 <code>icon</code> ,进行图标的定制。',
  code: `<w-button>
  <img slot="icon" src="${IMAGE}" alt="${ALT}" />
</w-button>
<w-button type="info">
  <img slot="icon" src="${IMAGE}" alt="${ALT}" />
</w-button>
<w-button type="border">
  <img slot="icon" src="${IMAGE}" alt="${ALT}" />
</w-button>
<w-button type="dashed">
  <img slot="icon" src="${IMAGE}" alt="${ALT}" />
</w-button>
<w-button type="danger">
  <img slot="icon" src="${IMAGE}" alt="${ALT}" />
</w-button>
<w-button>
  <img slot="icon" src="${IMAGE}" alt="${ALT}" />
  Default
</w-button>
<w-button type="info">
  <img slot="icon" src="${IMAGE}" alt="${ALT}" />
  Info
</w-button>
<w-button type="border">
  <img slot="icon" src="${IMAGE}" alt="${ALT}" />
  Border
</w-button>
<w-button type="dashed">
  <img slot="icon" src="${IMAGE}" alt="${ALT}" />
  Dashed
</w-button>
<w-button type="danger">
  <img slot="icon" src="${IMAGE}" alt="${ALT}" />
  Danger
</w-button>`,
};

export default base;
