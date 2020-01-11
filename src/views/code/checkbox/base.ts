/** @format */

import { ApiEntity, CodeCommonParamsEntity } from '@/views/entity/demoentity';

export interface DataEntity {
  value: string;
  label: string;
}

export const defaultDatas = [
  {
    value: 'Apple',
    label: '苹果',
  },
  {
    value: 'Pear',
    label: '鸭梨',
  },
  {
    value: 'more',
    label: '更多',
  },
];
/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = ({ attr }: CodeCommonParamsEntity = {}): string =>
  `<w-checkbox${
    attr ? ` ${attr}` : ''
  } v-for="( data, dataIndex ) in defaultDatas" :label="data.label" :key="dataIndex">{{data.value}}</w-checkbox>`;

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      defaultDatas: ${JSON.stringify(defaultDatas)}
    };
  },
}`,
};

export default base;
