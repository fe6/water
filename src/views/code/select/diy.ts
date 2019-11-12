import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, defaultDatas } from '@/views/code/select/base';

const base: ApiEntity = {
  title: '扩展菜单',
  desc: '添加 <code>slot="diy"</code> 属性即可。',
  code: codeCommon({
    attr: 'v-model="selectValue"',
    content:
      '\n  <div slot="diy" style="cursor: pointer; padding: 5px 12px; line-height: 22px; border-top: 1px solid #ccc; color: #1996f9; font-size: 12px;" @click="digFn">添加元素</div>\n',
  }),
  js: `{
  data() {
    return {
      selectValue: '更多',
      defaultDatas: ${JSON.stringify(defaultDatas)},
    };
  },
  methods: {
    digFn(ev) {
      this.defaultDatas.push({
        value: \`new\${this.defaultDatas.length}\`,
        label: \`新建\${this.defaultDatas.length}\`,
        loading: false,
      });
      ev.stopPropagation();
    },
  },
}`,
};

export default base;
