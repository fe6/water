/** @format */

import { ApiEntity } from '@/views/entity/demoentity';
import { emptyCol, emptyOptions } from '@/views/code/table/options/empty';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string =>
  '<w-table :col="emptyCol" :options="emptyOptions"></w-table>';

const empty: ApiEntity = {
  title: '空状态',
  desc: '数据为空自动为空状态',
  code: codeCommon(),
  js: `{
  data() {
    return {
      emptyCol: ${emptyCol},
      emptyOptions: ${emptyOptions},
    };
  },
}`,
};

export default empty;
