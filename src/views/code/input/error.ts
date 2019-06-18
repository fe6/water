import Input from '@/components/input/Input.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import getTagName from '@/views/common/getTagName';

const base: ApiEntity = {
  title: '内容验证错误的状态',
  desc: '将属性 <code>error</code> 设置为方法并返回为 true 即可。',
  code: `<${getTagName(Input.name)} placeholder="内容错误的状态" :error="(ev: Event, value: string) => !value" />`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Input, {
        props: {
          placeholder: '内容不能为空',
          error: ({ value }: any) => !value,
        },
      }),
    ],
  ),
};

export default base;
