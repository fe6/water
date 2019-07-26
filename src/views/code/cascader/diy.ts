import { ApiEntity } from '@/views/entity/demoentity';
import { defaultDatas } from '@/views/code/cascader/base';

const base: ApiEntity = {
  title: '默认值',
  desc: '切换按钮和结果分开。',
  code: `<span style="padding-right: 16px;">{{diyValue.length > 0 ? diyValue.join(',') : '暂未选择'}}</span>
<br />
<br />
<w-cascader v-model="diyValue" :options="defaultDatas" style="display: inline-block;">
  <a style="color: #1996f9" href="javascript:;">选择城市</a>
</w-cascader>`,
  js: `
  {
    data() {
      return {
        defaultDatas: ${JSON.stringify(defaultDatas)},
        diyValue: [],
      };
    },
  }
`,
};

export default base;
