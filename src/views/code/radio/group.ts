import { ApiEntity } from '@/views/entity/demoentity';
import { defaultDatas } from '@/views/code/radio/base';

const base: ApiEntity = {
  title: 'Radio 组',
  desc: '方便的从数组生成 Radio 组。',
  code:
    '<w-radio-group v-model="radioValue" :options="defaultDatas"></w-radio-group>',
  js: `{
  data() {
    return {
      defaultDatas: ${JSON.stringify(defaultDatas)},
      radioValue: '鸭梨',
    };
  },
}`,
};

export default base;
