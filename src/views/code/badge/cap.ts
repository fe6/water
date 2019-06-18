import Badge from '@/components/badge/Badge.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import getTagName from '@/views/common/getTagName';

const base: ApiEntity = {
  title: '封顶数字',
  desc: '超过 <code>overflowCount</code> 的会显示为 <code>overflowCount+</code>，默认的 <code>overflowCount</code> 为 99。',
  code: `<${getTagName(Badge.name)} class="badge" :value="99" />\n<${getTagName(Badge.name)} class="badge" :value="111" />\n<${getTagName(Badge.name)} class="badge" :value="20" :overflowCount="10" />\n<${getTagName(Badge.name)} class="badge" :value="100111" :overflowCount="999" />`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Badge, {
        class: 'badge',
        props: {
          value: 99,
        },
      }),
      h(Badge, {
        class: 'badge',
        props: {
          value: 111,
        },
      }),
      h(Badge, {
        class: 'badge',
        props: {
          value: 20,
          overflowCount: 10,
        },
      }),
      h(Badge, {
        class: 'badge',
        props: {
          value: 100111,
          overflowCount: 999,
        },
      }),
    ],
  ),
};

export default base;
