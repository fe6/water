import Row from '@/components/grid/Row.vue';
import Col from '@/components/grid/Col.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import getTagName from '@/views/common/getTagName';

const base: ApiEntity = {
  title: '左右偏移',
  desc: '使用 <code>offset</code> 可以将列向右侧偏。例如，<code>:offset="4"</code> 将元素向右侧偏移了 4 个列（column）的宽度。',
  code: `<${getTagName(Row.name)}>
  <${getTagName(Col.name)} :span="12">
    <div>col-12</div>
  </${getTagName(Col.name)}>
  <${getTagName(Col.name)} :span="12" :offset="8">
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
      }, [
        h(Col, {
          props: {
            span: 8,
          },
        }, [
          h('div', {
            class: 'demo-grid-box',
          }, 'col-8'),
        ]),
        h(Col, {
          props: {
            span: 8,
            offset: 8,
          },
        }, [
          h('div', {
            class: 'demo-grid-box',
          }, 'col-8'),
        ]),
      ]),
    ],
  ),
};

export default base;
