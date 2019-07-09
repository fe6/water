import Popover from '@/components/popover/Popover.vue';
import Button from '@/components/button/Button.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const title = (h: Function) => h('a', {
  class: 'link',
  attrs: {
    href: 'https://github.com/fe6/water',
  },
  slot: 'title',
}, '水滴');

const content = (h: Function) => h('div', {
  slot: 'content',
}, [
  h('div', '这是内容。'),
  h('div', '这是内容。'),
]);

const base: ApiEntity = {
  title: '位置',
  desc: '设置 <code>placement</code> 即可。',
  code: `<w-popover placement="left">
  <span>left</span>
  <w-link slot="title" href="https://github.com/fe6/water">水滴</w-link>
  <div slot="content">
    <div>这是内容。</div>
    <div>这是内容。</div>
  </div>
</w-popover>`,
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h('div', {
        style: {
          width: '280px',
          'margin-left': '80px',
          clear: 'both',
          'white-space': 'nowrap',
          height: '32px',
          display: 'flex',
          'justify-content': 'space-around',
        },
      }, [
        h(Popover, {
          props: {
            content: '文字提示',
            placement: 'topLeft',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
              'margin-right': '16px',
            },
          }, 'TL'),
          title(h),
          content(h),
        ]),
        h(Popover, {
          props: {
            content: '文字提示',
            placement: 'top',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
              'margin-right': '16px',
            },
          }, 'Top'),
          title(h),
          content(h),
        ]),
        h(Popover, {
          props: {
            content: '文字提示',
            placement: 'topRight',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'TR'),
          title(h),
          content(h),
        ]),
      ]),

      h('div', {
        style: {
          width: '80px',
          float: 'left',
          height: '132px',
          display: 'flex',
          'flex-flow': 'column',
          'justify-content': 'space-around',
        },
      }, [
        h(Popover, {
          props: {
            content: '文字提示',
            placement: 'leftTop',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'LT'),
          title(h),
          content(h),
        ]),
        h(Popover, {
          props: {
            content: '文字提示',
            placement: 'left',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'Left'),
          title(h),
          content(h),
        ]),
        h(Popover, {
          props: {
            content: '文字提示',
            placement: 'leftBottom',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'LB'),
          title(h),
          content(h),
        ]),
      ]),

      h('div', {
        style: {
          width: '80px',
          'margin-left': '360px',
          height: '132px',
          display: 'flex',
          'flex-flow': 'column',
          'justify-content': 'space-around',
        },
      }, [
        h(Popover, {
          props: {
            content: '文字提示',
            placement: 'rightTop',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'RT'),
          title(h),
          content(h),
        ]),
        h(Popover, {
          props: {
            content: '文字提示',
            placement: 'right',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'Right'),
          title(h),
          content(h),
        ]),
        h(Popover, {
          props: {
            content: '文字提示',
            placement: 'rightBottom',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'RB'),
          title(h),
          content(h),
        ]),
      ]),

      h('div', {
        style: {
          width: '280px',
          'margin-left': '80px',
          clear: 'both',
          'white-space': 'nowrap',
          height: '32px',
          display: 'flex',
          'justify-content': 'space-around',
        },
      }, [
        h(Popover, {
          props: {
            content: '文字提示',
            placement: 'bottomLeft',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'BL'),
          title(h),
          content(h),
        ]),
        h(Popover, {
          props: {
            content: '文字提示',
            placement: 'bottom',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'Bottom'),
          title(h),
          content(h),
        ]),
        h(Popover, {
          props: {
            content: '文字提示',
            placement: 'bottomRight',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'BR'),
          title(h),
          content(h),
        ]),
      ]),
    ],
  ),
};

export default base;
