import { ApiEntity } from '@/views/entity/demoentity';
import { sortOptions } from '@/views/code/table/options/sort';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-table
  ref="sortTable"
  :col="showSortCol"
  :options="sortOptions"
  @change="showSortChange"
></w-table>
`;

const base: ApiEntity = {
  title: '排序',
  desc: '在 <code>col</code> 中配置 sorter 参数即可实现前端处理排序。<code>showSort</code> 参数是只出发 <code>change</code> 方法可通过后端配合进行排序。清除排序可 ref 表格调用 <code>sortTable</code> 方法。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      showSortCol: [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '100px',
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
      }, { 
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '100px',
        sorter: (a, b) => a.age - b.age,
        defaultSortOrder: 'descend',
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        sorter: (a, b) => a.address.length - b.address.length,
      }],
      sortOptions: ${JSON.stringify(sortOptions)},
    };
  },
  methods: {
    showSortChange(params) {
      console.log(params, '排序的参数');
    },
  },
}`,
};

export default base;
