import Input from '@/components/input/Input.vue';
import Icon from '@/components/icon/Icon.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '前缀和后缀',
  desc: '在输入框中添加前缀 ( <code>slot="prefix"</code> ) 或后缀 ( <code>slot="suffix"</code> ) 图标。',
  code: `<w-input placeholder="前缀和后缀">
  <w-icon slot="prefix" />
  <w-icon slot="suffix" />
</w-input>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Input, {
        props: {
          placeholder: '前缀和后缀',
        },
      }, [
        h(Icon, {
          slot: 'prefix',
        }),
        h(Icon, {
          slot: 'suffix',
        }),
      ]),
    ],
  ),
};

export default base;
