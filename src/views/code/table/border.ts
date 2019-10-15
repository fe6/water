import { ApiEntity } from '@/views/entity/demoentity';
import { borderCol, borderOptions } from '@/views/code/table/options/border';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-table
  :col="borderCol"
  border
  :options="borderOptions"
  :header="(creatElement) => creatElement('div', 'header')"
  :footer="(creatElement) => creatElement('div', 'footer')"
></w-table>`;

const border: ApiEntity = {
  title: '带边框',
  desc: '添加表格边框线，页头和页脚。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      borderCol: ${borderCol},
      borderOptions: ${borderOptions},
    };
  },
}`,
};

export default border;
