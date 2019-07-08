import Popconfirm from '@/components/popconfirm/Popconfirm.vue';
import Button from '@/components/button/Button.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '受控',
  desc: '设置 <code>v-modal</code> 即可。',
  code: `<w-popconfirm v-modal="status">
  <span>点击我。</span>
  <div slot="content">
    <a href="https://github.com/fe6/water" target="_blank">水滴</a>
    官网，大家可以去看看，提提建议。
  </div>
</w-popconfirm>`,
  render: (h: Function, context: any) => {
    const { value } = context.props.data;
    return h(
      'section',
      {
        class: 'demo-demo',
      },
      [
        h(Popconfirm, {
          props: {
            value,
            change: (val: boolean) => {
              context.props.changeHandle({
                attr: 'modalValue',
                value: val,
              });
            },
          },
        }, [
          h('span', '点击我。'),
          h('div', {
            slot: 'content',
          }, [
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
        h('br'),
        h('br'),
        h(Button, {
          props: {
            stop: true,
            click: ({ ev }: any) => {
              context.props.changeHandle({
                attr: 'modalValue',
                value: !value,
              });
              ev.stopPropagation();
            },
          },
        }, '点击改变 Popconfirm 显示状态'),
      ],
    );
  },
};

export default base;
