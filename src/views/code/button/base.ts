import { upperFirst } from 'lodash/string';
import { ApiEntity, CodeCommonParamsEntity } from '@/views/entity/demoentity';

const types = ['', 'info', 'border', 'dashed', 'danger'];

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = ({ attr, content }: CodeCommonParamsEntity = {}): string => types.reduce(
  (acc: string, type: string, index: number) => `${acc}<w-button${attr ? ` ${attr}` : ''}${type ? ` type="${type}"` : ''}>${content || (upperFirst(type) || 'Default')}</w-button>${index < types.length - 1 ? '\n' : ''}`,
  '',
);

const base: ApiEntity = {
  title: '按钮类型',
  desc: '按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。',
  code: codeCommon(),
};

export default base;
