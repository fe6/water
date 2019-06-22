import cloneDeep from 'lodash/cloneDeep';
import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon, defaultDatas } from '@/views/code/radio/base';

export const myLoadingDatas = cloneDeep(defaultDatas);

const base: ApiEntity = {
  title: '选中之前',
  desc: '添加 <code>before</code> 属性即可。',
  code: codeCommon({ attr: 'value="鸭梨" :before="()=> new Promise((resolve) => {resolve();})"' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    datas: myLoadingDatas,
    props: {
      before: context.props.data.before,
    },
  }),
};

export default base;
