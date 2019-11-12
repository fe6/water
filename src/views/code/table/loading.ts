import { ApiEntity } from '@/views/entity/demoentity';
import { loadingOptions } from '@/views/code/table/options/loading';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-button @click="btnFn">{{loadingStatus ? '加载中' : '加载数据'}}</w-button>
<br />
<br />
<w-table
  :col="loadingCol"
  :options="loadingOptions"
  :loading="loadingStatus"
></w-table>`;

const loading: ApiEntity = {
  title: '远程加载数据',
  desc:
    '这个例子通过简单的定时器模拟 ajax 读取方式，演示了如何从服务端读取并展现数据以及页面 loading 效果。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      loadingStatus: false,
      loadingCol: [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '100px',
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '100px',
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      }, {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        width: '180px',
        render(createElement, { text }) {
          return text.map((textName, textIdx) => createElement('w-tag', {
            props: {
              color: ['#eb2f96', '#f5222d', '#1996f9'][textIdx],
            },
          }, textName));
        },
      }, {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
        width: '30px',
      }],
      loadingOptions: ${loadingOptions},
    };
  },
  methods: {
    btnFn() {
      this.loadingStatus = true;

      setTimeout(() => {
        this.loadingStatus = false;
      }, 1000);
    },
  },
}`,
};

export default loading;
