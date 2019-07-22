import Tag from '@/components/tag/Tag.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '多彩标签',
  desc: '添加 <code>color</code> 即可设置颜色，添加 <code>colorType</code> 即可设置渲染类型。',
  code: `<w-tag color="#1996f9">标签</w-tag>
<w-tag color="#1996f9" colorType="section">标签</w-tag>`,
  render: (h: Function, context: any) => {
    const { allColors, sectionColors } = context.props.data;
    return h(
      'section',
      {
        class: 'demo-demo',
      },
      [
        h('h4', 'All:'),
        h('div', allColors.map((aColor: any, aIndex: number) => h(Tag, {
          props: {
            closable: true,
            color: aColor.color,
            loading: aColor.loading,
            close: () => {
              const { color } = allColors[aIndex];
              allColors.splice(aIndex, 1, {
                color,
                loading: true,
              });
              setTimeout(() => {
                allColors.splice(aIndex, 1);
              }, 1000);
            },
          },
        }, '标签'))),
        h('h4', 'Section:'),
        h('div', sectionColors.map((sColor: any, sIndex: number) => h(Tag, {
          props: {
            colorType: 'section',
            closable: true,
            color: sColor.color,
            loading: sColor.loading,
            close: () => {
              const { color } = sectionColors[sIndex];
              sectionColors.splice(sIndex, 1, {
                color,
                loading: true,
              });
              setTimeout(() => {
                sectionColors.splice(sIndex, 1);
              }, 1000);
            },
          },
        }, '标签'))),
      ],
    );
  },
};

export default base;
