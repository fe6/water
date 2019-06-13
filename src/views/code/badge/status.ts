import Badge from '@/components/badge/Badge.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '小红点',
  desc: '没有具体的数字。设置 <code>status</code> 即可。',
  code: `<${Badge.name} status="success" />
<${Badge.name} status="error" />
<${Badge.name} status="default" />
<${Badge.name} status="processing" />
<${Badge.name} status="warning" />

<${Badge.name} status="success" text="成功" />
<${Badge.name} status="error" text="报错" />
<${Badge.name} status="default" text="默认" />
<${Badge.name} status="processing" text="进行中" />
<${Badge.name} status="warning" text="提醒" />`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Badge, {
        class: 'badge',
        props: {
          status: 'success',
        },
      }),
      h(Badge, {
        class: 'badge',
        props: {
          status: 'error',
        },
      }),
      h(Badge, {
        class: 'badge',
        props: {
          status: 'default',
        },
      }),
      h(Badge, {
        class: 'badge',
        props: {
          status: 'processing',
        },
      }),
      h(Badge, {
        class: 'badge',
        props: {
          status: 'warning',
        },
      }),
      h('br'),
      h('br'),
      h(Badge, {
        class: 'badge',
        props: {
          status: 'success',
          text: '成功',
        },
      }),
      h(Badge, {
        class: 'badge',
        props: {
          status: 'error',
          text: '报错',
        },
      }),
      h(Badge, {
        class: 'badge',
        props: {
          status: 'default',
          text: '默认',
        },
      }),
      h(Badge, {
        class: 'badge',
        props: {
          status: 'processing',
          text: '进行中',
        },
      }),
      h(Badge, {
        class: 'badge',
        props: {
          status: 'warning',
          text: '提醒',
        },
      }),
    ],
  ),
};

export default base;
