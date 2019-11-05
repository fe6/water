import { ApiEntity } from '@/views/entity/demoentity';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => '<w-progress type="dashboard" v-model="valueDefault"></w-progress>';

const base: ApiEntity = {
  title: '基本使用',
  desc: '通过设置 <code>type="dashboard"</code>，可以很方便地实现仪表盘样式的进度条。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      valueDefault: 75,
    };
  },
}`,
};

export default base;
