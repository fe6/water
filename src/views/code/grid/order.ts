import Row from '@/components/grid/Row.vue';
import Col from '@/components/grid/Col.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '左右对齐',
  desc: '使用 <code>justify</code> 可以设置列的对齐方式。',
  code: `<${Row.name}>
  <${Col.name} :span="6" :order="4">
    <div>1 col-order-4</div>
  </${Col.name}>
  <${Col.name} :span="6" :order="3">
    <div>2 col-order-3</div>
  </${Col.name}>
  <${Col.name} :span="6" :order="2">
    <div>3 col-order-2</div>
  </${Col.name}>
  <${Col.name} :span="6" :order="1">
    <div>4 col-order-1</div>
  </${Col.name}>
</${Row.name}>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Row, [
        h(Col, {
          props: {
            span: 6,
            order: 4,
          },
        }, [
          h('div', {
            class: 'demo-grid-box',
          }, '1 col-order-4'),
        ]),
        h(Col, {
          props: {
            span: 6,
            order: 3,
          },
        }, [
          h('div', {
            class: 'demo-grid-box',
          }, '2 col-order-3'),
        ]),
        h(Col, {
          props: {
            span: 6,
            order: 2,
          },
        }, [
          h('div', {
            class: 'demo-grid-box',
          }, '3 col-order-2'),
        ]),
        h(Col, {
          props: {
            span: 6,
            order: 1,
          },
        }, [
          h('div', {
            class: 'demo-grid-box',
          }, '4 col-order-1'),
        ]),
      ]),
    ],
  ),
};

export default base;
