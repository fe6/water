import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '不可用状态',
  desc: '添加 <code>disabled</code> 属性即可让按钮处于不可用状态，同时按钮样式也会改变。',
  code: `<w-button disabled>Default</w-button>
<w-button disabled type="info">Info</w-button>
<w-button disabled type="border">Border</w-button>
<w-button disabled type="dashed">Dashed</w-button>
<w-button disabled type="danger">Danger</w-button>
<br/>
<br/>
<div style="background: #f4f4f4; padding: 20px;">
  <w-button disabled ghost>Default</w-button>
  <w-button disabled ghost type="info">Info</w-button>
  <w-button disabled ghost type="border">Border</w-button>
  <w-button disabled ghost type="dashed">Dashed</w-button>
  <w-button disabled ghost type="danger">Danger</w-button>
</div>`,
};

export default base;
