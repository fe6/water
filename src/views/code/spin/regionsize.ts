import Spin from '@/components/spin/Spin.vue';
import Switch from '@/components/switch/Switch.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '区域大小',
  desc: '设置 <code>size</code> 即可。',
  code: `<w-spin size="small" tip="拼命的跑啊跑">
  <div>
    <h1>这只是一个标题</h1>
    <p>这只是一段文案。</p>
  </div>
</w-spin>
<w-spin tip="拼命的跑啊跑">
  <div>
    <h1>这只是一个标题</h1>
    <p>这只是一段文案。</p>
  </div>
</w-spin>
<w-spin size="large" tip="拼命的跑啊跑">
  <div>
    <h1>这只是一个标题</h1>
    <p>这只是一段文案。</p>
  </div>
</w-spin>`,
  render: (h: Function, context: any) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Spin, {
        props: {
          value: context.props.data.value,
          size: 'small',
          tip: '拼命的跑啊跑',
        },
      }, [
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
      h('br'),
      h(Spin, {
        props: {
          value: context.props.data.value,
          tip: '拼命的跑啊跑',
        },
      }, [
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
      h('br'),
      h(Spin, {
        props: {
          value: context.props.data.value,
          size: 'large',
          tip: '拼命的跑啊跑',
        },
      }, [
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
      h('br'),
      h('div', {
        style: {
          display: 'flex',
          'align-items': 'center',
        },
      }, [
        '设置加载状态：',
        h(Switch, {
          props: {
            value: context.props.data.value,
            change: context.props.changeHandle,
          },
          style: {
            marginLeft: '8px',
          },
        }),
      ]),
    ],
  ),
};

export default base;
