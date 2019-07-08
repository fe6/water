import Popconfirm from '@/components/popconfirm/Popconfirm.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: `<w-popconfirm>
  <span>点击我。</span>
  <div slot="content">
    <a href="https://github.com/fe6/water" target="_blank">水滴</a>
    官网，大家可以去看看，提提建议。
  </div>
</w-popconfirm>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Popconfirm, {
        props: {
          title: '文字提示',
        },
      }, [
        h('span', '点击我。'),
        h('div', {
          slot: 'content',
        },
        [
          h('a', {
            class: 'link',
            attrs: {
              href: 'https://github.com/fe6/water',
              target: '_blank',
            },
          }, '水滴'),
          '官网，大家可以去看看，提提建议。',
        ]),
      ]),
    ],
  ),
};

export default base;
