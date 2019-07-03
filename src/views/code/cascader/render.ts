import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/cascader/base';

let lastDiy: string[] = [];
let lastVNode: string[] = [];

const base: ApiEntity = {
  title: '自定义已选项',
  desc: '添加 <code>displayRender</code> 属性即可。',
  code: codeCommon({ attr: 'displayRender="() => {}"' }),
  render: (createElement: Function, context: any) => renderCommon(createElement, context, {
    attr: 'changeonselectValue',
    props: {
      displayRender(h: Function, { data, currentOption, result }: any) {
        const { item } = currentOption;
        if (lastDiy.toString() !== result.toString()) {
          lastDiy = result.slice();
          lastVNode = h('div', {
            style: {
              overflow: 'hidden',
              'text-overflow': 'ellipsis',
            },
          }, data.map((dataItem: any, dataIndex: number) => {
            if (dataIndex === data.length - 1 && item.code) {
              return h('span', [`${dataIndex > 0 ? ' / ' : ''}${dataItem}(`, h('span', {
                style: {
                  color: 'red',
                },
              }, item.code), ')']);
            }
            return h('span', `${dataIndex > 0 ? ' / ' : ''}${dataItem}`);
          }));
          return lastVNode;
        }
        return lastVNode;
      },
    },
  }),
};

export default base;
