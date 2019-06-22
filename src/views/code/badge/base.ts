import Badge from '@/components/badge/Badge.vue';
import Icon from '@/components/icon/Icon.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 <code>showZero</code> 修改为显示。 <code>slot="count"</code> 可自定义右上角的内容。',
  code: `<w-badge :value="5">
  <a href="#" />
</w-badge>
<w-badge showZero>
  <a href="#" />
</w-badge>
<w-badge>
  <a href="#" />
  <w-icon slot="count" />
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
