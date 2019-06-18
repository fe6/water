import Badge from '@/components/badge/Badge.vue';
import Icon from '@/components/icon/Icon.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import getTagName from '@/views/common/getTagName';

const base: ApiEntity = {
  title: '小红点',
  desc: '没有具体的数字。',
  code: `<${getTagName(Badge.name)} :value="1" dot>\n  <a href="#" />\n</${getTagName(Badge.name)}>\n<${getTagName(Badge.name)} :value="1" dot>\n  <${getTagName(Icon.name)} />\n</${getTagName(Badge.name)}>\n<${getTagName(Badge.name)} :value="1" dot>\n  <a href="#" class="link">Link something</a>\n</${getTagName(Badge.name)}>`,
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
