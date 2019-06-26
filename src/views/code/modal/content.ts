import Button from '@/components/button/Button.vue';
import Modal from '@/components/modal/Modal.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '只有内容',
  desc: '有些时候的对话框可全定制。',
  code: `<w-modal :closable="false" :okable="false" :cancelable="false" v-modal="contentStatus">
  <div>Some contents...</div>
  <div>Some contents...</div>
  <div>Some contents...</div>
  <w-button @click="contentStatus = false">我要关上！</w-button>
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
                attr: 'contentStatus',
                status: true,
              });
            },
          },
        }, '点击'),
        h(Modal, {
          props: {
            value,
            okable: false,
            closable: false,
            cancelable: false,
          },
          on: {
            change: (status: boolean) => {
              context.props.changeHandle({
                attr: 'contentStatus',
                status,
              });
            },
          },
        }, [
          h('div', 'Some contents...'),
          h('div', 'Some contents...'),
          h('div', 'Some contents...'),
          h(Button, {
            on: {
              click: () => {
                context.props.changeHandle({
                  attr: 'contentStatus',
                  status: false,
                });
              },
            },
          }, '我要关上！'),
        ]),
      ],
    );
  },
};

export default base;
