import Row from '@/components/grid/Row.vue';
import Col from '@/components/grid/Col.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import getTagName from '@/views/common/getTagName';

const base: ApiEntity = {
  title: '左右偏移',
  desc: '使用 <code>offset</code> 可以将列向右侧偏。例如，<code>:offset="4"</code> 将元素向右侧偏移了 4 个列（column）的宽度。',
  code: `<${getTagName(Row.name)}>
  <${getTagName(Col.name)} :span="18" :push="6">
    <div>col-18 col-push-6</div>
  </${getTagName(Col.name)}>
  <${getTagName(Col.name)} :span="6" :pull="18">
    <div>col-6 col-pull-18</div>
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
            span: 18,
            push: 6,
          },
        }, [
          h('div', {
            class: 'demo-grid-box',
          }, 'col-18 col-push-6'),
        ]),
        h(Col, {
          props: {
            span: 6,
            pull: 18,
          },
        }, [
          h('div', {
            class: 'demo-grid-box',
          }, 'col-6 col-pull-18'),
        ]),
      ]),
    ],
  ),
};

export default base;
