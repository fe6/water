import Row from '@/components/grid/Row.vue';
import Col from '@/components/grid/Col.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '从堆叠到水平排列。\n使用单一的一组 <code>Row</code> 和 <code>Col</code> 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。',
  code: `<w-row>
  <w-col :span="12">col-12</w-col>
  <w-col :span="12">col-12</w-col>
</w-row>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Row, {
        props: {
          className: 'demo-grid-row',
        },
      }, [
        h(Col, {
          props: {
            span: 12,
            className: ['demo-grid-col', 'demo-grid-text'],
          },
        }, 'col-12'),
        h(Col, {
          props: {
            span: 12,
            className: ['demo-grid-col', 'demo-grid-text'],
          },
        }, 'col-12'),
      ]),
    ],
  ),
};

export default base;
