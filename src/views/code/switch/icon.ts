import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/switch/base';
import { IMAGE, ALT } from '@/views/common/constant';

const base: ApiEntity = {
  title: '自定义内容',
  desc: '设置 <code>slot</code> 属性即可',
  code: codeCommon({
    content: `
  <img slot="open" src="${IMAGE}" alt="ALT" />
  <img slot="close" src="${IMAGE}" alt="ALT" />
`,
  }),
  render: (h: Function) => renderCommon(h, {
    render: (createElement: Function) => [
      createElement('img', {
        attrs: {
          src: IMAGE,
          alt: ALT,
        },
        style: {
          width: '16px',
          display: 'block',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-40%)',
          left: '5px',
        },
        slot: 'open',
      }),
      createElement('img', {
        attrs: {
          src: IMAGE,
          alt: ALT,
        },
        style: {
          width: '16px',
          display: 'block',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '5px',
        },
        slot: 'close',
      }),
    ],
  }),
};

export default base;
