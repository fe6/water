import { ApiEntity } from '@/views/entity/demoentity';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-progress stroke-linecap="square" v-model="value" style="margin-bottom: 8px"></w-progress>
<div>
  <w-progress stroke-linecap="square" v-model="value" type="circle" style="margin-bottom: 8px"></w-progress>
  <w-progress stroke-linecap="square" v-model="value" type="dashboard" style="margin-bottom: 8px"></w-progress>
</div>`;

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      value: 30,
    };
  },
}`,
};

export default base;
