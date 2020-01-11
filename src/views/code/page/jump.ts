/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-page v-model="jumpValue" :total="100" style="vertical-align: middle;display: inline-block"></w-page>
<w-page-jump v-model="jumpValue" style="vertical-align: middle;"></w-page-jump>`;

const base: ApiEntity = {
  title: '跳转',
  desc: '快速跳转到某一页。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      jumpValue: 1,
    };
  },
}`,
};

export default base;
