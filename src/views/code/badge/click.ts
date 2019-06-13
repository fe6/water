import Badge from '@/components/badge/Badge.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '可点击',
  desc: '用 a 标签进行包裹即可。',
  code: `<a href="#">\n  <${Badge.name} class="badge" :value="99" />\n</a>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h('a', {
        attrs: {
          href: '#',
        },
      }, [
        h(Badge, {
          class: 'badge',
          props: {
            value: 99,
          },
        }, [
          h('a', {
            class: 'badge-link',
            attrs: {
              href: '#',
            },
          }),
        ]),
      ]),
    ],
  ),
};

export default base;
