import Tag from '@/components/tag/Tag.vue';
import CheckTag from '@/components/tag/CheckTag.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '加载中',
  desc: '设置 <code>loading</code> 属性即可',
  code: `<w-tag loading>标签</w-tag>
<w-tag loading color="#1996f9">标签</w-tag>
<w-tag loading color="#1996f9" colorType="section">标签</w-tag>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Tag, {
        props: {
          loading: true,
        },
      }, '标签'),
      h(Tag, {
        props: {
          loading: true,
          color: '#1996f9',
        },
      }, '标签'),
      h(Tag, {
        props: {
          loading: true,
          colorType: 'section',
          color: '#1996f9',
        },
      }, '标签'),
      h(CheckTag, {
        props: {
          loading: true,
        },
      }, '标签'),
    ],
  ),
};

export default base;
