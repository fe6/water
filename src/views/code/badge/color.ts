import Badge from '@/components/badge/Badge.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '多彩徽标',
  desc: '当 <code>status</code> 为色值的时候可以自定义点的颜色。',
  code: `<${Badge.name} status="#00f" />

<${Badge.name} status="#00f" text="自定义" />`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Badge, {
        class: 'badge',
        props: {
          status: '#00f',
        },
      }),
      h('br'),
      h('br'),
      h(Badge, {
        class: 'badge',
        props: {
          status: '#00f',
          text: '自定义',
        },
      }),
    ],
  ),
};

export default base;
