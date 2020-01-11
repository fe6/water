/** @format */

import { ApiEntity } from '@/views/entity/demoentity';
import { mergeOptions } from '@/views/code/table/options/merge';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-table
  :col="mergeCol"
  :options="mergeOptions"
  border
></w-table>`;

const merge: ApiEntity = {
  title: '表格行/列合并',
  desc:
    '表头只支持列合并，使用 column 里的 colSpan 进行设置。表格支持行/列合并，使用 render 里的单元格属性 colSpan 或者 rowSpan 设值为 0 时，设置的表格不会渲染。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      mergeCol: [{
        title: 'Name',
        dataIndex: 'name',
        width: '150px',
        col: ({ optIndex }) => {
          if (optIndex === 4) {
            return 5;
          }
          return undefined;
        },
      }, {
        title: 'Age',
        dataIndex: 'age',
        width: '100px',
        col: ({ optIndex }) => {
          if (optIndex === 4) {
            return 0;
          }
          return undefined;
        },
      }, {
        title: 'Home phone',
        dataIndex: 'tel',
        colSpan: 2,
        width: '150px',
        row: ({ optIndex }) => {
          if (optIndex === 2) {
            return 2;
          }
          return undefined;
        },
        col: ({ optIndex }) => {
          if (optIndex === 4) {
            return 0;
          }
          return undefined;
        },
      }, {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',
        row: ({ optIndex }) => {
          if (optIndex === 3) {
            return 0;
          }
          return undefined;
        },
        col: ({ optIndex }) => {
          if (optIndex === 4) {
            return 0;
          }
          return undefined;
        },
      }, {
        title: 'Address',
        dataIndex: 'address',
        width: '200px',
        col: ({ optIndex }) => {
          if (optIndex === 4) {
            return 0;
          }
          return undefined;
        },
      }],
      mergeOptions: ${JSON.stringify(mergeOptions)},
    };
  },
}`,
};

export default merge;
