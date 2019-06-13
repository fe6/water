import Row from '@/components/grid/Row.vue';
import Col from '@/components/grid/Col.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '左右对齐',
  desc: '使用 <code>justify</code> 可以设置列的对齐方式。',
  code: `<${Row.name} justify="end">
  <${Col.name} :span="4">
    <div>col-4</div>
  </${Col.name}>
  <${Col.name} :span="4">
    <div>col-4</div>
  </${Col.name}>
</${Row.name}>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Row, {
        props: {
          justify: 'end',
        },
      }, [
        h(Col, {
          props: {
            span: 4,
          },
        }, [
          h('div', {
            class: 'demo-grid-box',
          }, 'col-4'),
        ]),
        h(Col, {
          props: {
            span: 4,
          },
        }, [
          h('div', {
            class: 'demo-grid-box',
          }, 'col-4'),
        ]),
      ]),
    ],
  ),
};

export default base;
