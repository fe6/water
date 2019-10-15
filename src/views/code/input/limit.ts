import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '内容验证错误的状态',
  desc: '将属性 <code>error</code> 设置为方法并返回为 true 即可。',
  code: '<w-input show-word-limit max-length="10" v-model="value" />',
  js: `{
  data() {
    return {
      value: '这个里面的内容很长很长很长很长很长很长很长很长',
    };
  },
  methods: {
    errorFn: (ev, value) => !value,
  },
}`,
};

export default base;
