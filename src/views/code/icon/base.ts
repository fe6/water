/** @format */

import { ApiEntity, CodeCommonParamsEntity } from '@/views/entity/demoentity';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = ({
  attr,
  content,
}: CodeCommonParamsEntity = {}): string =>
  `<w-icon${attr ? ` ${attr}` : ''}${content ? '' : ' /'}>${
    content ? `${content}</w-icon>` : ''
  }`;

const base: ApiEntity = {
  title: '基本使用',
  desc: '默认图标，只有一款。',
  code: codeCommon({ content: '' }),
};

export default base;
