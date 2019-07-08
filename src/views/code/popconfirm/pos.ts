import Popconfirm from '@/components/popconfirm/Popconfirm.vue';
import Button from '@/components/button/Button.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const content = (h: Function) => [
  h('div', {
    slot: 'content',
  }, [
    h('a', {
      class: 'link',
      attrs: {
        href: 'https://github.com/fe6/water',
        target: '_blank',
      },
    }, '水滴'),
    '官网',
  ]),
];

const base: ApiEntity = {
  title: '位置',
  desc: '设置 <code>placement</code> 即可。',
  code: `<w-popconfirm placement="left">
  <span>left</span>
  <div slot="content">
    <a href="https://github.com/fe6/water" target="_blank">水滴</a>
    官网
  </div>
</w-popconfirm>`,
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
        h(Popconfirm, {
          props: {
            title: '文字提示',
            placement: 'topLeft',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
              'margin-right': '16px',
            },
          }, 'TL'),
          content(h),
        ]),
        h(Popconfirm, {
          props: {
            title: '文字提示',
            placement: 'top',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
              'margin-right': '16px',
            },
          }, 'Top'),
          content(h),
        ]),
        h(Popconfirm, {
          props: {
            title: '文字提示',
            placement: 'topRight',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'TR'),
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
        h(Popconfirm, {
          props: {
            title: '文字提示',
            placement: 'leftTop',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'LT'),
          content(h),
        ]),
        h(Popconfirm, {
          props: {
            title: '文字提示',
            placement: 'left',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'Left'),
          content(h),
        ]),
        h(Popconfirm, {
          props: {
            title: '文字提示',
            placement: 'leftBottom',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'LB'),
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
        h(Popconfirm, {
          props: {
            title: '文字提示',
            placement: 'rightTop',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'RT'),
          content(h),
        ]),
        h(Popconfirm, {
          props: {
            title: '文字提示',
            placement: 'right',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'Right'),
          content(h),
        ]),
        h(Popconfirm, {
          props: {
            title: '文字提示',
            placement: 'rightBottom',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'RB'),
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
        h(Popconfirm, {
          props: {
            title: '文字提示',
            placement: 'bottomLeft',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'BL'),
          content(h),
        ]),
        h(Popconfirm, {
          props: {
            title: '文字提示',
            placement: 'bottom',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'Bottom'),
          content(h),
        ]),
        h(Popconfirm, {
          props: {
            title: '文字提示',
            placement: 'bottomRight',
          },
        }, [
          h(Button, {
            style: {
              width: '80px',
            },
          }, 'BR'),
          content(h),
        ]),
      ]),
    ],
  ),
};

export default base;
