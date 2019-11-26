import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: '<w-calendar @change="changeFn"></w-calendar>',
  js: `{
  methods: {
    changeFn(params) {
      console.log(params, 'base change');
    },
  },
}`,
};

export default base;
