import Tag from '@/components/tag/Tag.vue';
import CheckTag from '@/components/tag/CheckTag.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '三种大小',
  desc: '设置 <code>size</code> 属性即可',
  code: `<w-tag size="small">标签</w-tag>
<w-tag>标签</w-tag>
<w-tag size="large">标签</w-tag>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Tag, {
        props: {
          size: 'small',
        },
      }, '标签'),
      h(Tag, {
        props: {
          size: 'small',
          closable: true,
        },
      }, '标签'),
      h(CheckTag, {
        props: {
          size: 'small',
          value: true,
        },
      }, '标签'),
      h('br'),
      h('br'),
      h(Tag, '标签'),
      h(Tag, {
        props: {
          closable: true,
        },
      }, '标签'),
      h(CheckTag, {
        props: {
          value: true,
        },
      }, '标签'),
      h('br'),
      h('br'),
      h(Tag, {
        props: {
          size: 'large',
        },
      }, '标签'),
      h(Tag, {
        props: {
          size: 'large',
          closable: true,
        },
      }, '标签'),
      h(CheckTag, {
        props: {
          size: 'large',
          value: true,
        },
      }, '标签'),
    ],
  ),
};

export default base;
