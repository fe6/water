import Popover from '@/components/popover/Popover.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: `<w-popover>
  <span>鼠标移入时将显示 Popover 。</span>
  <w-link slot="title" href="https://github.com/fe6/water">水滴</w-link>
  <div slot="content">
    <div>这是内容。</div>
    <div>这是内容。</div>
  </div>
</w-popover>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Popover, [
        h('span', '鼠标移入时将显示 Popover 。'),
        h('a', {
          class: 'link',
          attrs: {
            href: 'https://github.com/fe6/water',
          },
          slot: 'title',
        }, '水滴'),
        h('div', {
          slot: 'content',
        }, [
          h('div', '这是内容。'),
          h('div', '这是内容。'),
        ]),
      ]),
    ],
  ),
};

export default base;
