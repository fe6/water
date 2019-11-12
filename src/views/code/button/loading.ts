import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon } from '@/views/code/button/base';

const base: ApiEntity = {
  title: '加载中状态',
  desc:
    '添加 <code>loading</code> 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。',
  code: codeCommon({ attr: 'loading' }),
};

export default base;
