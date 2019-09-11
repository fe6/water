import { ApiEntity } from '@/views/entity/demoentity';
import { fixOptions } from '@/views/code/table/options/fix';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-table
  :col="fixCol"
  :options="fixOptions"
  :scroll="{ x: '130%', y: 240 }"
></w-table>`;

const fix: ApiEntity = {
  title: '基本使用',
  desc: '适合同时展示有大量数据和数据列。列头与内容不对齐或出现列重复，请指定固定列的宽度 width。如果指定 width 不生效，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有超长连续字段破坏布局。建议指定 scroll.x 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 scroll.x。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      fixCol: [
        {
          title: 'Full Name',
          width: 140,
          dataIndex: 'name',
          key: 'name',
          fixed: 'left',
        },
        {
          title: 'Age',
          width: 60,
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Column 1',
          dataIndex: 'address',
          key: '1',
          width: 220,
        },
        {
          title: 'Column 2',
          dataIndex: 'address',
          key: '2',
          width: 220,
        },
        {
          title: 'Column 3',
          dataIndex: 'address',
          key: '3',
          fixed: 'right',
        },
      ],
      fixOptions: ${JSON.stringify(fixOptions)},
    };
  },
}`,
};

export default fix;
