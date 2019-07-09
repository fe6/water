import Tooltip from '@/components/tooltip/Tooltip.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: `<w-tooltip content="文字提示">
  <span>鼠标移入时将显示 Tooltip 。</span>
</w-tooltip>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Tooltip, {
        props: {
          content: '文字提示',
        },
      }, [
        h('span', '鼠标移入时将显示 Tooltip 。'),
      ]),
    ],
  ),
};

export default base;
