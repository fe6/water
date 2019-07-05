import Tooltip from '@/components/tooltip/Tooltip.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '自定义样式',
  desc: '可通过 <code>arrowColor</code> ， <code>titleStyle</code> 配合调整样式。',
  code: `<w-tooltip
  :interval="16"
  trigger="click"
  arrowColor="rgba(255, 255, 0, 0.4)"
  :titleStyle="{
    'background-color': 'rgba(0, 255, 255, 0.4)',
    color: 'rgba(255, 0, 255, 0.2)',
    'box-shadow': '0 2px 8px rgba(0, 255, 255, 0.14)',
  }"
  title="文字提示"
>
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
          title: '文字提示',
          trigger: 'click',
          titleStyle: {
            'background-color': 'rgba(0, 255, 255, 0.4)',
            color: 'rgba(255, 0, 255, 0.2)',
            'box-shadow': '0 2px 8px rgba(0, 255, 255, 0.14)',
          },
          arrowColor: 'rgba(0, 255, 255, 0.4)',
        },
      }, [
        h('span', '点击显示 Tooltip 。'),
      ]),
    ],
  ),
};

export default base;
