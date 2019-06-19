import Empty from '@/components/empty/Empty.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import getTagName from '@/views/common/getTagName';

const base: ApiEntity = {
  title: '基本使用',
  desc: '基本使用。',
  code: `<${getTagName(Empty.name)} />`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Empty, {
        props: {
        },
      }),
    ],
  ),
};

export default base;
