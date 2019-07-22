import Tag from '@/components/tag/Tag.vue';
import CheckTag from '@/components/tag/CheckTag.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: `<w-tag>
  <span>鼠标移入时将显示 Tag 。</span>
</w-tag>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Tag, '标签'),
      h(Tag, {
        props: {
          closable: true,
        },
      }, '标签'),
      h(Tag, {
        props: {
          disabled: true,
        },
      }, '标签'),
      h(Tag, {
        props: {
          disabled: true,
          closable: true,
        },
      }, '标签'),
      h('br'),
      h('br'),
      h(CheckTag, {
      }, '标签'),
      h(CheckTag, {
        props: {
          value: true,
        },
      }, '标签'),
      h(CheckTag, {
        props: {
          disabled: true,
        },
      }, '标签'),
      h(CheckTag, {
        props: {
          value: true,
          disabled: true,
        },
      }, '标签'),
    ],
  ),
};

export default base;
