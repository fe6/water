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
}: CodeCommonParamsEntity = {}): string => `<w-breadcrumb>
  <w-breadcrumb-item>首页</w-breadcrumb-item>
  <w-breadcrumb-item${attr ? ` ${attr}` : ''}>${content}</w-breadcrumb-item>
  <w-breadcrumb-item>面包屑</w-breadcrumb-item>
</w-breadcrumb>`;

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: codeCommon({
    attr: 'href="http://water.lab.evente.cn"',
    content: '水滴',
  }),
};

export default base;
