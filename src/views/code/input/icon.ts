import Input from '@/components/input/Input.vue';
import Icon from '@/components/icon/Icon.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import getTagName from '@/views/common/getTagName';

const base: ApiEntity = {
  title: '前缀和后缀',
  desc: '在输入框中添加前缀 ( <code>slot="prefix"</code> ) 或后缀 ( <code>slot="suffix"</code> ) 图标。',
  code: `<${getTagName(Input.name)} placeholder="前缀和后缀">\n  <${Icon.name} slot="prefix" />\n  <${Icon.name} slot="suffix" />\n</${getTagName(Input.name)}>`,
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
