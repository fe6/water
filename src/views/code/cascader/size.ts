import { ApiEntity } from '@/views/entity/demoentity';
import { defaultDatas } from '@/views/code/cascader/base';

const base: ApiEntity = {
  title: '三种大小',
  desc: '我们为 <Cascader /> 输入框定义了三种尺寸（大、默认、小），高度分别为 32px、28px 和 24px。',
  code: `<w-cascader size="small" :options="defaultDatas"></w-cascader>
<br />
<w-cascader :options="defaultDatas"></w-cascader>
<br />
<w-cascader size="large" :options="defaultDatas"></w-cascader>`,
  js: `
  {
    data() {
      return {
        defaultDatas: ${JSON.stringify(defaultDatas)}
      };
    },
  }`,
};

export default base;
