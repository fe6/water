import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '幽灵按钮',
  desc: '幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。',
  code: `<div style="background: #f4f4f4; padding: 20px;">
  <w-button ghost>Default</w-button>
  <w-button ghost type="info">Info</w-button>
  <w-button ghost type="border">Border</w-button>
  <w-button ghost type="dashed">Dashed</w-button>
  <w-button ghost type="danger">Danger</w-button>
</div>`,
};

export default base;
