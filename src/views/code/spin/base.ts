import Spin from '@/components/spin/Spin.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '一个简单的 <code>loading</code> 状态。',
  code: '<w-spin />',
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Spin),
    ],
  ),
};

export default base;
