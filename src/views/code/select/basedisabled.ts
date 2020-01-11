/** @format */

import { ApiEntity, CodeCommonParamsEntity } from '@/views/entity/demoentity';

export const defaultDatas = [
  {
    value: 'Apple',
    label: '苹果',
    loading: false,
    disabled: true,
  },
  {
    value: 'Pear',
    label: '鸭梨',
    loading: false,
  },
  {
    value: 'more',
    label: '更多',
    loading: false,
  },
];
/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = ({
  attr,
  content = '',
}: CodeCommonParamsEntity = {}): string => `<w-select disabled size="small"${
  attr ? ` ${attr}` : ''
} :options="defaultDatas">${content}</w-select>
<br />
<w-select v-model="selectValue" disabled${
  attr ? ` ${attr}` : ''
} :options="defaultDatas">${content}</w-select>
<br />
<w-select disabled size="large"${
  attr ? ` ${attr}` : ''
} :options="defaultDatas">${content}</w-select>`;

const base: ApiEntity = {
  title: '单选禁用',
  desc: '设置 <code>disabled</code> 即可。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      selectValue: '更多',
      defaultDatas: ${JSON.stringify(defaultDatas)},
    };
  },
}`,
};

export default base;
