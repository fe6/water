import { ApiEntity } from '@/views/entity/demoentity';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-page :page-size="Number(pageSize)" :total="100" style="vertical-align: middle;display: inline-block"></w-page>
<w-select v-model="pageSize" :options="selOption" size="large" style="vertical-align: middle;"></w-select>`;

const base: ApiEntity = {
  title: '改变',
  desc: '改变每页显示条目数。',
  code: codeCommon(),
  js: `{
    data() {
      return {
        pageSize: '10',
        selOption: [{
          value: '10 条 / 页',
          label: '10',
        }, {
          value: '20 条 / 页',
          label: '20',
        }, {
          value: '30 条 / 页',
          label: '30',
        }, {
          value: '40 条 / 页',
          label: '40',
        }],
      };
    },
  }`,
};

export default base;
