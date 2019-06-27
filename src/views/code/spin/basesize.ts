import Spin from '@/components/spin/Spin.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: 'icon 版的三种大小',
  desc: '设置 <code>size</code> 即可。',
  code: `<w-spin size="small" />
<w-spin />
<w-spin size="large" />`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Spin, {
        props: {
          size: 'small',
        },
        style: {
          marginRight: '16px',
        },
      }),
      h(Spin, {
        style: {
          marginRight: '16px',
        },
      }),
      h(Spin, {
        props: {
          size: 'large',
        },
      }),
    ],
  ),
};

export default base;
