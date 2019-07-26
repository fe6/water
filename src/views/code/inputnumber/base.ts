import { ApiEntity, CodeCommonParamsEntity } from '@/views/entity/demoentity';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = ({ attr }: CodeCommonParamsEntity = {}): string => `<w-input-number${attr ? ` ${attr}` : ''} />`;

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: codeCommon({ attr: 'v-model="baseValue"' }),
  js: `{
  data() {
    return {
      baseValue: 1,
    }
  },
}`,
};

export default base;
