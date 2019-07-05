import Tooltip from '@/components/tooltip/Tooltip.vue';
import Button from '@/components/button/Button.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '位置',
  desc: '设置 <code>placement</code> 即可。',
  code: `<w-tooltip placement="left" title="文字提示">
  <span>left</span>
</w-tooltip>`,
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
        h(Tooltip, {
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
        ]),
        h(Tooltip, {
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
        ]),
        h(Tooltip, {
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
        h(Tooltip, {
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
        ]),
        h(Tooltip, {
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
        ]),
        h(Tooltip, {
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
        h(Tooltip, {
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
        ]),
        h(Tooltip, {
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
        ]),
        h(Tooltip, {
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
        h(Tooltip, {
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
        ]),
        h(Tooltip, {
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
        ]),
        h(Tooltip, {
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
        ]),
      ]),
    ],
  ),
};

export default base;
