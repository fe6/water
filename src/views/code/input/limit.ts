import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '输入长度限制',
  desc: '<code>maxLength</code> 是原生属性，用来限制输入框的字符长度，其中字符长度是用 <code>Javascript</code> 的字符串长度统计的。对在使用 <code>maxLength</code> 属性限制最大输入长度的同时，可通过设置 <code>showWordLimit</code> 属性来展示字数统计。。',
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
