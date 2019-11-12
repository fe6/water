import { ApiEntity } from '@/views/entity/demoentity';
import { baseCol, baseOptions } from '@/views/code/table/options/base';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string =>
  '<w-table :col="baseCol" :options="baseOptions"></w-table>';

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      baseCol: ${baseCol},
      baseOptions: ${baseOptions},
    };
  },
}`,
};

export default base;
