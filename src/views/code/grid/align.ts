import Row from '@/components/grid/Row.vue';
import Col from '@/components/grid/Col.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import getTagName from '@/views/common/getTagName';

const base: ApiEntity = {
  title: '上下对齐',
  desc: '使用 <code>align</code> 可以设置列的对齐方式。',
  code: `<${getTagName(Row.name)} align="middle">
  <${getTagName(Col.name)} :span="12">
    <div>col-12</div>
  </${getTagName(Col.name)}>
  <${getTagName(Col.name)} :span="12">
    <div>col-12</div>
  </${getTagName(Col.name)}>
</${getTagName(Row.name)}>`,
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
