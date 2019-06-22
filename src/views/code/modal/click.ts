import Button from '@/components/button/Button.vue';
import Modal from '@/components/modal/Modal.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '点击遮罩关闭',
  desc: '添加属性 <code>maskClosable</code> 即可。',
  code: `<w-modal :maskClosable="true" v-modal="clickStatus" title="Mask Click Modal">
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
              context.props.change({
                attr: 'clickStatus',
                status: true,
              });
            },
          },
        }, '点击'),
        h(Modal, {
          props: {
            maskClosable: true,
            value,
            title: 'Mask Click Modal',
          },
          on: {
            change: (status: boolean) => {
              context.props.change({
                attr: 'clickStatus',
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
