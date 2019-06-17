import Badge from '@/components/badge/Badge.vue';
import Icon from '@/components/icon/Icon.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '小红点',
  desc: '没有具体的数字。',
  code: `<${Badge.name} :value="1" dot>\n  <a href="#" />\n</${Badge.name}>\n<${Badge.name} :value="1" dot>\n  <${Icon.name} />\n</${Badge.name}>\n<${Badge.name} :value="1" dot>\n  <a href="#" class="link">Link something</a>\n</${Badge.name}>`,
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
