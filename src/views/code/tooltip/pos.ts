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
          width: '240px',
          'margin-left': '70px',
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
              width: '70px',
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
              width: '70px',
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
              width: '70px',
            },
          }, 'TR'),
        ]),
      ]),

      h('div', {
        style: {
          width: '70px',
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
              width: '70px',
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
              width: '70px',
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
              width: '70px',
            },
          }, 'LB'),
        ]),
      ]),

      h('div', {
        style: {
          width: '70px',
          'margin-left': '310px',
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
              width: '70px',
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
              width: '70px',
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
              width: '70px',
            },
          }, 'RB'),
        ]),
      ]),

      h('div', {
        style: {
          width: '240px',
          'margin-left': '70px',
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
              width: '70px',
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
              width: '70px',
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
              width: '70px',
            },
          }, 'BR'),
        ]),
      ]),
    ],
  ),
};

export default base;
