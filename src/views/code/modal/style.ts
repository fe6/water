import Button from '@/components/button/Button.vue';
import Modal from '@/components/modal/Modal.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '改变样式',
  desc: '设置 <code>modalStyle</code> 即可。',
  code: `<w-modal :modalStyle="{width: '1000px', top: '20px', transform: 'translate(-50%, 0)'}" v-model="styleStatus" title="改变样式">
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
                attr: 'styleStatus',
                status: true,
              });
            },
          },
        }, '点击'),
        h(Modal, {
          props: {
            value,
            title: '改变样式',
            modalStyle: {
              width: '1000px',
              top: '20px',
              transform: 'translate(-50%, 0)',
            },
          },
          on: {
            change: (status: boolean) => {
              context.props.changeHandle({
                attr: 'styleStatus',
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
