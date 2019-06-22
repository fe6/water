import Badge from '@/components/badge/Badge.vue';
import Icon from '@/components/icon/Icon.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '小红点',
  desc: '没有具体的数字。',
  code: `<w-badge :value="1" dot>
  <a href="#" />
</w-badge>
<w-badge :value="1" dot>
  <w-icon />
</w-badge>
<w-badge :value="1" dot>
  <a href="#">Link something</a>
</w-badge>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Badge, {
        class: 'badge',
        props: {
          value: 1,
          dot: true,
        },
      }, [
        h('a', {
          class: 'badge-link',
          attrs: {
            href: '#',
          },
        }),
      ]),
      h(Badge, {
        class: 'badge',
        props: {
          value: 1,
          dot: true,
        },
      }, [
        h(Icon),
      ]),
      h(Badge, {
        class: 'badge',
        props: {
          value: 1,
          dot: true,
        },
      }, [
        h('a', {
          class: 'link',
          attrs: {
            href: '#',
          },
        }, 'Link something'),
      ]),
    ],
  ),
};

export default base;
