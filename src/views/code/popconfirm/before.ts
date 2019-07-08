import Popconfirm from '@/components/popconfirm/Popconfirm.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '确定加载中',
  desc: '设置 <code>loading</code> 即可。',
  code: `<w-popconfirm :loading="true" v-modal="status">
  <span>点击我。</span>
  <div slot="content">
    <a href="https://github.com/fe6/water" target="_blank">水滴</a>
    官网
  </div>
</w-popconfirm>`,
  render: (h: Function, context: any) => {
    const { value, loading, beforeHandle } = context.props.data;
    return h(
      'section',
      {
        class: 'demo-demo',
      },
      [
        h(Popconfirm, {
          props: {
            value,
            loading,
            before: beforeHandle,
            change: (val: boolean) => {
              context.props.changeHandle({
                attr: 'beforeValue',
                value: val,
              });
            },
            ok: (val: boolean) => {
              context.props.changeHandle({
                attr: 'beforeValue',
                value: !val,
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
            '官网',
          ]),
        ]),
      ],
    );
  },
};

export default base;
