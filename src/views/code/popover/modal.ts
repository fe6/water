import Popover from '@/components/popover/Popover.vue';
import Link from '@/components/link/Link.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '受控',
  desc: '设置 <code>v-modal</code> 即可。',
  code: `<w-popover v-modal="status">
  <span>点我 。</span>
  <w-link slot="title" href="https://github.com/fe6/water">水滴</w-link>
  <div slot="content">
    <div>这是内容。</div>
    <div>这是内容。</div>
    <w-link @click.native="status = false">关闭 Popover ！</w-link>
  </div>
</w-popover>`,
  render: (h: Function, context: any) => {
    const { value } = context.props.data;
    return h(
      'section',
      {
        class: 'demo-demo',
      },
      [
        h(Popover, {
          props: {
            value,
            trigger: 'click',
            change: (val: boolean) => {
              context.props.changeHandle({
                attr: 'modalValue',
                value: val,
              });
            },
          },
        }, [
          h('span', '点我 。'),
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
            h(Link, {
              nativeOn: {
                click: () => {
                  context.props.changeHandle({
                    attr: 'modalValue',
                    value: !value,
                  });
                },
              },
            }, '关闭 Popover ！'),
          ]),
        ]),
      ],
    );
  },
};

export default base;
