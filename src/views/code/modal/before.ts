import Button from '@/components/button/Button.vue';
import Modal from '@/components/modal/Modal.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '确定之前',
  desc: '通过 <code>before</code> 即可对确定之前进行操作，返回 <code>Promise</code> 。添加 <code>loading</code> 属性即可控制对话框中确定键的 <code>loading</code> 状态。',
  code: `<w-modal :loading="beforeLoading" :before="()=> new Promise((resolve) => {resolve();})" v-modal="beforeStatus" title="确定之前">
  姓名<input aria-label="姓名" />
  <br />
  <br />
  密码<input type="passworld" aria-label="密码" />
</w-modal>`,
  render: (
    h: Function,
    context: any,
  ) => {
    const { value, loading, before } = context.props.data;
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
                attr: 'beforeStatus',
                status: true,
              });
            },
          },
        }, '点击'),
        h(Modal, {
          props: {
            value,
            loading,
            before,
            title: '确定之前',
          },
          on: {
            change: (status: boolean) => {
              context.props.change({
                attr: 'beforeStatus',
                status,
              });
            },
          },
        }, [
          '姓名',
          h('input', {
            attrs: {
              'aria-label': '姓名',
            },
          }),
          h('br'),
          h('br'),
          '密码',
          h('input', {
            attrs: {
              type: 'passworld',
              'aria-label': '密码',
            },
          }),
        ]),
      ],
    );
  },
};

export default base;
