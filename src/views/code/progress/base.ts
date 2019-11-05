import { ApiEntity } from '@/views/entity/demoentity';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-progress v-model="valueDefault" style="margin-bottom: 8px"></w-progress>
<w-progress status="success" v-model="valueSuccess" style="margin-bottom: 8px"></w-progress>
<w-progress status="error" v-model="valueError" style="margin-bottom: 8px"></w-progress>
<w-progress status="warning" v-model="valueWarning" style="margin-bottom: 8px"></w-progress>
<w-progress :format="format" v-model="value100" style="margin-bottom: 8px"></w-progress>
<w-progress :show-info="false" v-model="valueDefault" style="margin-bottom: 8px"></w-progress>`;

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      valueDefault: 30,
      valueSuccess: 50,
      valueWarning: 70,
      valueError: 34,
      value100: 100,
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : percentage + '%';
    }
  },
}`,
};

export default base;
