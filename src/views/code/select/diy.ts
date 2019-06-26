import { ApiEntity } from '@/views/entity/demoentity';
import {
  codeCommon,
  renderCommon,
} from '@/views/code/select/base';

const base: ApiEntity = {
  title: '扩展菜单',
  desc: '添加 <code>slot="diy"</code> 属性即可。',
  code: codeCommon({ attr: ':value="更多" mode="multiple"', content: '\n  <div slot="diy" style="cursor: pointer; padding: 5px 12px; line-height: 22px; border-top: 1px solid #ccc; color: #1996f9; font-size: 12px;">添加元素</div>\n' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    attr: 'diyValue',
    datas: context.props.data.options,
    render: (createElement: Function) => createElement('div', {
      style: {
        cursor: 'pointer',
        padding: '5px 12px',
        'line-height': '22px',
        'border-top': '1px solid #ccc',
        color: '#1996f9',
        'font-size': '12px',
      },
      slot: 'diy',
      on: {
        click: (ev: MouseEvent) => {
          const { options } = context.props.data;
          options.push({
            value: `new${options.length}`,
            label: `新建${options.length}`,
            loading: false,
          });
          ev.stopPropagation();
        },
      },
    }, '添加元素'),
  }),
};

export default base;
