import { ApiEntity } from '@/views/entity/demoentity';
import { extendOptions } from '@/views/code/table/options/extend';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string =>
  '<w-table :col="extendCol" :options="extendOptions"></w-table>';

const extend: ApiEntity = {
  title: '可展开及嵌套子表格',
  desc: '当表格内容较多不能一次性完全展示时。展示每行数据更详细的信息。',
  code: codeCommon(),
  js: `{
  data() {
    const detailCol = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
    ];
    const self = this;
    return {
      extendStatus: 1,
      openIndex: 2,
      extendCol: [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
        render(createElement, { optIndex }) {
          return createElement('div', [
            createElement('a', {
              style: {
                color: optIndex === self.openIndex && self.extendStatus === 1 ? '#1996f9' : '#999',
                padding: '0 16px 0 0',
              },
              on: {
                click() {
                  self.openIndex = optIndex;
                  self.extendStatus = 1;
                },
              },
            }, '详情'),
            createElement('a', {
              style: {
                color: optIndex === self.openIndex && self.extendStatus === 2 ? '#1996f9' : '#999',
                padding: '0 16px 0 0',
              },
              on: {
                click() {
                  self.openIndex = optIndex;
                  self.extendStatus = 2;
                },
              },
            }, '朋友'),
          ]);
        },
        extendRowRender(createElement, { optItem, optIndex }) {
          const childNode = [];

          if (optIndex === self.openIndex && self.extendStatus === 1) {
            childNode.push(createElement('w-table', {
              props: {
                col: detailCol,
                options: optItem.extend1,
              },
            }));
          }

          if (optIndex === self.openIndex && self.extendStatus === 2) {
            childNode.push(createElement('w-table', {
              props: {
                col: detailCol,
                options: optItem.extend2,
              },
            }));
          }

          if (childNode.length) {
            return createElement('div', childNode);
          }

          return null;
        },
      }],
      extendOptions: ${JSON.stringify(extendOptions)},
    };
  },
}`,
};

export default extend;
