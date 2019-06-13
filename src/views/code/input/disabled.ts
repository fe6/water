import Input from '@/components/input/Input.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '不可用状态',
  desc: '添加 <code>disabled</code> 属性即可让按钮处于不可用状态，同时按钮样式也会改变。',
  code: `<${Input.name} placeholder="不可用状态" disabled />`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Input, {
        props: {
          placeholder: '不可用状态',
          disabled: true,
        },
      }),
    ],
  ),
};

export default base;
