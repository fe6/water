import Row from '@/components/grid/Row.vue';
import Col from '@/components/grid/Col.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import getTagName from '@/views/common/getTagName';

const url = 'http://getbootstrap.com/css/#grid-media-queries';

const base: ApiEntity = {
  title: '响应式布局',
  desc: `参照 Bootstrap 的 <a href="${url}" class="link">响应式设计</a>，预设六个响应尺寸： <code>xs</code> <code>sm</code> <code>md</code> <code>lg</code> <code>xl</code> <code>xxl</code> 。`,
  code: `<${getTagName(Row.name)}>
  <${getTagName(Col.name)} :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
    <div>col</div>
  </${getTagName(Col.name)}>
  <${getTagName(Col.name)}:xs="20" :sm="16" :md="12" :lg="8" :xl="4">
    <div>col</div>
  </${getTagName(Col.name)}>
  <${getTagName(Col.name)} :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
    <div>col</div>
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
            xs: 2,
            sm: 4,
            md: 6,
            lg: 8,
            xl: 10,
          },
        }, [
          h('div', {
            class: 'demo-grid-box',
          }, 'col'),
        ]),
        h(Col, {
          props: {
            xs: 20,
            sm: 16,
            md: 12,
            lg: 8,
            xl: 4,
          },
        }, [
          h('div', {
            class: 'demo-grid-box2',
          }, 'col'),
        ]),
        h(Col, {
          props: {
            xs: 2,
            sm: 4,
            md: 6,
            lg: 8,
            xl: 10,
          },
        }, [
          h('div', {
            class: 'demo-grid-box',
          }, 'col'),
        ]),
      ]),
    ],
  ),
};

export default base;
