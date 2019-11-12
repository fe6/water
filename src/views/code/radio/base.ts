import { ApiEntity, CodeCommonParamsEntity } from '@/views/entity/demoentity';

export const defaultDatas = [
  {
    value: 'Apple',
    label: '苹果',
    loading: false,
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
export const codeCommon = ({ attr }: CodeCommonParamsEntity = {}): string =>
  `<w-radio${
    attr ? ` ${attr}` : ''
  } v-for="( data, dataIndex ) in defaultDatas" :label="data.label" :key="dataIndex" :loading="data.loading">{{data.value}}</w-radio>`;

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: codeCommon({ attr: 'v-model="radioValue"' }),
  js: `{
  data() {
    return {
      defaultDatas: ${JSON.stringify(defaultDatas)},
      radioValue: '苹果',
    };
  },
}`,
};

export default base;
