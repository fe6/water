import { ApiEntity } from '@/views/entity/demoentity';
import {
  checkboxCol,
  checkboxOptions,
} from '@/views/code/table/options/checkbox';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-table :col="checkboxCol" :options="checkboxOptions">
  <template #header-checkbox="{options, colItem}">
    <w-checkbox
      :value="options.filter(optItem => optItem.checked).length === options.length"
      :indeterminate="options.filter(optItem => !optItem.checked).length < options.length"
      :change="checkAll.bind(this, options)"
    />
  </template>
  <template #checkbox="{optItem}">
    <w-checkbox v-model="optItem.checked" />
  </template>
</w-table>`;

const base: ApiEntity = {
  title: '可选择',
  desc:
    '第一列是联动的选择框。通过 <a class="link" href="https://cn.vuejs.org/v2/api/#v-slot" target="_blank">v-slot</a> 定义表格任何地方。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      checkboxCol: ${checkboxCol},
      checkboxOptions: ${checkboxOptions},
    };
  },
  methods: {
    checkAll(options, params) {
      options.forEach(optItem => {
        Object.assign(optItem, {
          checked: params.status,
        });
      });
    },
  },
}`,
};

export default base;
