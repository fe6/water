import Spin from '@/components/spin/Spin.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '区域加载',
  desc: '可以直接把内容内嵌到 <code>Spin</code> 中，将现有容器变为加载状态。',
  code: `<w-spin>
  <div>
    <h1>这只是一个标题</h1>
    <p>这只是一段文案。</p>
  </div>
</w-spin>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Spin, [
        h('div', {
          style: {
            background: '#e6f7ff',
            border: '1px solid #91d5ff',
            padding: '16px',
          },
        }, [
          h('h1', '这只是一个标题'),
          h('p', '这只是一段文案。'),
        ]),
      ]),
    ],
  ),
};

export default base;
