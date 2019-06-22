import Input from '@/components/input/Input.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '基本使用。',
  code: '<w-input placeholder="基本使用" />',
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Input, {
        props: {
          placeholder: '基本使用',
        },
      }),
    ],
  ),
};

export default base;
