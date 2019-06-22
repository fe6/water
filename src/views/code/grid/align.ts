import Row from '@/components/grid/Row.vue';
import Col from '@/components/grid/Col.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '上下对齐',
  desc: '使用 <code>align</code> 可以设置列的对齐方式。',
  code: `<w-row align="middle">
  <w-col :span="12">
    <div>col-12</div>
  </w-col>
  <w-col :span="12">
    <div>col-12</div>
  </w-col>
</w-row>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Row, {
        props: {
          align: 'middle',
        },
      }, [
        h(Col, {
          props: {
            span: 12,
          },
        }, [
          h('div', {
            class: 'demo-grid-box',
          }, 'col-12'),
        ]),
        h(Col, {
          props: {
            span: 12,
          },
        }, [
          h('div', {
            class: 'demo-grid-box',
            style: {
              height: '100px',
              lineHeight: '100px',
            },
          }, 'col-12'),
        ]),
      ]),
    ],
  ),
};

export default base;
