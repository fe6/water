import Tooltip from '@/components/tooltip/Tooltip.vue';
import Button from '@/components/button/Button.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '受控',
  desc: '设置 <code>v-modal</code> 即可。',
  code: `<w-tooltip title="文字提示" v-modal="status">
  <span>鼠标移入时将显示 Tooltip 。</span>
</w-tooltip>`,
  render: (h: Function, context: any) => {
    const { value } = context.props.data;
    return h(
      'section',
      {
        class: 'demo-demo',
      },
      [
        h(Tooltip, {
          props: {
            value,
            title: '文字提示',
            change: (val: boolean) => {
              context.props.changeHandle({
                attr: 'modalValue',
                value: val,
              });
            },
          },
        }, [
          h('span', '鼠标移入时将显示 Tooltip 。'),
        ]),
        h('br'),
        h('br'),
        h(Button, {
          props: {
            click: () => {
              context.props.changeHandle({
                attr: 'modalValue',
                value: !value,
              });
            },
          },
        }, '点击改变 Tooltip 显示状态'),
      ],
    );
  },
};

export default base;
