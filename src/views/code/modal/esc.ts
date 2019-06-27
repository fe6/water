import Button from '@/components/button/Button.vue';
import Modal from '@/components/modal/Modal.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: 'esc 快捷键',
  desc: '添加属性 <code>esc</code> 即可。',
  code: `<w-modal :esc="true" v-modal="escStatus" title="ESC Modal">
  <div>Some contents...</div>
  <div>Some contents...</div>
  <div>Some contents...</div>
</w-modal>`,
  render: (
    h: Function,
    context: any,
  ) => {
    const { value } = context.props.data;
    return h(
      'section',
      {
        class: 'demo-demo',
      },
      [
        h(Button, {
          props: {
            click: () => {
              context.props.changeHandle({
                attr: 'escStatus',
                status: true,
              });
            },
          },
        }, '点击'),
        h(Modal, {
          props: {
            esc: true,
            value,
            title: 'ESC Modal',
          },
          on: {
            change: (status: boolean) => {
              context.props.changeHandle({
                attr: 'escStatus',
                status,
              });
            },
          },
        }, [
          h('div', 'Some contents...'),
          h('div', 'Some contents...'),
          h('div', 'Some contents...'),
        ]),
      ],
    );
  },
};

export default base;
