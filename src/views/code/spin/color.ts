import Spin from '@/components/spin/Spin.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '定义颜色',
  desc: '设置 <code>color</code> 即可。',
  code: '<w-spin color="#1996f9" />',
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Spin, {
        props: {
          color: '#1996f9',
        },
      }),
    ],
  ),
};

export default base;
