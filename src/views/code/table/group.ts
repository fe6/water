/** @format */

import { ApiEntity } from '@/views/entity/demoentity';
import { groupCol, groupOptions } from '@/views/code/table/options/group';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-table
  :col="groupCol"
  :options="groupOptions"
  border
  :scroll="{ x: '130%', y: 180 }"
></w-table>`;

const group: ApiEntity = {
  title: '表头分组',
  desc:
    '<code>columns[n]</code> 可以内嵌 <code>children</code> ，以渲染分组表头。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      groupCol: ${groupCol},
      groupOptions: ${groupOptions},
    };
  },
}`,
};

export default group;
