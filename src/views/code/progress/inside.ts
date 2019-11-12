import { ApiEntity } from '@/views/entity/demoentity';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-progress inside :stroke-width="20" v-model="valueDefault" style="margin-bottom: 8px"></w-progress>
<w-progress inside :stroke-width="20" status="success" v-model="valueSuccess" style="margin-bottom: 8px"></w-progress>
<w-progress inside :stroke-width="20" status="error" v-model="valueError" style="margin-bottom: 8px"></w-progress>
<w-progress inside :stroke-width="20" status="warning" v-model="valueWarning" style="margin-bottom: 8px"></w-progress>
<w-progress inside :stroke-width="20" :format="format" v-model="value100" style="margin-bottom: 8px"></w-progress>
<w-progress inside :stroke-width="20" :show-info="false" v-model="valueDefault" style="margin-bottom: 8px"></w-progress>`;

const base: ApiEntity = {
  title: '百分比内显',
  desc:
    'Progress 组件可通过 <code>stroke-width</code> 属性更改进度条的高度，并可通过 <code>inside</code> 属性来将进度条描述置于进度条内部。注意： <code>inside</code> 只对 <code>type="line"</code> 生效。当 <code>inside</code> 模式的时候，只显示文字，不显示图标及状态。',
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
