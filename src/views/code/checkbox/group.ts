import { ApiEntity } from '@/views/entity/demoentity';
import { defaultDatas } from '@/views/code/checkbox/base';

const base: ApiEntity = {
  title: 'Checkbox 组',
  desc: '方便的从数组生成 Checkbox 组。',
  code: '<w-checkbox-group :options="defaultDatas"></w-checkbox-group>',
  js: `{
  data() {
    return {
      defaultDatas: ${JSON.stringify(defaultDatas)}
    };
  },
}`,
};

export default base;
