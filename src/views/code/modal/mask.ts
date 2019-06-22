import Button from '@/components/button/Button.vue';
import Modal from '@/components/modal/Modal.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '没有遮罩',
  desc: '让 <code>mask</code> 为 false 即可。',
  code: `<w-modal :mask="false" v-modal="maskStatus" title="没有遮罩的对话框">
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
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
                attr: 'maskStatus',
                status: true,
              });
            },
          },
        }, '点击'),
        h(Modal, {
          props: {
            value,
            title: '没有遮罩的对话框',
            mask: false,
          },
          on: {
            change: (status: boolean) => {
              context.props.change({
                attr: 'maskStatus',
                status,
              });
            },
          },
        }, [
          h('p', 'Some contents...'),
          h('p', 'Some contents...'),
          h('p', 'Some contents...'),
        ]),
      ],
    );
  },
};

export default base;
