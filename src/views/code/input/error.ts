import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '内容验证错误的状态',
  desc: '将属性 <code>error</code> 设置为方法并返回为 true 即可。',
  code: '<w-input placeholder="内容不能为空" :error="errorFn" />',
  js: `{
  methods: {
    errorFn: (ev, value) => !value,
  },
}`,
};

export default base;
