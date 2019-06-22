import Button from '@/components/button/Button.vue';
import Modal from '@/components/modal/Modal.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const href = 'https://github.com/fe6/water';

const base: ApiEntity = {
  title: '自定义',
  desc: '通过 <code>slot="title"</code> 自定义标题, <code>slot="footer"</code> 自定义页脚。',
  code: `<w-modal v-modal="diyStatus" title="Basic Modal">
  <div>Some contents...</div>
  <w-button @click="diyTextStatus = !diyTextStatus">我想改下面的文案</w-button>
  <div>{{ diyTextStatus ? '听说今年国安要夺冠' : '没错，国安就是冠军' }}</div>
  <div slot="title">
    <a href="${href}">我想去看海!</a>
  </div>
  <a href="${href}">我想去看海!</a>
  <div slot="footer">
    <w-button type="danger" @click="diyStatus = false">我要关上</w-button>
  </div>
</w-modal>`,
  render: (
    h: Function,
    context: any,
  ) => {
    const { value, textStatus } = context.props.data;
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
                attr: 'diyStatus',
                status: true,
              });
            },
          },
        }, '点击'),
        h(Modal, {
          props: {
            value,
          },
          on: {
            change: (status: boolean) => {
              context.props.change({
                attr: 'diyStatus',
                status,
              });
            },
          },
        }, [
          h('div', 'Some contents...'),
          h('div', {
            slot: 'title',
          }, [
            h('a', {
              class: 'link',
              attrs: {
                href,
                target: '_blank',
              },
            }, '我想去看海！'),
          ]),
          h(Button, {
            on: {
              click: () => {
                context.props.change({
                  attr: 'diyTextStatus',
                  status: !textStatus,
                });
              },
            },
          }, '我要改变下面的文案'),
          h('div', textStatus ? '听说今年国安要夺冠' : '没错，国安就是冠军'),
          h('a', {
            class: 'link',
            attrs: {
              href,
              target: '_blank',
            },
          }, '我想去看海！'),
          h('div', {
            slot: 'footer',
          }, [
            h(Button, {
              props: {
                type: 'danger',
              },
              on: {
                click: () => {
                  context.props.change({
                    attr: 'diyStatus',
                    status: false,
                  });
                },
              },
            }, '我要关上'),
          ]),
        ]),
      ],
    );
  },
};

export default base;
