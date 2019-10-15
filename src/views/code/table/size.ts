import { ApiEntity } from '@/views/entity/demoentity';
import { sizeCol, sizeOptions } from '@/views/code/table/options/size';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-table
  :col="sizeCol"
  :options="sizeOptions"
  :scroll="{ x: '130%', y: 300 }"
  border
  size="small"
></w-table>`;

const base: ApiEntity = {
  title: '紧凑型',
  desc: '两种紧凑型的列表，小型列表只用于对话框内。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      sizeCol: ${sizeCol},
      sizeOptions: ${sizeOptions},
    };
  },
}`,
};

export default base;
