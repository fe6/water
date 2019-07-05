import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/cascader/base';

let lastDiy: string[] = [];
let lastVNode: string[] = [];

const base: ApiEntity = {
  title: '自定义已选项',
  desc: '添加 <code>displayRender</code> 属性即可。',
  code: codeCommon({ attr: 'displayRender="() => {}"' }),
  render: (createElement: Function, context: any) => renderCommon(createElement, context, {
    attr: 'renderValue',
    props: {
      displayRender(h: Function, {
        chooseValue,
        chooseAllItem,
      }: any) {
        if (lastDiy.toString() !== chooseValue.toString()) {
          lastDiy = chooseValue.slice();
          lastVNode = h('div', {
            style: {
              overflow: 'hidden',
              'text-overflow': 'ellipsis',
            },
          }, chooseValue.map((chooseValueItem: any, chooseValueIndex: number) => {
            const { code } = chooseAllItem[chooseAllItem.length - 1];
            if (chooseValueIndex === chooseValue.length - 1 && code) {
              return h('span', [`${chooseValueIndex > 0 ? ' / ' : ''}${chooseValueItem}(`, h('span', {
                style: {
                  color: 'red',
                },
              }, code), ')']);
            }
            return h('span', `${chooseValueIndex > 0 ? ' / ' : ''}${chooseValueItem}`);
          }));
          return lastVNode;
        }
        return lastVNode;
      },
    },
  }),
};

export default base;
