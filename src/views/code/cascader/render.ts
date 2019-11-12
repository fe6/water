import { ApiEntity } from '@/views/entity/demoentity';
import { defaultDatas } from '@/views/code/cascader/base';

const base: ApiEntity = {
  title: '自定义已选项',
  desc: '添加 <code>displayRender</code> 属性即可。',
  code:
    '<w-cascader :displayRender="displayRender" :options="defaultDatas"></w-cascader>',
  js: `
    {
      data() {
        return {
          defaultDatas: ${JSON.stringify(defaultDatas)},
          renderValue: [],
          lastDiy: [],
          lastVNode: [],
        };
      },
      methods: {
        displayRender(h, {
          chooseValue,
          chooseAllItem,
        }) {
          if (this.lastDiy.toString() !== chooseValue.toString()) {
            this.lastDiy = chooseValue.slice();
            this.lastVNode = h('div', {
              style: {
                overflow: 'hidden',
                'text-overflow': 'ellipsis',
              },
            }, chooseValue.map((chooseValueItem, chooseValueIndex) => {
              const { code } = chooseAllItem[chooseAllItem.length - 1];
              if (chooseValueIndex === chooseValue.length - 1 && code) {
                const isGang = chooseValueIndex > 0 ? ' / ' : '';
                return h('span', [isGang + chooseValueItem + '(', h('span', {
                  style: {
                    color: 'red',
                  },
                }, code), ')']);
              }
              return h('span', isGang + chooseValueItem);
            }));
            return this.lastVNode;
          }
          return this.lastVNode;
        },
      },
    }
  `,
};

export default base;
