/* eslint-disable */
import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '格式化处理',
  desc: '通过 <code>formatter</code> 格式化数字，以展示具有具体含义的数据，往往需要配合 <code>parser</code> 一起使用。',
  code: `<w-input-number :value="formatterValue" :formatter="val => '$'+ val" :parser="val=> String(val).replace(/\$\s?/g, '')" style="display: block; width: 100%;" />`,
  js: `{
  data() {
    return {
      formatterValue: 12345678,
    };
  },
}`,
};

export default base;
