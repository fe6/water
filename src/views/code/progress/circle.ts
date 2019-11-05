import { ApiEntity } from '@/views/entity/demoentity';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-progress type="circle" v-model="valueDefault" :width="80" :stroke-width="3" style="margin-bottom: 8px"></w-progress>
<w-progress type="circle" status="success" v-model="valueSuccess" :width="80" :stroke-width="3" style="margin-bottom: 8px"></w-progress>
<w-progress type="circle" status="error" v-model="valueError" :width="80" :stroke-width="3" style="margin-bottom: 8px"></w-progress>
<w-progress type="circle" status="warning" v-model="valueWarning" :width="80" :stroke-width="3" style="margin-bottom: 8px"></w-progress>
<w-progress type="circle" :format="format" v-model="value100" :width="80" :stroke-width="3" style="margin-bottom: 8px"></w-progress>
<w-progress type="circle" :show-info="false" v-model="valueDefault" :width="80" :stroke-width="3" style="margin-bottom: 8px"></w-progress>`;

const base: ApiEntity = {
  title: '环形进度条',
  desc: '圈形的进度。',
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
