/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '动态添加和删除',
  desc: '用数组生成一组标签，可以动态添加和删除。',
  code: `<w-tag size="small" color="#1996f9" v-for="(tagItem, tagIndex) in newTags" :closable="tagItem.closable" :key="\`small\${tagIndex}\`">{{tagItem.value}}</w-tag>
<w-new-tag size="small" placeholder="数字标签" :before="beforeFn" :error="errorFn" :loading="newtagLoading" @change="newTageChange">标签</w-new-tag>
<br />
<br />
<w-tag color="#1996f9" v-for="(tagItem, tagIndex) in newTags" :closable="tagItem.closable" :key="tagIndex">{{tagItem.value}}</w-tag>
<w-new-tag placeholder="数字标签" :before="beforeFn" :error="errorFn" :loading="newtagLoading" @change="newTageChange">标签</w-new-tag>
<br />
<br />
<w-tag size="large" color="#1996f9" v-for="(tagItem, tagIndex) in newTags" :closable="tagItem.closable" :key="\`large\${tagIndex}\`">{{tagItem.value}}</w-tag>
<w-new-tag size="large" placeholder="数字标签" :before="beforeFn" :error="errorFn" :loading="newtagLoading" @change="newTageChange">标签</w-new-tag>`,
  js: `{
  data() {
    return {
      newtagLoading: false,
      newTags: [
        {
          value: '不可删除',
          closable: false,
        },
      ],
    };
  },
  methods: {
    newTageChange(params) {
      this.newTags.push({
        value: params.value,
        loading: false,
        closable: true,
      });
    },
    errorFn(errParams) {
      return !/^[0-9]+$/.test(errParams.value);
    },
    beforeFn() {
      this.newtagLoading = true;
  
      return new Promise((resolve) => {
        setTimeout(() => {
          this.newtagLoading = false;
          resolve();
        }, 1000);
      });
    },
  },
}`,
};

export default base;
