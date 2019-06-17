import Badge from '@/components/badge/Badge.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '动态',
  desc: '展示动态变化的效果。',
  code: `<a href="#">\n  <${Badge.name} class="badge" :value="99" />\n</a>`,
  render: (h: Function, context: any) => {
    const { value, change } = context.props.data;
    return h(
      'section',
      {
        class: 'demo-demo',
      },
      [
        h(Badge, {
          class: 'badge',
          props: {
            value,
          },
        }, [
          h('a', {
            class: 'badge-link',
            attrs: {
              href: '#',
            },
          }),
        ]),
        h('br'),
        h('br'),
        h('button', {
          style: {
            marginRight: '8px',
          },
          on: {
            click() {
              change(1);
            },
          },
        }, '+'),
        h('button', {
          on: {
            click() {
              change(-1);
            },
          },
        }, '-'),
      ],
    );
  },
};

export default base;