import Badge from '@/components/badge/Badge.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '独立使用',
  desc: '不包裹任何元素即是独立使用，可自定样式展现。',
  code: `<${Badge.name} class="badge" :value="5" />\n<${Badge.name} class="badge" :value="22" style="line-height: 18px; background: #fff; border: 1px solid #dcdcdc; color: #999; box-shadow: '0 0 0 1px #d9d9d9 inset'" />\n<${Badge.name} class="badge" :value="19" style="background: #52c41a" />`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Badge, {
        class: 'badge',
        props: {
          value: 5,
        },
      }),
      h(Badge, {
        class: 'badge',
        style: {
          lineHeight: '18px',
          background: '#fff',
          border: '1px solid #dcdcdc',
          color: '#999',
          boxShadow: '0 0 0 1px #d9d9d9 inset',
        },
        props: {
          value: 22,
        },
      }),
      h(Badge, {
        class: 'badge',
        props: {
          value: 19,
        },
        style: {
          background: '#52c41a',
        },
      }),
    ],
  ),
};

export default base;
