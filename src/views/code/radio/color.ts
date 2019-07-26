import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, defaultDatas } from '@/views/code/radio/base';

const base: ApiEntity = {
  title: '定制颜色',
  desc: '添加 <code>checkColor</code> 和 <code>hoverColor</code> 属性即可。',
  code: codeCommon({ attr: 'v-model="radioValue" text-color="#1996f9" check-color="#f00" hover-color="#0f0"' }),
  js: `{
  data() {
    return {
      defaultDatas: ${JSON.stringify(defaultDatas)},
      radioValue: '更多',
    };
  },
}`,
};

export default base;
