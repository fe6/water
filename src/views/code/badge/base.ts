import Badge from '@/components/badge/Badge.vue';
import Icon from '@/components/icon/Icon.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import getTagName from '@/views/common/getTagName';

const base: ApiEntity = {
  title: '基本使用',
  desc: '简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 <code>showZero</code> 修改为显示。 <code>slot="count"</code> 可自定义右上角的内容。',
  code: `<${getTagName(Badge.name)} :value="5">\n  <a href="#" />\n</${getTagName(Badge.name)}>\n<${getTagName(Badge.name)} showZero>\n  <a href="#" />\n</${getTagName(Badge.name)}>\n<${getTagName(Badge.name)}>\n  <a href="#" />\n  <${getTagName(Icon.name)} slot="count" />\n</${getTagName(Badge.name)}>`,
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
          value: 0,
          showZero: true,
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
      }, [
        h('a', {
          class: 'badge-link',
          attrs: {
            href: '#',
          },
        }),
        h(Icon, {
          slot: 'count',
        }),
      ]),
    ],
  ),
};

export default base;
